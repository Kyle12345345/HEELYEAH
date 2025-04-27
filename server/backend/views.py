from flask import Blueprint, render_template, redirect, url_for, flash
from .db_models import Product

views = Blueprint('views', __name__)

@views.route('/')
def homepage():
    return render_template("homepage.html")

@views.route('/nike')
def nike():
    nike_products = Product.query.filter_by(brand="Nike").all()
    return render_template("nike.html", products=nike_products)

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

@views.route('/cart')
def cart():
    return render_template('cart.html')

@views.route('/checkout')
def checkout():
    return render_template('checkout.html')