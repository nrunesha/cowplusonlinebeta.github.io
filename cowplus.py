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

app = Flask(__name__, template_folder='templates')

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