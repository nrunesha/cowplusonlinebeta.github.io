from flask import Flask, render_template, request, redirect, url_for, request, jsonify

app = Flask(__name__, template_folder='templates')

# -- routes -- #

vc = []
vc2 = []
myData = []

@app.route("/")
def home():
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
def processvc1():
    data = request.get_json()
    vc1 = data['array']
    print("variableChooser() returned " + str(vc))
    return 'okay'

# variableChooserSecondStep()
@app.route('/variableChooserSecondStep', methods=['POST'])
def processvc2():
    data = request.get_json()
    vc2 = data['array']
    print("variableChooserSecondStep() returned " + str(vc2))
    return 'okay'

# addID()
'''
@app.route('/addID', methods=['POST'])
def addID():
    data = request.get_json()
    myData = data['array']
    print("addID: " + str(myData))
    return 'okay'
'''
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

# run

if __name__ == "__main__":
    app.run(debug=True)