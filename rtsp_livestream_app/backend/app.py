from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from routes import overlay_routes

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication
app.config.from_pyfile('config.py')

# MongoDB connection
client = MongoClient(app.config['MONGO_URI'])
db = client['overlay_db']

# Register overlay CRUD routes
app.register_blueprint(overlay_routes, url_prefix='/api/overlays')

if __name__ == '__main__':
    app.run(debug=True)
