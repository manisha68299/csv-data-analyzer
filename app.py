from flask import Flask, render_template, request
import pandas as pd
import os

app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

@app.route("/", methods=["GET", "POST"])
def index():
    data = None
    summary = {}

    if request.method == "POST":
        file = request.files["file"]
        if file:
            filepath = os.path.join(UPLOAD_FOLDER, file.filename)
            file.save(filepath)

            try:
                df = pd.read_csv(filepath)
            except:
                df = pd.read_csv(filepath, encoding="latin1")

            summary = {
                "rows": df.shape[0],
                "columns": df.shape[1],
                "missing": df.isnull().sum().sum()
            }

            data = df.head().to_html(classes="table")

    return render_template("index.html", data=data, summary=summary)

if __name__ == "__main__":
    app.run(debug=True)
