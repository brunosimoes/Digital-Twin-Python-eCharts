'''Main wrapper for app creation'''
from flask import Flask
from flask_cors import CORS
from microservice.endpoints.views import endpoints_blueprint

app = Flask(__name__)
CORS(app)

# register the blueprints
app.register_blueprint(endpoints_blueprint)
