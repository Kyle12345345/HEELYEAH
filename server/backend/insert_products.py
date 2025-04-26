from backend import create_website
from backend.db_models import db, Product

app = create_website()

with app.app_context():
    nike_products = [
        {
            "brand": "Nike",
            "name": "Nike Dunk Low Retro Men's Basketball Shoes – White",
            "price": 5495.00,
            "image": "nike_images/n1.png",
            "gender": "Men",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Cortez Women's Sneakers – Black",
            "price": 4995.00,
            "image": "nike_images/n2.png",
            "gender": "Women",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Air Max Plus Sneaker Shoes – Yellow/Black",
            "price": 6295.00,
            "image": "nike_images/n16.png",
            "gender": "Women",
            "size": "6,7,8,9,10,11"
        },
    ]

    for product_data in nike_products:
        shoe = Product(
            brand=product_data["brand"],
            name=product_data["name"],
            price=product_data["price"],
            image=product_data["image"],
            gender=product_data["gender"],
            size=product_data["size"]
        )
        db.session.add(shoe)

    db.session.commit()
    print("✅ All Nike products inserted successfully!")
