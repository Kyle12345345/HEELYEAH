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
            "name": "Nike Zoom Vomero 5 Men’s Sneakers - Wolf Gray",
            "price": 8895.00,
            "image": "nike_images/n3.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Air Jordan 1 Low Men’s – Bred Toe",
            "price": 6195.00,
            "image": "nike_images/n4.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Air Force 1 '07 Women’s – White",
            "price": 5495.00,
            "image": "nike_images/n5.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Book 1 EP Men’s Basketball Shoes – Barely Grape",
            "price": 7895.00,
            "image": "nike_images/n6.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Air Jordan 4 Retro Men’s Basketball Shoes – Black",
            "price": 11395.00,
            "image": "nike_images/n7.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Air Jordan 11 Retro Men’s Basketball Shoes – White",
            "price": 11895.00,
            "image": "nike_images/n8.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Air Jordan 11 Retro Low Men’s Basketball Shoes – White/Navy",
            "price": 10295.00,
            "image": "nike_images/n9.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Zoom Vomero 5 Women’s Sneaker Shoes – Vast Gray",
            "price": 9395.00,
            "image": "nike_images/n10.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Dunk Low Sail Women’s – Brown",
            "price": 5495.00,
            "image": "nike_images/n11.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Air Jordan 11 Retro Women’s Basketball Shoes – Black",
            "price": 12295.00,
            "image": "nike_images/n12.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike P-6000 Men’s Sneaker Shoes – Khaki",
            "price": 4995.00,
            "image": "nike_images/n13.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Air Max Plus Utility Men’s Sneaker Shoes – Khaki",
            "price": 10295.00,
            "image": "nike_images/n14.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Air Max Plus Men’s Sneaker Shoes – Khaki",
            "price": 9895.00,
            "image": "nike_images/n15.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Air Max Plus Sneaker Shoes – Yellow/Black",
            "price": 6295.00,
            "image": "nike_images/n16.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Dunk Low University Blue Women’s – Blue",
            "price": 7495.00,
            "image": "nike_images/n17.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike P-6000 Women’s Sneakers – Orange",
            "price": 6195.00,
            "image": "nike_images/n18.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike P-6000 Women’s Sneakers – Phantom",
            "price": 6195.00,
            "image": "nike_images/n19.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"
        },
        {
            "brand": "Nike",
            "name": "Nike Air Force 1 LX Women’s Sneakers – Sail",
            "price": 7595.00,
            "image": "nike_images/n20.png",
            "gender": "women",
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
