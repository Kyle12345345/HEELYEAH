from flask import Blueprint, render_template, request, redirect, url_for, flash, session,jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from .db_models import User
from .extensions import db

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        if request.is_json:
            data = request.get_json()
            email = data.get('email')
            password = data.get('password')
        else:
            email = request.form.get('email')
            password = request.form.get('password')

        existing_user = User.query.filter_by(email=email).first()

        if existing_user:
            if check_password_hash(existing_user.password, password):
                session['logged_in'] = True 
                session['user_name'] = existing_user.username
                if request.is_json:
                    return jsonify(success=True)
                return redirect(url_for('auth.profile'))
            else:
                flash('Password incorrect', category='error')
                if request.is_json:
                    return jsonify(success=False, message="Invalid password."), 401
        else:
            flash('User not found', category='error')
            if request.is_json:
                return jsonify(success=False, message="User not found."), 404

    return render_template('login.html')


@auth.route('/check-login', methods=['GET'])
def check_login():
    if 'logged_in' in session and session['logged_in']:
        return jsonify(loggedIn=True)
    return jsonify(loggedIn=False)


@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')

        existing_user = User.query.filter_by(email=email).first()

        if not existing_user:
            hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
            new_user = User(username=name, email=email, password=hashed_password)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('auth.login')) 
        else:
            flash('User already exists', category='error')

    return render_template('login.html')

@auth.route('/logout')
def logout():
    session.pop('logged_in', None)  
    session.pop('user_name', None)
    return redirect(url_for('auth.login'))

@auth.route('/profile')
def profile():
    if 'logged_in' not in session:
        return redirect(url_for('auth.login'))
    return render_template('profile.html', username=session['user_name'])

@auth.route('/place_order', methods=['GET', 'POST'])
def place_order():
    
    return redirect(url_for('views.homepage'))
