from pymongo import MongoClient

class OverlayModel:
    def __init__(self, db):
        self.db = db

    def create_overlay(self, data):
        return self.db.overlays.insert_one(data)

    def get_overlays(self):
        return list(self.db.overlays.find())

    def update_overlay(self, overlay_id, data):
        return self.db.overlays.update_one({'_id': overlay_id}, {'$set': data})

    def delete_overlay(self, overlay_id):
        return self.db.overlays.delete_one({'_id': overlay_id})
