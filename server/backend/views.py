from flask import Blueprint, render_template, redirect, url_for, flash

views = Blueprint('views', __name__)

@views.route('/')
def homepage():
    return render_template("homepage.html")

@views.route('/nike')
def nike():
    return render_template("nike.html")

@views.route('/adidas')
def adidas():
    return render_template("adidas.html")

@views.route('/newbalance')
def newbalance():
    return render_template("newbalance.html")

@views.route('/puma')
def puma():
    return render_template("puma.html")

@views.route('/converse')
def converse():
    return render_template("converse.html")