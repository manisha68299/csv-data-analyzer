CSV Data Analyzer

A simple web app to upload and explore CSV files in the browser.
Built using Flask and Pandas, it shows a quick summary of the dataset and a preview of the data without needing any setup.

Live Demo

https://csv-data-analyzer-rnas.onrender.com/

What it does
Upload a CSV file from your system
Shows number of rows and columns
Counts missing values in the dataset
Displays a preview of the data (first few rows)
Clean UI with a smooth animated background
Tech used
Python (Flask)
Pandas
HTML, CSS
JavaScript
Project structure
csv-data-analyzer/
│
├── app.py
├── requirements.txt
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── uploads/
How to run locally
Clone the repo
git clone https://github.com/manisha68299/csv-data-analyzer.git
cd csv-data-analyzer
Install dependencies
pip install -r requirements.txt
Run the app
python app.py
Open in browser
http://127.0.0.1:5000
Notes
Some CSV files with different encodings are handled automatically
Uploaded files are stored temporarily in the uploads folder
Future improvements
Add charts for better data understanding
Filter data by column
Download cleaned CSV
Improve error handling
Author

Manisha Banerjee
https://github.com/manisha68299