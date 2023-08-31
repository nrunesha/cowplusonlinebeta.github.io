#imports

import sys
import pandas as pd
import numpy as np

import csv
import os
sys.path.append("../cowplusonlinebeta.github.io/")
import cowplus

# Get the current working directory
current_dir = os.path.dirname(os.path.abspath(__file__))
# Change to the previous directory
os.chdir(os.path.dirname(current_dir))

sys.path.append(os.getcwd())

# ignore the vscode yellow error
# import cowplus

# Change to the "datafiles_csv" folder
directory = 'datafiles_csv/preloaded_datasets'

def createPreloadedVarJSON():
    dictionary = {}
    i = 0
    for filename in os.listdir(directory):
        f = os.path.join(directory, filename)
        # checking if it is a file
        if os.path.isfile(f):
            temp_file = pd.read_csv(f)
            temp_vars_list = temp_file.columns.tolist().copy()
            for j in range(len(temp_vars_list)):
                temp_vars_list[j] = temp_vars_list[j]+filename[:-4]
            dictionary[i] = {'vars' : temp_vars_list}
            i = i+1


    df = pd.DataFrame.from_dict(dictionary, orient='index',columns=['vars'])
    return df.to_json(orient="values")