from flask import Flask, cli, flash, render_template, request, redirect, url_for, request, jsonify, session
from werkzeug.utils import secure_filename

from datetime import *

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_mail import Mail, Message
from flask_bootstrap import Bootstrap

from flask_bcrypt import Bcrypt

from email.message import EmailMessage
import ssl
import smtplib
import csv
import pandas as pd
import numpy as np
import logging
from flask import request
from functools import wraps
import sys
import os

from datetime import date
UPLOAD_FOLDER = 'C:\\Users\\yuan\\Desktop\\cowplus\\cowplusvenv\\datafiles_csv\\userupload'
current_dir = os.path.dirname(os.path.abspath(__file__))
ALLOWED_EXTENSIONS = {'txt', 'csv'}
python_files_dir = os.path.join(current_dir, 'python_files')
upload_files_dir = os.path.join(current_dir, 'datafiles_csv')

os.chdir("C:\\Users\\yuan\\Desktop\\cowplusNPM new\\cowplusvenv")

logging.basicConfig(level=logging.INFO)
app = Flask(__name__, template_folder='templates')
Bootstrap(app)
app.secret_key = "yabujin"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.permanent_session_lifetime = timedelta(minutes=60)
import random
import re



def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

db = SQLAlchemy(app)
migrate = Migrate(app, db)
mail = Mail(app)
bcrypt = Bcrypt(app)

class users(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True)
    name = db.Column("name", db.String(100))
    email = db.Column("email", db.String(100))
    password = db.Column("password", db.String(100))
    is_admin = db.Column(db.Boolean, nullable=False, default=False)
    is_confirmed = db.Column(db.Boolean, nullable=False, default=False)
    confirmed_on = db.Column(db.DateTime, nullable=True)

    def __init__(self, name, email, password, is_admin=False, is_confirmed=False, confirmed_on=None):
        self.name = name
        self.email = email
        self.password = password
        self.is_admin = is_admin
        self.is_confirmed = is_confirmed
        self.confirmed_on = confirmed_on



vc = []
vc2 = []
dc = []
vcss = []
dcss = []

email_sender = "cowplusnoreply@gmail.com"
email_password = "rkjhjkvetassfwkx"

all_d_files = []
all_m_files = []

# local path
sys.path.append(python_files_dir)
import variables
import upload
import data_merger

# -- routes -- #

def log(action):
    ip_address = request.remote_addr  # Get client's IP address
    logging.info(f"\n\n[FLASK] >>> action: {action} // IP: {ip_address}\n")
    return

def log_action(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        ip_address = request.remote_addr
        logging.info(f"\n\n[FLASK] >>> action: {request.url_rule}, // IP: {ip_address}\n")
        return f(*args, **kwargs)
    return decorated_function

def sendverification(code):
   em = EmailMessage()
   email_receiver = str(session["email"])
   subject = "Email verification code"
   body = "Your verification code is: " + str(code)
   em['From'] = email_sender
   em['To'] = email_receiver
   em['Subject'] = subject
   em.set_content(body)
   context = ssl.create_default_context()

   with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
       smtp.login(email_sender, email_password)
       smtp.sendmail(email_sender, email_receiver, em.as_string())
   return "sent"

@app.cli.command("init-db")
def init_db():
    db.create_all()
    print("Database initialized.")

@app.cli.command('listusers')
def list_users():
    all_users = users.query.all()
    for user in all_users:
        print(f'ID: {user._id}, Name: {user.name}, Email: {user.email}, Password (hashed): {user.password}')

@app.cli.command("createadmin")
def create_admin():
    nm = input("Enter username: ")
    em = input("Enter email address: ")
    password = input("Enter password: ")
    try:
        user = users(
            name=nm,
            email=em,
            password=bcrypt.generate_password_hash(password).decode('utf-8'),
            is_admin=True,
            is_confirmed=True,
            confirmed_on=datetime.now(),
        )
        db.session.add(user)
        db.session.commit()
        print(f"Admin with name {nm} and email {em} created successfully!")
    except Exception as e:
        print("Couldn't create admin user.")
        print(e)

@app.cli.command("resetdatabase")
def delall():
    print("Are you sure you want to delete all users from the database? This action is irreversible.\nType \"CONFIRM\" to reset the database.")
    confirm = input("> ")
    if confirm == "CONFIRM":
        found_user = users.query.all()
        for user in found_user:
            db.session.delete(user)
            db.session.commit()
        print("All users wiped.")
    else:
        print("Wipe aborted.")

@app.route("/")
def home():
    return redirect("/index.html")

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if "user" in session:
        if session["verified"] == True:
            print(session["verified"])
            if request.method == 'POST':
                # check if the post request has the file part
                if 'file' not in request.files:
                    flash('No file part')
                    return redirect(request.url)
                file = request.files['file']
                # If the user does not select a file, the browser submits an
                # empty file without a filename.
                if file.filename == '':
                    flash('No selected file')
                    return redirect(request.url)
                if file and allowed_file(file.filename):
                    filename = secure_filename(file.filename)
                    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                    return redirect(url_for('download_file', name=filename))
        else:
            return redirect(url_for("verify"))
    else:
        flash("You are not logged in!")
        return redirect("/login")
    return render_template("upload.html")
    
@app.route("/index.html")
def goto_index():
    return render_template("index.html")

@app.route("/dataUnlimVar.html", methods=["POST", "GET"])
def goto_dataUnlimVar():
    if request.method == 'POST':
        return render_template("dataUnlimVar.html")
    else:
        return render_template("dataUnlimVar.html")
    
@app.route("/download.html")
def goto_download():
    return render_template("download.html")

@log_action
@app.route("/view", methods=["POST", "GET"])
def view():
    ip_address = request.remote_addr
    logging.info(f"/view request from {ip_address}")
    if "is_admin" in session and session["is_admin"]:
            return render_template("view.html", values=users.query.all())
    return '''<p>Access denied</p>'''

@app.route('/verifyFunction/', methods=['POST', 'GET'])  
def verifyFunction():
    global files
    global m_files, d_files, g_files, b_files
    global all_m_files, all_d_files
    verified = False
    # Get the list of files from webpage
    files = request.files.getlist("file")
    print(files)
    os.chdir("C:\\Users\\yuan\\Desktop\\cowplusNPM new\\cowplusvenv\\datafiles_csv")
    # Iterate for each file in the files List, and Save them
    for file in files:
        file.save(file.filename)
    m_files, d_files, g_files, b_files = upload.verify_files(files)
    if(len(b_files) == 0):
        verified = True
    print(m_files)
    print(d_files)
    print(g_files)
    print(b_files)
    for f in g_files:
        os.remove(f)
    for f in b_files:
        os.remove(f)
    response = {
        "message": "data processing successful",
        "status": 200,
        "good_files": g_files,
        "bad_files": b_files,
        "verification": verified
    }
    return response

@app.route('/uploadFunction', methods = ['POST', 'GET'])
def uploadFunction():
    global all_m_files, all_d_files
    print(m_files)
    print(d_files)
    for m in m_files:
        all_m_files.append(m)
    for d in d_files:
        all_d_files.append(d)
    print(all_m_files)
    print(all_d_files)
    files = request.files.getlist("file")
    username = session["user"]
    os.chdir(os.path.join("C:\\Users\\yuan\\Desktop\\cowplusNPM new\\cowplusvenv\\datafiles_csv", username))
    for file in files:
        file.save(file.filename)
    return redirect('/upload')

@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        log("login")
        session.permanent = True
        user = request.form["nm"]
        pwd = request.form["pwd"]

        found_user = users.query.filter_by(name=user).first()
        found_email = users.query.filter_by(email=user).first()

        if found_user:
            if bcrypt.check_password_hash(found_user.password, pwd):
                session["user"] = user
                session["email"] = found_user.email
                session["is_admin"] = found_user.is_admin
                session["verified"] = found_user.is_confirmed
            else:
                flash("Password incorrect.")
                return redirect(url_for("login"))
        elif found_email:
            if bcrypt.check_password_hash(found_email.password, pwd):
                session["user"] = found_email.name
                session["email"] = user
                session["is_admin"] = found_email.is_admin
                session["verified"] = found_email.is_confirmed
            else:
                flash("Password incorrect.")
                return redirect(url_for("login"))

        else:
            flash("User does not exist")
            return redirect(url_for("login"))

        return redirect(url_for("user"))
    else:
        if "user" in session:
            flash("Already logged in!")
            return redirect(url_for("user"))
        return render_template("login.html")

@app.route("/signup", methods=["POST", "GET"])
def signup():
    if request.method == "POST":
        log("signup")
        session.permanent = True
        user = request.form["nm"]
        em = request.form["em"]
        pwd = request.form['pwd']

        if len(user) > 20 or not user.isalnum():
            flash("Username must be 20 characters or fewer and must contain only numbers and letters.")
            return render_template("signup.html")

        if len(pwd) < 8 or not re.search("[a-zA-Z]", pwd) or not re.search("[0-9]", pwd):
            flash("Password must be at least 8 characters long and include both letters and numbers.")
            return render_template("signup.html")

        found_user = users.query.filter_by(name=user).first()
        found_email = users.query.filter_by(email=em).first()

        if found_user or found_email:
            flash("User already exists.")
            return render_template("signup.html")

        else:
            if user and em and pwd:
                if ("@" in em) and ("." in em):
                    flash("User created")
                    hashed_pwd = bcrypt.generate_password_hash(pwd).decode('utf-8')
                    usr = users(user, em, hashed_pwd)
                    db.session.add(usr)
                    db.session.commit()
                    session["user"] = user
                    session["email"] = em
                    session["verified"] = False
                    os.mkdir(os.path.join("C:\\Users\\yuan\\Desktop\\cowplusNPM new\\cowplusvenv\\datafiles_csv\\", session["user"]))
                    return redirect(url_for("verify"))
                else:
                    flash("Enter a valid email")
                    return render_template("signup.html")
            else:
                flash("Please fill out all fields")
                return render_template("signup.html")
    else:
        if "user" in session:
            flash("Already logged in!")
            return redirect(url_for("user"))
        return render_template("signup.html")
    
@app.route("/verify", methods=["POST", "GET"])
def verify():
    if "user" in session:
        if session["verified"] == False:
            if request.method == "POST":
                log("verify")
                userinput = request.form["code"]
                if str(userinput) == str(session["code"]):
                    flash("Verification successful!")
                    user = users.query.filter_by(name=session["user"]).first()
                    user.is_confirmed = True
                    user.confirmed_on = datetime.now()
                    db.session.commit()
                    session["verified"] = True
                    return redirect(url_for("user"))
                else:
                    flash("Incorrect code. (Refresh this page for a new code)")
                    print("form:", userinput)
                    print("code:", session["code"])
                    return render_template("verify.html")
            else:
                log("sendcode")
                # send email with code  
                code = random.randint(100000, 999999)
                session["code"] = code
                sendverification(code)
                print(session["code"])
                return render_template("verify.html")
    return redirect(url_for("login"))

@app.route("/user", methods=["POST", "GET"])
def user():
    email = None
    if "user" in session:
        if session["verified"] == False:
            flash("Please verify your email.")
        user = session["user"]
        found_user = users.query.filter_by(name=user).first()
        if request.method == "POST":
            email = request.form["email"]
            session["verified"] = False
            found_user.is_confirmed = False
            session["email"] = email
            found_user.email = email
            db.session.commit()
            flash("Email saved!")
            return redirect(url_for("verify"))
        else:
            if "email" in session:
                email = session["email"]
        username = found_user.name
        flash("Logged in as " + username)
        return render_template("user.html", email=email)
    else:
        return redirect(url_for("login"))

@app.route("/logout")
def logout():
    log("logout")
    session.pop("user", None)
    session.pop("email", None)
    session.pop("is_admin", None)
    session.pop("verified", None)
    flash("Logged out successfully.")
    return redirect(url_for("login"))

# variableChooser()
@app.route('/variableChooser', methods=['POST'])
def processvc():
    global vc
    data = request.get_json()
    vc = data['array']
    return 'okay' # replace

@app.route('/variableChooser2', methods=['POST'])
def processvc2():
    global vc
    data = request.get_json()
    t = data['array']
    vc = vc + t
    return 'okay' # replace

# datasetChooser()
@app.route('/datasetChooser', methods=['POST'])
def processdc():
    global dc
    data = request.get_json()
    dc = data['array']
    return 'okay'

# variableChooserSecondStep()
@app.route('/variableChooserSecondStep', methods=['POST'])
def processvcss():
    global vcss
    vcss = []
    data = request.get_json()
    vcss = data['array']
    return 'okay' # replace

# datasetChooserSecondStep()
@app.route('/datasetChooserSecondStep', methods=['POST'])
def processdcss():
    global dcss
    dcss = []
    data = request.get_json()
    dcss = data['array']
    return 'okay'

@app.route('/createDf/', methods=['POST', "GET"])
def create_df():
    global dataframe
    global dataframe2

    global dc
    global vc
    i = 0
    while i < len(dc):
        if dc[i] is None:
            dc = dc[:i] + dc[i+1:]
        else:
            i += 1
    i = 0
    while i < len(vc):
        if vc[i] is None:
            vc = vc[:i] + vc[i+1:]
        else:
            i += 1
    
    dataframe = data_merger.createNewDataList(dc, vc) # datasetChooser, variableChooser
    dataframe = dataframe.drop(["eventID"], axis = 1)
    sample = dataframe.loc[:999]
    print("converting to json...")
    new_df = sample.to_json(orient="records")
    dataframe2 = dataframe.copy(deep = True)
    response = {
        "message": "data processing successful",
        "status": 200,
        "new_df": new_df
    }
    return response

@app.route('/backbutton2/', methods=['POST', "GET"])
def back_button_2():
    global dataframe
    global dataframe2
    sample = dataframe.loc[:999]
       
    print("converting to json...")
    new_df = sample.to_json(orient="records")
    response = {
        "message": "data processing successful",
        "status": 200,
        "new_df": new_df
    }
    return response

@app.route('/createDfSS/', methods=['POST', "GET"])
def create_df_secondstep():
    global dataframe
    global dataframe2
    dataframe2 = data_merger.createNewDataListSecondStep(dataframe, dcss, vcss, dc, vc)
    dataframe2 = dataframe2.drop(["eventID_state1"], axis = 1)
    dataframe2 = dataframe2.drop(["eventID_state2"], axis = 1)
    sample2 = dataframe2.loc[:999]
    print("converting to json...")
    new_df = sample2.to_json(orient="records")
    
    response = {
        "message": "data processing successful",
        "status": 200,
        "new_df": new_df
    }
    return response

@app.route("/displayData.html", methods=["POST", "GET"])
def goto_displayData():
    if request.method == 'POST':
        return render_template("displayData.html")
    else:
        # makes no sense to be at this page without hitting the "generate" button
        return render_template("error")

@app.route('/downloadDf/', methods=['POST', "GET"])
def downloadCSV():
    today = date.today()

    csv = dataframe2.to_csv("~/Downloads/" + "cowplus_online_"+str(today)+".csv", index = False)
    print("csv converted")
    response = {
        "message": "data processing successful",
        "status": 200,
        "csv": csv
    }
    return response

# generic for all req. to save code

# -- TEST FUNCTIONS. THESE SERVE NO PURPOSE IN THE FINAL PROGRAM AND SHOULD BE DELETED IN THE FUTURE. -- #

@app.route("/chooseDataset.html", methods=["POST", "GET"])
def goto_chooseDataset():
    if request.method == 'POST':
        data_group = request.form.get('dataGroup')
        if data_group == 'countryYear':
            print("cy")
        elif data_group == "dyadYear":
            print("dy")
        else:
            print("no selection was made")
        return render_template("chooseDataset.html")
    else:
        return render_template("chooseDataset.html")


# run

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)