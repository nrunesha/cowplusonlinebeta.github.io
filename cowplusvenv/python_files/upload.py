#imports

import sys
import pandas as pd
import numpy as np

import csv
import os
sys.path.append("../cowplusonlinebeta.github.io/")
# Get the current working directory
current_dir = os.path.dirname(os.path.abspath(__file__))
# Change to the previous directory
os.chdir(os.path.dirname(current_dir))

sys.path.append(os.getcwd())

# ignore the vscode yellow error
# import cowplus

# Change to the "datafiles_csv" folder
os.chdir('C:\\Users\\yuan\\Desktop\\cowplusNPM new\\cowplusvenv\\datafiles_csv')
monadic_reqcol = ["stateabb", "ccode", "year"]
dyadic_reqcol = ["stateabb1", "ccode1", "stateabb2", "ccode2", "year"]
def column_check(dataframe, reqcol):
    if not set(reqcol).issubset(set(dataframe.columns)):
       return False
    return True

def verify_files(files):
    monadic_files = []
    dyadic_files = []
    good_files = []
    bad_files = []
    for file in files:
        temp_file = pd.read_csv(file.filename)
        if(column_check(temp_file, monadic_reqcol)):
            monadic_files.append(file.filename)
            good_files.append(file.filename)
            continue
        elif(column_check(temp_file, dyadic_reqcol)):
            dyadic_files.append(file.filename)
            good_files.append(file.filename)
            continue
        else:
            bad_files.append(file.filename)
    return monadic_files, dyadic_files, good_files, bad_files
