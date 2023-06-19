from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return redirect("/index.html")

@app.route("/<site>")
def goto(site):
    return render_template(f"{site}")

if __name__ == "__main__":
    app.run(debug=True)