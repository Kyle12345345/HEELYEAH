from flask import Flask
from .extensions import db


def create_website():

    app = Flask(__name__)
    app.config["SECRET_KEY"] = 'qweqweqwedfsdfsdvh'
    app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///pangalan.db'
    
    from .auth import auth
    from .views import views

    app.register_blueprint(auth)
    app.register_blueprint(views)

    # from db_models import 'you tables'

    db.init_app(app)
    
    create_database(app)

    return app


def create_database(app):
    
    with app.app_context():
        db.create_all()
