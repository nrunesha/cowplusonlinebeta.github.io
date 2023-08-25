from flask import Flask, render_template, request, redirect, url_for, request, jsonify
import pandas as pd
import numpy as np
import csv
import sys
import os
from datetime import date

current_dir = os.path.dirname(os.path.abspath(__file__))
python_files_dir = os.path.join(current_dir, 'python_files')
sys.path.append(python_files_dir)

import data_merger
import upload

app = Flask(__name__, template_folder='templates')

vc = []
vc2 = []
dc = []
vcss = []
dcss = []
all_d_files = []
all_m_files = []
# -- routes -- #

@app.route("/")
def home():
    return redirect("/index.html")

@app.route("/debug")
def debug():
    global vc
    global dc
    print("cowplus> vc:",str(vc))
    print("cowplus> dc:",str(dc))
    return redirect("/index.html")

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

@app.route("/upload.html")
def goto_upload():
    return render_template("upload.html")



@app.route('/verifyFunction/', methods = ['POST', 'GET'])  
def verifyFunction():
    global files
    global m_files, d_files, g_files, b_files
    global all_m_files, all_d_files
    verified = False
    # Get the list of files from webpage
    files = request.files.getlist("file")
    print(files)
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
    for file in files:
        file.save(file.filename)
    return redirect('/upload.html')

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
'''
@app.route('/<path:route>', methods=['POST'])
def process_data(route):
    data = request.get_json()
    requested_variable = data['array']
    print(f"Data from route '{route}': {requested_variable}")
    # Perform further processing or store the data in the requested variable
    return 'OK'

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


    
@app.route("/test.html", methods=["POST", "GET"])
def goto_test():
    if request.method == "POST":
        print(str(request.form["testname"]))
        return render_template("test.html")
    else:
        return render_template("test.html")
'''

# run

if __name__ == "__main__":
    app.run(debug=True)