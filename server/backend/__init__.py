from flask import Flask
from .extensions import db, login_manager



def create_website():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = 'qweqweqwedfsdfsdvh'
    app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///pangalan.db'
        
    from .auth import auth
    app.register_blueprint(auth, url_prefix='/')

    from .views import views
    app.register_blueprint(views, url_prefix='/')

    db.init_app(app)
    
    create_database(app)

    return app


def create_database(app):
    
    with app.app_context():
        db.create_all()

    return app
