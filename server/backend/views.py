from flask import Blueprint, render_template, redirect, url_for, flash
from .db_models import Product
from flask import jsonify, request

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

@views.route('/cart')
def cart():
    return render_template('cart.html')

@views.route('/checkout')
def checkout():
    return render_template('checkout.html')

@views.route('/products')
def get_products():
    brand = request.args.get('brand')  # Get ?brand=Adidas from the URL

    if brand:
        products = Product.query.filter(Product.brand.ilike(brand)).all()
    else:
        products = Product.query.all()

    product_list = []
    for product in products:
        product_list.append({
            "brand": product.brand,
            "name": product.name,
            "price": product.price,
            "image": product.image,
            "gender": product.gender,
            "size": product.size
        })

    return jsonify(product_list)
