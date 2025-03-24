from flask import Blueprint, render_template, request, redirect, url_for, flash

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        #add authentication login 

        if email == 'test@example.com' and password == 'password123':
            flash('Login successful!', category='success')
            return redirect(url_for('views.homepage'))
        else:
            flash('Invalid credentials, try again', category='error')

    return render_template('login.html')

@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')

        #add logic to save user to a database

        flash('Account created succesfully!', category='success')
        return redirect(url_for('auth.login'))
    
    return render_template('login.html')
        