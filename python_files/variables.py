#imports

import sys
import pandas as pd
import numpy as np

import csv
import os
# sys.path.append("../cowplusonlinebeta.github.io")
# import cowplus

# Get the current working directory
current_dir = os.path.dirname(os.path.abspath(__file__))
# Change to the previous directory
os.chdir(os.path.dirname(current_dir))

sys.path.append(os.getcwd())

# ignore the vscode yellow error
# import cowplus

# Change to the "datafiles_csv" folder
directory_preloaded = 'C:\cowplus_online\cowplusonlinebeta.github.io\datafiles_csv\descriptions'
username = "test_profile"
directory_uploaded = os.path.join("C:\cowplus_online\cowplusonlinebeta.github.io\datafiles_csv", username)

monadic_reqcol = ["stateabb", "ccode", "year"]
dyadic_reqcol = ["stateabb1", "ccode1", "stateabb2", "ccode2", "year"]
def column_check(dataframe, reqcol):
    if not set(reqcol).issubset(set(dataframe.columns)):
       return False
    return True

def remove_items(test_list, item):
 
    # using list comprehension to perform the task
    res = [i for i in test_list if i != item]
    return res


def createVarIDsDict():
    all_dictionary = {}
    secondstep_dictionary = {}
    i = 0
    for filename in os.listdir(directory_preloaded):
        f = os.path.join(directory_preloaded, filename)
        # checking if it is a file
        if os.path.isfile(f):
            temp_file = pd.read_csv(f, sep=",")
            temp_list = temp_file.columns.tolist().copy()
            temp_list = remove_items(temp_list, "stateabb")
            temp_list = remove_items(temp_list, "stateabb1")
            temp_list = remove_items(temp_list, "stateabb2")
            temp_list = remove_items(temp_list, "ccode1")
            temp_list = remove_items(temp_list, "ccode2")
            temp_list = remove_items(temp_list, "ccode")
            temp_list = remove_items(temp_list, "year")
            for j in range(len(temp_list)):
                temp_list[j] = temp_list[j]+filename[:-4]
            all_dictionary[i] = {'vars' : temp_list}
            if(column_check(temp_file, monadic_reqcol)):
                secondstep_dictionary[i] = {'vars' : temp_list}
            i = i+1
    for filename in os.listdir(directory_uploaded):
        f = os.path.join(directory_uploaded, filename)
        # checking if it is a file
        if os.path.isfile(f):
            temp_file = pd.read_csv(f, sep=",")
            temp_list = temp_file.columns.tolist().copy()
            temp_list = remove_items(temp_list, "stateabb")
            temp_list = remove_items(temp_list, "stateabb1")
            temp_list = remove_items(temp_list, "stateabb2")
            temp_list = remove_items(temp_list, "ccode1")
            temp_list = remove_items(temp_list, "ccode2")
            temp_list = remove_items(temp_list, "ccode")
            temp_list = remove_items(temp_list, "year")
            for j in range(len(temp_list)):
                temp_list[j] = temp_list[j]+filename[:-4]
            all_dictionary[i] = {'vars' : temp_list}
            if(column_check(temp_file, monadic_reqcol)):
                secondstep_dictionary[i] = {'vars' : temp_list}
            i = i+1
    return all_dictionary, secondstep_dictionary
    
def createVarDict():
    all_dictionary = {}
    secondstep_dictionary = {}
    i = 0
    var_names = []
    var_types = []
    var_pvus = []
    for filename in os.listdir(directory_preloaded):
        f = os.path.join(directory_preloaded, filename)
        # checking if it is a file
        if os.path.isfile(f):
            temp_file = pd.read_csv(f, sep=",")
            temp_list = temp_file.columns.tolist().copy()
            temp_list = remove_items(temp_list, "stateabb")
            temp_list = remove_items(temp_list, "stateabb1")
            temp_list = remove_items(temp_list, "stateabb2")
            temp_list = remove_items(temp_list, "ccode1")
            temp_list = remove_items(temp_list, "ccode2")
            temp_list = remove_items(temp_list, "ccode")
            temp_list = remove_items(temp_list, "year")
            for j in range(len(temp_list)):
                var_names.append(temp_list[j])
                var_pvus.append("Preloaded Datasets")
            if(column_check(temp_file, monadic_reqcol)):
                for j in range(len(temp_list)):
                    var_types.append("Country Year")
            elif(column_check(temp_file, dyadic_reqcol)):
                for j in range(len(temp_list)):
                    var_types.append("Dyad Year")
            all_dictionary[i] = {'vars_name' : var_names, 'vars_type' : var_types, 'vars_pvu' : var_pvus}
            if(column_check(temp_file, monadic_reqcol)):
                secondstep_dictionary[i] = {'vars_name' : var_names, 'vars_type' : var_types, 'vars_pvu' : var_pvus}
            var_names = []
            var_types = []
            var_pvus = []
            i = i+1
    for filename in os.listdir(directory_uploaded):
        f = os.path.join(directory_uploaded, filename)
        # checking if it is a file
        if os.path.isfile(f):
            temp_file = pd.read_csv(f, sep=",")
            temp_list = temp_file.columns.tolist().copy()
            temp_list = remove_items(temp_list, "stateabb")
            temp_list = remove_items(temp_list, "stateabb1")
            temp_list = remove_items(temp_list, "stateabb2")
            temp_list = remove_items(temp_list, "ccode1")
            temp_list = remove_items(temp_list, "ccode2")
            temp_list = remove_items(temp_list, "ccode")
            temp_list = remove_items(temp_list, "year")
            for j in range(len(temp_list)):
                var_names.append(temp_list[j])
                var_pvus.append("Uploaded Datasets")
            if(column_check(temp_file, monadic_reqcol)):
                for j in range(len(temp_list)):
                    var_types.append("Country Year")
            elif(column_check(temp_file, dyadic_reqcol)):
                for j in range(len(temp_list)):
                    var_types.append("Dyad Year")
            all_dictionary[i] = {'vars_name' : var_names, 'vars_type' : var_types, 'vars_pvu' : var_pvus}
            if(column_check(temp_file, monadic_reqcol)):
                secondstep_dictionary[i] = {'vars_name' : var_names, 'vars_type' : var_types, 'vars_pvu' : var_pvus}
            var_names = []
            var_types = []
            var_pvus = []
            i = i+1
    return all_dictionary, secondstep_dictionary

def createVarDescripDict():
    all_dictionary = {}
    secondstep_dictionary = {}
    i = 0
    for filename in os.listdir(directory_preloaded):
        f = os.path.join(directory_preloaded, filename)
        # checking if it is a file
        if os.path.isfile(f):
            temp_file = pd.read_csv(f, sep=",")
            temp_list = temp_file.iloc[0].tolist().copy()
            temp_list = remove_items(temp_list, "stateabb")
            temp_list = remove_items(temp_list, "stateabb1")
            temp_list = remove_items(temp_list, "stateabb2")
            temp_list = remove_items(temp_list, "ccode1")
            temp_list = remove_items(temp_list, "ccode2")
            temp_list = remove_items(temp_list, "ccode")
            temp_list = remove_items(temp_list, "year")
            temp_list = [x for x in temp_list if str(x) != 'nan']
            for j in range(len(temp_list)):
                temp_list[j] = temp_list[j]
            all_dictionary[i] = {'vars' : temp_list}
            if(column_check(temp_file, monadic_reqcol)):
                secondstep_dictionary[i] = {'vars' : temp_list}
            i = i+1
    for filename in os.listdir(directory_uploaded):
        f = os.path.join(directory_uploaded, filename)
        # checking if it is a file
        if os.path.isfile(f):
            temp_file = pd.read_csv(f, sep=",")
            temp_list = temp_file.iloc[0].tolist().copy()
            temp_list = remove_items(temp_list, "nan")
            temp_list = remove_items(temp_list, "stateabb1")
            temp_list = remove_items(temp_list, "stateabb2")
            temp_list = remove_items(temp_list, "ccode1")
            temp_list = remove_items(temp_list, "ccode2")
            temp_list = remove_items(temp_list, "ccode")
            temp_list = remove_items(temp_list, "year")
            all_dictionary[i] = {'vars' : temp_list}
            if(column_check(temp_file, monadic_reqcol)):
                secondstep_dictionary[i] = {'vars' : temp_list}
            i = i+1
    return all_dictionary, secondstep_dictionary
    df = pd.DataFrame.from_dict(dictionary, orient='index',columns=['vars'])
    return df.to_json(orient="values")

def createVarDatasetDict():
    all_dictionary = {}
    secondstep_dictionary = {}
    i = 0
    for filename in os.listdir(directory_preloaded):
        f = os.path.join(directory_preloaded, filename)
        # checking if it is a file
        if os.path.isfile(f):
            temp_file = pd.read_csv(f, sep=",")
            temp_list = temp_file.columns.tolist().copy()
            temp_list = remove_items(temp_list, "stateabb")
            temp_list = remove_items(temp_list, "stateabb1")
            temp_list = remove_items(temp_list, "stateabb2")
            temp_list = remove_items(temp_list, "ccode1")
            temp_list = remove_items(temp_list, "ccode2")
            temp_list = remove_items(temp_list, "ccode")
            temp_list = remove_items(temp_list, "year")
            for j in range(len(temp_list)):
                temp_list[j] = filename[:-4]
            all_dictionary[i] = {'vars' : temp_list}
            if(column_check(temp_file, monadic_reqcol)):
                secondstep_dictionary[i] = {'vars' : temp_list}
            i = i+1
    for filename in os.listdir(directory_uploaded):
        f = os.path.join(directory_uploaded, filename)
        # checking if it is a file
        if os.path.isfile(f):
            temp_file = pd.read_csv(f, sep=",")
            temp_list = temp_file.columns.tolist().copy()
            temp_list = remove_items(temp_list, "stateabb")
            temp_list = remove_items(temp_list, "stateabb1")
            temp_list = remove_items(temp_list, "stateabb2")
            temp_list = remove_items(temp_list, "ccode1")
            temp_list = remove_items(temp_list, "ccode2")
            temp_list = remove_items(temp_list, "ccode")
            temp_list = remove_items(temp_list, "year")
            for j in range(len(temp_list)):
                temp_list[j] = filename[:-4]
            all_dictionary[i] = {'vars' : temp_list}
            if(column_check(temp_file, monadic_reqcol)):
                secondstep_dictionary[i] = {'vars' : temp_list}
            i = i+1
    return all_dictionary, secondstep_dictionary
    df = pd.DataFrame.from_dict(dictionary, orient='index',columns=['vars'])
    return df.to_json(orient="values")

def createVarIDs_JS():
    a, m = createVarIDsDict()
    adf = pd.DataFrame.from_dict(a, orient='index',columns=['vars'])
    mdf = pd.DataFrame.from_dict(m, orient = 'index', columns = ['vars'])
    return adf.to_json(orient="values"), mdf.to_json(orient="values")

def createVar_JS():
    a, m = createVarDict()
    adf = pd.DataFrame.from_dict(a)
    mdf = pd.DataFrame.from_dict(m)
    return adf.to_json(orient="values"), mdf.to_json(orient="values")

def createVarDescrip_JS():
    a, m = createVarDescripDict()
    adf = pd.DataFrame.from_dict(a, orient='index',columns=['vars'])
    mdf = pd.DataFrame.from_dict(m, orient = 'index', columns = ['vars'])
    return adf.to_json(orient="values"), mdf.to_json(orient="values")

def createVarDataset_JS():
    a, m = createVarDatasetDict()
    adf = pd.DataFrame.from_dict(a, orient='index',columns=['vars'])
    mdf = pd.DataFrame.from_dict(m, orient = 'index', columns = ['vars'])
    return adf.to_json(orient="values"), mdf.to_json(orient="values")