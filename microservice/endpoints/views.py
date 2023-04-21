from flask import render_template, Blueprint, Response, send_from_directory
import json

endpoints_blueprint = Blueprint('endpoints',__name__)

@endpoints_blueprint.route('/chart')
def chart():
  value = {
    "xAxis": {
      "type": "category",
      "data": ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    "yAxis": {
      "type": "value"
    },
    "series": [
      {
        "data": [150, 230, 224, 218, 135, 147, 260],
        "type": "line"
      }
    ]
  }
  return Response(json.dumps(value), mimetype='text/json')

@endpoints_blueprint.route('/version')
def version():
  value = {
      "version": "1.0.2",
  }
  return Response(json.dumps(value), mimetype='text/json')

@endpoints_blueprint.route('/')
def index():
    return send_from_directory('./public', 'index.html')

@endpoints_blueprint.route('/<path:filename>')
def serve_file(filename):
    return send_from_directory('./public', filename)
