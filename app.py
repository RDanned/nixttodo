from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS

DEBUG = True

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

CORS(app, resources={r"/*": {"origins": "*"}})

items_data = [
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
    {
        'id': 3,
        'title': 'test4',
        'description': 'desc 4',
        'completed': False,
    },
]


@app.route("/items/<int:item_id>", methods=['PATCH'])
def item_update(item_id):
    data = request.get_json()
    response = {'success': False}
    for i, item in enumerate(items_data):
        if item['id'] == item_id:
            items_data[i] = data
            response['success'] = True

    return jsonify(response)


@app.route("/items", methods=['GET', 'POST', 'HEAD'])
def items():

    if request.method == 'POST':
        data = request.get_json()
        items_data.append(data)
        return jsonify(data)
    elif request.method == 'GET':
        response = jsonify(items_data)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response