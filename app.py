from flask import Flask
from flask import jsonify
from markupsafe import escape
from flask_cors import CORS

DEBUG = True

app = Flask(__name__)

CORS(app)


@app.route("/<name>")
def hello_world(name):
    return f"Hello, {escape(name)}!"
    #return "<p>Hello, Worlasdd!</p>"


@app.route("/items")
def get_items():

    items = [
        {
            'id': 0,
            'title': 'test1',
            'description': 'desc 1',
            'completed': False,
        },
        {
            'id': 1,
            'title': 'test2',
            'description': 'desc 2',
            'completed': False,
        },
        {
            'id': 2,
            'title': 'test3',
            'description': 'desc 3',
            'completed': False,
        },
    ]

    return jsonify(items)
