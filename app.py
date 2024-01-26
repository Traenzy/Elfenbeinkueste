from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def Start():
    return render_template("index.html")

@app.route('/Kulturdimensionen')
def Kulturdimensionen():
    return render_template("kulturdimension.html")

@app.route('/Quiz')
def Quiz():
    return render_template("quiz.html")

if __name__ == '__main__':
    app.run(debug=True)