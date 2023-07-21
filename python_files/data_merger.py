#imports

import sys
import pandas as pd
import numpy as np

import csv
import os

# Get the current working directory
current_dir = os.path.dirname(os.path.abspath(__file__))
# Change to the previous directory
os.chdir(os.path.dirname(current_dir))

sys.path.append(os.getcwd())

# ignore the vscode yellow error
# import cowplus

# Change to the "datafiles_csv" folder
os.chdir('datafiles_csv')

diplo_ex = pd.read_csv('COW_Direct_Contiguity_Directed_Dyadic.csv')
diplo_ex.name = 'diplo_ex'
alliance = pd.read_csv('COW_Alliance__2022_Non_Directed_Dyadic.csv')
alliance.name = 'alliance'
direct_contiguity = pd.read_csv('COW_Direct_Contiguity_Directed_Dyadic.csv')
direct_contiguity.name = 'direct_contiguity'
igo = pd.read_csv('COW_IGO_2022_Non_Directed_Dyadic.csv')
igo.name = 'igo'
major_powers = pd.read_csv('COW_Major_Powers_2022.csv')
major_powers.name = 'major_powers'
mids = pd.read_csv('COW_MIDs_2022_Non_Directed_Dyadic.csv')
mids.name = 'mids'
nmc = pd.read_csv('COW_National_Military_Capabilities.csv')
nmc.name = 'nmc'
wrp = pd.read_csv('COW_World_Religions.csv')
wrp.name = 'wrp'
trade = pd.read_csv('COW_Trade_Dyadic.csv')
trade.name = 'trade'

data_dict = {
    'diplo_ex': diplo_ex,
    'alliance': alliance,
    'direct_contiguity': direct_contiguity,
    'igo': igo,
    'major_powers': major_powers,
    'mids': mids,
    'nmc': nmc,
    'wrp': wrp,
    'trade': trade
}

dyadic_data = ['diplo_ex', 'alliance', 'igo', 'mids', 'trade', 'direct_contiguity']
for name in dyadic_data:
    data_file = data_dict[name]
    data_file["eventID"] = data_file["stateabb1"].astype(str) + "_" + data_file["ccode1"].astype(str) + "_" + data_file["stateabb2"].astype(str) + "_" + data_file["ccode2"].astype(str) + "_" + data_file["year"].astype(str)
monadic_data = ['nmc', 'wrp', 'major_powers']
for name in monadic_data:
    data_file = data_dict[name]
    data_file["eventID"] = data_file["stateabb"].astype(str) + "_" + data_file["ccode"].astype(str) + "_" + data_file["year"].astype(str)
# return from datasetChooserFirstStep()
# i changed it to just these two cuz testing was taking too long
# files_chosen = [diplo_ex, alliance, mids, igo, trade, direct_contiguity]

# return from variablesChooser()
# variables_chosen = ['defense','neutrality','nonaggression','entente','dr_at_1','dr_at_2','de','joint_igo_membership','joint_igo_membership_count', 'conttype', 'mid_count','mid_onset_m','mid_ongoing_m','onset_other','ongoing_other','main_disno','dyindex,strtday_m','strtmnth_m','strtyr_m','endday_m','endmnth_m','endyear_m','outcome_m','settlmnt_m','fatlev_m','highact_m', 'flow1','flow2','smoothflow1']
def check(col, data):
    return col in data

def find_largest(files):
    length = len(files[0])
    data_file = files[0]
    for i in range(len(files)):
        if (len(files[i]) > length):
            length = len(files[i])
            data_file = files[i]
    return data_file

def check_duplicates(data, datatype):
    cols_monadic = ["stateabb", "ccode", "year"]
    cols_dyadic = ["stateabb1", "ccode1", "stateabb2", "ccode2", "year"]
    if(datatype == "monadic"):
        return len(data) - len(data.drop_duplicates(subset = cols_monadic))
    if(datatype == "dyadic"):
        return len(data) - len(data.drop_duplicates(subset = cols_dyadic))

def createNewDataList(files_chosen_raw, variables_chosen):
    files_chosen = []
    for name in files_chosen_raw:
        files_chosen.append(data_dict[name])
    print("data_merger> dc:",str(files_chosen))
    print("data_merger> vc:",str(variables_chosen))
    largest_file = find_largest(files_chosen)
    if files_chosen[0].name in dyadic_data:
        datatype = "dyadic"
    elif files_chosen[0].name in monadic_data:
        datatype = "monadic"
    if(datatype == "monadic"):
        cols_monadic = ["stateabb", "ccode", "year"]
        df = largest_file[cols_monadic]
        for data_file in files_chosen: 
            for var in variables_chosen: 
                if check(var, data_file) == True:
                    cols_monadic.append(var)
                    data_list_temp = data_file[cols_monadic]
                    df = df.merge(data_list_temp, how = "outer", on = "eventID")
        df.fillna('.', inplace=True)
        df = df.sort_values(["ccode", "year"])
    if(datatype == "dyadic"):
        cols_dyadic = ["stateabb1", "ccode1", "stateabb2", "ccode2", "year"]
        df = largest_file[cols_dyadic]
        df.drop_duplicates(subset = cols_dyadic)
        for data_file in files_chosen: #6
            for var in variables_chosen: #32
                if check(var, data_file) == True:
                    cols_dyadic.append(var)
                    data_list_temp = data_file[cols_dyadic]
                    df = df.merge(data_list_temp, how = "outer", on = "eventID")
                df = df.drop_duplicates(subset = cols_dyadic)
        df.fillna('.', inplace=True)
        df = df.sort_values(["ccode1", "ccode2", "year"])
    df.insert(0, 'id', range(1, 1 + len(df)))
    return df.to_json(orient="records")

#new_df = createNewDataList(files_chosen, variables_chosen)
#print(new_df)