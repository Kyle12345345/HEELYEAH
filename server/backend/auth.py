from flask import Blueprint, render_template, request, redirect, url_for, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required, LoginManager
from .db_models import User
from.extensions import db

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        existing_user = User.query.filter_by(email = email).first()

        if existing_user:
            if existing_user.password == password:
                return redirect(url_for('views.homepage'))
            else:
                flash('Password incorrect', category='error')

        else:
            flash('User not found', category='error')
            
    return render_template('login.html')

@auth.route('/signup', methods=['GET','POST'])
def signup():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')

        existing_user = User.query.filter_by(email = email).first()

        if not existing_user:
            hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
            new_user = User(username=name, email=email, password=hashed_password)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('views.homepage'))
        else:
            flash('User already exists', category='success')

        flash('Account created succesfully!', category='success')
        return redirect(url_for('auth.login'))
        
    return render_template('login.html')

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))
        