from flask import Blueprint, request, jsonify
from bson import ObjectId
from models import OverlayModel
from pymongo import MongoClient

overlay_routes = Blueprint('overlays', __name__)

db_client = MongoClient('mongodb://localhost:27017/')
db = db_client['overlay_db']
overlay_model = OverlayModel(db)

# Create overlay
@overlay_routes.route('/', methods=['POST'])
def create_overlay():
    data = request.json
    result = overlay_model.create_overlay(data)
    return jsonify({'id': str(result.inserted_id)})

# Get all overlays
@overlay_routes.route('/', methods=['GET'])
def get_overlays():
    overlays = overlay_model.get_overlays()
    return jsonify([{'id': str(o['_id']), 'content': o['content'], 'position': o['position'], 'size': o['size']} for o in overlays])

# Update overlay
@overlay_routes.route('/<overlay_id>', methods=['PUT'])
def update_overlay(overlay_id):
    data = request.json
    result = overlay_model.update_overlay(ObjectId(overlay_id), data)
    return jsonify({'modified_count': result.modified_count})

# Delete overlay
@overlay_routes.route('/<overlay_id>', methods=['DELETE'])
def delete_overlay(overlay_id):
    result = overlay_model.delete_overlay(ObjectId(overlay_id))
    return jsonify({'deleted_count': result.deleted_count})
