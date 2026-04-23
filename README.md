# CSV Data Analyzer

A simple web app to upload and explore CSV files in the browser.
Built using Flask and Pandas, it shows a quick summary of the dataset and a preview of the data.

---

## 🔗 Live Demo

https://csv-data-analyzer-rnas.onrender.com/

---

## 📌 Features

* Upload a CSV file
* View number of rows and columns
* Check missing values
* Preview dataset (first few rows)
* Clean UI with animated background

---

## 🛠 Tech Stack

* Python (Flask)
* Pandas
* HTML, CSS
* JavaScript

---

## 📂 Project Structure

```
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
```

---

## ⚙️ Run Locally

1. Clone the repository

```
git clone https://github.com/manisha68299/csv-data-analyzer.git
cd csv-data-analyzer
```

2. Install dependencies

```
pip install -r requirements.txt
```

3. Run the app

```
python app.py
```

4. Open in browser (local)

```
http://127.0.0.1:5000
```

---

## 📝 Notes

* Handles CSV files with different encodings
* Uploaded files are stored temporarily

---

## 🚀 Future Improvements

* Add charts and graphs
* Column-based filtering
* Download cleaned CSV
* Better error handling

---

## 👩‍💻 Author

Manisha Banerjee
https://github.com/manisha68299
