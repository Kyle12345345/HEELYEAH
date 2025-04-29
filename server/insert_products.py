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
        }
    ]
    adidas_products = [
        {
            "brand": "Adidas",
            "name": "Adidas Campus 00s Men’s Sneakers - Core Black",
            "price": 5500.00,
            "image": "adidas_images/A1.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Tokyo Women’s Sneakers Shoes - Off White",
            "price": 6500.00,
            "image": "adidas_images/A2.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Gazelle Indoor Women’s Sneakers Shoes - Pink",
            "price": 7300.00,
            "image": "adidas_images/A3.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Samba OG Sneakers Women’s Shoes - Ftwr White",
            "price": 6195.00,
            "image": "adidas_images/A4.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Superstar Men’s Sneaker - White",
            "price": 5300.00,
            "image": "adidas_images/A5.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Tokyo Women’s Sneaker Shoes - Black",
            "price": 6500.00,
            "image": "adidas_images/A6.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Gazelle Women’s Indoor Shoes - Better Scarlet",
            "price": 7300.00,
            "image": "adidas_images/A7.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Gazelle Men’s Sneakers - Blue",
            "price": 5500.00,
            "image": "adidas_images/A8.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Handball Spezials Women’s Sneakers - Wonder Silver",
            "price": 5300.00,
            "image": "adidas_images/A9.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Samba LT Women’s Sneakers - Ftwr White",
            "price": 7300.00,
            "image": "adidas_images/A10.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas SL 72 OG Women’s Sneakers - Off White",
            "price": 6000.00,
            "image": "adidas_images/A11.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Taewondo Lace Men’ Sneakers - Black",
            "price": 6500.00,
            "image": "adidas_images/A12.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Superstar Men’s Sneaker - White - Core Black",
            "price": 5300.00,
            "image": "adidas_images/A13.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas SL 72 OG Women’s Sneakers - Black",
            "price": 6000.00,
            "image": "adidas_images/A14.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Samba OG Sneakers Women’s Shoes - Black",
            "price": 6800.00,
            "image": "adidas_images/A15.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Handball Spezial Men’s Sneakers Shoes - Preloved Yellow",
            "price": 5800.00,
            "image": "adidas_images/A16.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas SL 72 RTN Men’s Sneakers - Crystal White",
            "price": 7300.00,
            "image": "adidas_images/A17.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Forum 2000 Men’s Sneakers Shoes - Off White",
            "price": 6800.00,
            "image": "adidas_images/A18.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Taekwondo Lace Men’s Sneakers - White",
            "price": 6500.00,
            "image": "adidas_images/A19.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Adidas",
            "name": "Adidas Responce CL Men’s Running Shoes - Gray",
            "price": 7000.00,
            "image": "adidas_images/A20.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        }
    ]
    newbalance_products = [
        {
            "brand": "New Balance",
            "name": "New Balance 530 Men’s Running Shoes - White Natural Indigo",
            "price": 6295.00,
            "image": "newbalance_images/nb1.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 327 Men’s Sneaker Shoes - Navy", 
            "price": 6995.00,
            "image": "newbalance_images/nb2.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 327 Men’s Sneaker Shoes - Silver Birch with Black", 
            "price": 6995.00,
            "image": "newbalance_images/nb3.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 530 Men’s Running Shoes - Moonbeam with Sea Salt", 
            "price": 6295.00,
            "image": "newbalance_images/nb4.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 2002r Men’s Sneaker Shoes - Light Grey", 
            "price": 9995.00,
            "image": "newbalance_images/nb5.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 2002r Men’s Sneaker Shoes - Calm Toupe with Angora",
            "price": 9995.00,
            "image": "newbalance_images/nb6.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 550 Men’s Sneaker Shoes - Black ",
            "price": 8485.00,
            "image": "newbalance_images/nb7.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 550 Men’s Sneaker Shoes - Sea Salt Burgundy", 
            "price": 8485.00,
            "image": "newbalance_images/nb8.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 1906r Men’s Sneaker Shoes - White Metallic Gold", 
            "price": 9795.00,
            "image": "newbalance_images/nb9.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 1906r Men’s Sneaker Shoes - Silver", 
            "price": 9795.00,
            "image": "newbalance_images/nb10.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 530 Women’s Running Shoes - Silver Metallic with Summer Fog", 
            "price": 6295.00,
            "image": "newbalance_images/nb11.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 1000 Women’s Sneaker Shoes - Purple/White", 
            "price": 9795.00,
            "image": "newbalance_images/nb12.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 327 Women’s Sneaker Shoes - Black/White", 
            "price": 6995.00,
            "image": "newbalance_images/nb13.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 327 Bungee Girl Sneaker Shoes - Pink", 
            "price": 6995.00,
            "image": "newbalance_images/nb14.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 550 Women’s Sneaker Shoes - White/Green ", 
            "price": 7795.00,
            "image": "newbalance_images/nb15.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 1906r Women’s Sneaker Shoes - Metallic Pink", 
            "price": 9995.00,
            "image": "newbalance_images/nb16.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 550 Women’s Sneaker Shoes - UNC Blue", 
            "price": 7795.00,
            "image": "newbalance_images/nb17.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 2002r Hook and Loop Women’s Sneaker Shoes", 
            "price": 9995.00,
            "image": "newbalance_images/nb18.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 9060 Women’s Sneaker Shoes - White/Green", 
            "price": 10495.00,
            "image": "newbalance_images/nb19.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "New Balance",
            "name": "New Balance 1906r Women’s Sneaker Shoes - Khaki", 
            "price": 9795.00,
            "image": "newbalance_images/nb20.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
    ]
    converse_products = [
        {
            "brand": "Converse",
            "name": "CONS AS-1 Pro Men's Sneakers – Classic Taupe/Truffle/Black",
            "price": 5990.00,
            "image": "converse_images/c1.jpg",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Star Player 76 Premium Canvas Men's Sneakers – Black",
            "price": 3990.00,
            "image": "converse_images/c2.jpg",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Run Star Trainer Retro Sport Sneakers – Obsidian/Wet Stone/Egret",
            "price": 4490.00,
            "image": "converse_images/c3.jpg",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Chuck Taylor All Star OX Sneakers – Mono Black",
            "price": 3290.00,
            "image": "converse_images/c4.jpg",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Run Star Hike Canvas Platform Sneakers – Black/White/Gum",
            "price": 5290.00,
            "image": "converse_images/c5.jpg",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Chuck 70 OX Sneakers – Black",
            "price": 4290.00,
            "image": "converse_images/c6.jpg",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Omni Trainer Sneakers – Egret/Vintage White/Black",
            "price": 4790.00,
            "image": "converse_images/c7.jpg",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Star Player 76 Premium Canvas Men's Sneakers – Vintage White/Black",
            "price": 3990.00,
            "image": "converse_images/c8.jpg",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Chuck 70 Hi Sneakers – Black",
            "price": 4990.00,
            "image": "converse_images/c9.jpg",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Chuck 70 AT-CX Sneakers – Vintage White/Egret/Black",
            "price": 2895.00,
            "image": "converse_images/c10.jpg",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "CTAS Lift Women's Sneakers – Vintage White/Out of the Blue",
            "price": 4490.00,
            "image": "converse_images/c11.jpg",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "CTAS Cruise Sneakers – Egret/White/Egret",
            "price": 4490.00,
            "image": "converse_images/c12.jpg",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Omni Trainer Sneakers – Black/Dark Matter",
            "price": 4790.00,
            "image": "converse_images/c13.jpg",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Chuck Taylor All Star Lift Women's Sneakers – White/Black",
            "price": 3790.00,
            "image": "converse_images/c14.jpg",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Chuck Taylor All Star Move Canvas Platform Women's Sneakers – White",
            "price": 3990.00,
            "image": "converse_images/c15.jpg",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Run Star Trainer Women's Sneakers – Light Dune/You Dew You/Egret",
            "price": 4590.00,
            "image": "converse_images/c16.jpg",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Run Star Trainer Suede Women's Sneakers – Pale Surplus/Blueberry Ice",
            "price": 4590.00,
            "image": "converse_images/c17.jpg",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Run Star Hike Canvas Platform Sneakers – White/Black/Gum",
            "price": 5290.00,
            "image": "converse_images/c18.jpg",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Run Star Trainer Suede Women's Sneakers – Coastal Dune/Sugar Berry/Egret",
            "price": 4590.00,
            "image": "converse_images/c19.jpg",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Converse",
            "name": "Run Star Trainer Women's Sneakers – Vernal Pool/Egret/Light Brown",
            "price": 4590.00,
            "image": "converse_images/c20.jpg",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        }
    ]
    puma_products = [
        {
            "brand": "Puma",
            "name": "Puma Speedcat OG Men’s Lifestyle Shoes - Brown", 
            "price": 7100.00,
            "image": "puma_images/p1.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Speedcat OG Men’s Lifestyle Shoes - Black", 
            "price": 7100.00,
            "image": "puma_images/p2.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Speedcat OG Men’s Lifestyle Shoes - Blue", 
            "price": 7100.00,
            "image": "puma_images/p3.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Speedcat OG Women’s Sneakers Shoes - Whisp of Pink", 
            "price": 7100.00,
            "image": "puma_images/p4.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Speedcat OG Women’s Sneakers Shoes - Cool Mid Gray", 
            "price": 7100.00,
            "image": "puma_images/p5.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Speedcat OG Women’s Sneakers Shoes - Blue-Pink", 
            "price": 7100.00,
            "image": "puma_images/p6.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Palermo Premium Men’s Sneaker Shoes - Alpine Snow", 
            "price": 6100.00,
            "image": "puma_images/p7.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Palermo Premium Men’s Sneaker Shoes - Black", 
            "price": 6100.00,
            "image": "puma_images/p8.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Palermo Jer-She Women’s Lifestyle Shoes - White", 
            "price": 6100.00,
            "image": "puma_images/p9.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Palermo Women’s Lifestyle Shoes - Blue", 
            "price": 6100.00,
            "image": "puma_images/p10.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Easy Rider Mix Men’s Sneaker Shoes - White", 
            "price": 7100.00,
            "image": "puma_images/p11.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Easy Rider Vintage Men’s Lifestyle Shoes - Green",
            "price": 7100.00,
            "image": "puma_images/p12.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Easy Rider Vintage Men’s Lifestyle Shoes - Intense Red-White", 
            "price": 7100.00,
            "image": "puma_images/p13.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Easy Rider Vintage Women’s Lifestyle Shoes - Black-White", 
            "price": 7100.00,
            "image": "puma_images/p14.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Easy Rider Vintage Women’s Lifestyle Shoes - Speed Yellow-Blue", 
            "price": 7100.00,
            "image": "puma_images/p15.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Easy Rider Jer-She Women’s Lifestyle Shoes", 
            "price": 6200.00,
            "image": "puma_images/p16.png",
            "gender":"women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma Suede X Hello Kitty Women’s Sneaker Shoes - Black", 
            "price": 6200.00,
            "image": "puma_images/p17.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma FX Suede Play Paris Women’s Sneaker Shoes - Warm White", 
            "price": 6800.00,
            "image": "puma_images/p18.png",
            "gender": "women",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma LA France 1of1 Team Men’s Basketball Shoes - Blue", 
            "price": 6800.00,
            "image": "puma_images/p19.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
        {
            "brand": "Puma",
            "name": "Puma All-Pro Nitro Men’s Basketball Shoes - Glow - Sun Stream", 
            "price": 7900.00,
            "image": "puma_images/p20.png",
            "gender": "men",
            "size": "6,7,8,9,10,11"   
        },
    ]
    

all_products = nike_products + adidas_products + newbalance_products + converse_products + puma_products

with app.app_context():
    for product_data in all_products:
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
    print("✅ All products inserted successfully!")
