from flask import Blueprint, render_template, redirect, url_for, flash

views = Blueprint('views', __name__)

@views.route('/')
def homepage():
    return render_template("homepage.html")
