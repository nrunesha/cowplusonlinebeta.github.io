TO RUN PROGRAM on WINDOWS
1. open cmd
2. > cd <project folder (folder with cowplus.py)>
3. > python cowplus.py
4. if the program runs without error it will give you the address 127.0.0.1:5000 (or something like that). type this address in the URL bar

yuan - 6/19
*  the project is running with flask now. run the .py file to run the website locally
*  js, css, and slickgrid files have been moved to the /static folder. i also needed to change all of the css and js links in the html files

yuan - 6/20
*  i needed to add a random favicon bc flask was giving me errors

yuan - 6/22
*  variableChooser() sends return array to cowplus.py

yuan - 6/23
*  important note: communicating with the python file atm requires a post request, which reloads the page. 
*  i forgot to mention this during the meeting but i think it might be a good idea to redirect the user to a dedicated data display page afterwards.

yuan - 6/28
*  programs --> merge.py is a program that merges all .csv files in the same directory into one merged.csv file by ccode and year, with outer join using pandas.