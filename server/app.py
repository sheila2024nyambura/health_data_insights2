from flask import Flask,jsonify
from flask_cors import CORS
from models import db,Patient

app = Flask(__name__)
CORS(app)

#configuring database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db.init_app(app)

#creating the database tables
with app.app_context():
    db.create_all()

@app.route('/patients')
def get_patients():
    patients = Patient.query.all()
    return jsonify({'patients': [patient.to_dict() for patient in patients]})

if __name__ == '__main__':
    app.run(debug=True)