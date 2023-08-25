from flask import Flask, flash, render_template, request, redirect, url_for, request, jsonify, session
from werkzeug.utils import secure_filename

from datetime import timedelta

from flask_sqlalchemy import SQLAlchemy
import pandas as pd
import numpy as np
import csv
import sys
import os
from datetime import date

UPLOAD_FOLDER = 'C:\\Users\\yuan\\Desktop\\cowplusonlinebeta.github.io-yz\\datafiles_csv\\userupload'
ALLOWED_EXTENSIONS = {'txt', 'csv'}

# local path
sys.path.append('C:\\Users\\yuan\\Desktop\\cowplusonlinebeta.github.io-yz\\python_files')

import data_merger

app = Flask(__name__, template_folder='templates')
app.secret_key = "yabujin"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.permanent_session_lifetime = timedelta(minutes=60)

def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

db = SQLAlchemy(app)

class users(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True)
    name = db.Column("name", db.String(100))
    email = db.Column("email", db.String(100))
    password = db.Column("password", db.String(100))

    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password
vc = []
vc2 = []
dc = []
vcss = []
dcss = []
# -- routes -- #

@app.route("/")
def home():
    return redirect("/index.html")

@app.route("/debug")
def debug():
    return render_template("/view.html", values=users.query.all())

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if "user" in session:
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

@app.route("/view")
def view():
    return render_template("view.html", values=users.query.all())

@app.route("/resetdatabase")
def resetdatabase():
    found_user = users.query.all()
    flash(found_user)
    for user in found_user:
        db.session.delete(user)
        db.session.commit()
    return render_template("view.html")

@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        session.permanent = True
        user = request.form["nm"]
        pwd = request.form["pwd"]

        found_user = users.query.filter_by(name=user).first()
        found_email = users.query.filter_by(email=user).first()

        if found_user:
            if pwd == found_user.password:
                session["user"] = user
                session["email"] = found_user.email
            else:
                flash("Password incorrect.")
                return redirect(url_for("login"))
        elif found_email:
            if pwd == found_email.password:
                session["user"] = found_email.name
                session["email"] = user
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
        session.permanent = True
        user = request.form["nm"]
        em = request.form["em"]
        pwd = request.form['pwd']

        found_user = users.query.filter_by(name=user).first()
        found_email = users.query.filter_by(email=em).first()

        if found_user or found_email:
            flash("User already exists. Did you mean to sign in?")
            return render_template("signup.html")

        else:
            if user and em and pwd:
                if ("@" in em) and ("." in em):
                    flash("User created")
                    usr = users(user, em, pwd)
                    db.session.add(usr)
                    db.session.commit()
                    session["user"] = user
                    session["email"] = em
                else:
                    flash("Enter a valid email")
                    return render_template("signup.html")
            else:
                flash("Please fill out all fields")
                return render_template("signup.html")

        return redirect(url_for("user"))
    else:
        if "user" in session:
            flash("Already logged in!")
            return redirect(url_for("user"))
        return render_template("signup.html")

@app.route("/user", methods=["POST", "GET"])
def user():
    email = None
    if "user" in session:
        user = session["user"]
        found_user = users.query.filter_by(name=user).first()
        if request.method == "POST":
            email = request.form["email"]
            session["email"] = email
            found_user.email = email
            db.session.commit()
            flash("Email saved!")
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
    session.pop("user", None)
    session.pop("email", None)
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
    csv = dataframe2.to_csv(index = False)
    response = {
        "message": "data processing successful",
        "status": 200,
        "csv": csv
    }
    return response

# generic for all req. to save code

# -- TEST FUNCTIONS; THESE SERVE NO PURPOSE IN THE FINAL PROGRAM AND SHOULD BE DELETED IN THE FUTURE. -- #

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


@app.route("/child")
def test_child():
    return render_template("child.html")


# run

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)