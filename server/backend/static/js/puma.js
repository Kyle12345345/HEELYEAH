let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    document.querySelector('.slides').style.transform = `translateX(${-currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function createProductCard(product) {
    return `
        <div class="product" data-gender="${product.gender}">
            <img src="${product.img}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">${product.price}</p>

            <label for="size-${product.title.replace(/\s+/g, '-')}">Size:</label>
            <select class="size-dropdown" id="size-${product.title.replace(/\s+/g, '-')}">
                <option value="">Select Size</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
            </select>

            <div class="product-buttons">
                <button class="add-btn">Add to Cart</button>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", () => {
        dropdownMenu.style.display = "block";
        setTimeout(() => {
            dropdownMenu.style.opacity = "1";
            dropdownMenu.style.transform = "translateY(0)";
        }, 10);
    });

    dropdown.addEventListener("mouseleave", () => {
        dropdownMenu.style.opacity = "0";
        dropdownMenu.style.transform = "translateY(10px)";
        setTimeout(() => {
            dropdownMenu.style.display = "none";
        }, 300);
    });

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartCount = document.querySelector(".cart-count");
        if (cartCount) {
            const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
            cartCount.textContent = totalQty;
        }
    }

    updateCartCount();

    const products = [
        { 
            img: "static/puma_images/p1.png", 
            title: "Puma Speedcat OG Men’s Lifestyle Shoes - Brown", 
            price: "₱7,100", 
            gender: "men",
            brand: "Puma"
        },
        { 
            img: "static/puma_images/p2.png", 
            title: "Puma Speedcat OG Men’s Lifestyle Shoes - Black", 
            price: "₱7,100.00", 
            gender: "men",
            brand: "Puma"
        },
        { 
            img: "static/puma_images/p3.png", 
            title: "Puma Speedcat OG Men’s Lifestyle Shoes - Blue", 
            price: "₱7,100.00", 
            gender: "men",
            brand: "Puma"
        },
        { 
            img: "static/puma_images/p4.png", 
            title: "Puma Speedcat OG Women’s Sneakers Shoes - Whisp of Pink", 
            price: "₱7,100.00", 
            gender: "women",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p5.png", 
            title: "Puma Speedcat OG Women’s Sneakers Shoes - Cool Mid Gray", 
            price: "₱7,100.00", 
            gender: "women",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p6.png", 
            title: "Puma Speedcat OG Women’s Sneakers Shoes - Blue-Pink", 
            price: "₱7,100.00", 
            gender: "women",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p7.png", 
            title: "Puma Palermo Premium Men’s Sneaker Shoes - Alpine Snow", 
            price: "₱6,100.00", 
            gender: "men",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p8.png", 
            title: "Puma Palermo Premium Men’s Sneaker Shoes - Black", 
            price: "₱6,100", 
            gender: "men",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p9.png", 
            title: "Puma Palermo Jer-She Women’s Lifestyle Shoes - White", 
            price: "₱6,100.00", 
            gender: "women",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p10.png", 
            title: "Puma Palermo Women’s Lifestyle Shoes - Blue", 
            price: "₱6,100.00", 
            gender: "women",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p11.png", 
            title: "Puma Easy Rider Mix Men’s Sneaker Shoes - White", 
            price: "₱7,100.00", 
            gender: "men",
            brand: "Puma"
        },
        { 
            img: "static/puma_images/p12.png", 
            title: "Puma Easy Rider Vintage Men’s Lifestyle Shoes - Green", 
            price: "₱7,100.00", 
            gender: "men",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p13.png", 
            title: "Puma Easy Rider Vintage Men’s Lifestyle Shoes - Intense Red-White", 
            price: "₱7,100.00", 
            gender: "men",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p14.png", 
            title: "Puma Easy Rider Vintage Women’s Lifestyle Shoes - Black-White", 
            price: "₱7,100.00", 
            gender: "women",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p15.png", 
            title: "Puma Easy Rider Vintage Women’s Lifestyle Shoes - Speed Yellow-Blue", 
            price: "₱7,100.00", 
            gender: "women",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p16.png", 
            title: "Puma Easy Rider Jer-She Women’s Lifestyle Shoes", 
            price: "₱6,200.00", 
            gender: "women",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p17.png", 
            title: "Puma Suede X Hello Kitty Women’s Sneaker Shoes - Black", 
            price: "₱6,200.00", 
            gender: "women",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p18.png", 
            title: "Puma FX Suede Play Paris Women’s Sneaker Shoes - Warm White", 
            price: "₱6,800.00", 
            gender: "women",
            brand: "Puma"
        },
        { 
            img: "static/puma_images/p19.png", 
            title: "Puma LA France 1of1 Team Men’s Basketball Shoes - Blue", 
            price: "₱6,800.00", 
            gender: "men",
            brand: "Puma" 
        },
        { 
            img: "static/puma_images/p20.png", 
            title: "Puma All-Pro Nitro Men’s Basketball Shoes - Glow - Sun Stream", 
            price: "₱7,900.00", 
            gender: "men",
            brand: "Puma" 
        }
    ];

    const productContainer = document.getElementById("product-container");
    const prevBtn = document.getElementById("prevPage");
    const nextBtn = document.getElementById("nextPage");
    const pageNum = document.getElementById("pageNumber");
    const menFilter = document.getElementById("men-filter");
    const womenFilter = document.getElementById("women-filter");

    let currentPage = 0;
    const productsPerPage = [16, 4];

    function renderPage(page) {
        productContainer.innerHTML = "";

        let filteredProducts = products.filter(product => {
            if (menFilter.checked && product.gender === "men") return true;
            if (womenFilter.checked && product.gender === "women") return true;
            return (!menFilter.checked && !womenFilter.checked);
        });

        const start = page === 0 ? 0 : 16;
        const end = start + productsPerPage[page];
        const paginatedProducts = filteredProducts.slice(start, end);

        productContainer.innerHTML = paginatedProducts.map(createProductCard).join('');

        const productElements = document.querySelectorAll(".product");
        productElements.forEach((productElement, index) => {
            const product = paginatedProducts[index];

            const addToCartBtn = productElement.querySelector(".add-btn");

            addToCartBtn.addEventListener("click", () => {
                const sizeSelect = productElement.querySelector(".size-dropdown");
                const selectedSize = sizeSelect.value;

                if (!selectedSize) {
                    alert("Please select a size before adding to cart.");
                    return;
                }

                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                const existing = cart.find(item => item.title === product.title && item.size === selectedSize);

                if (existing) {
                    existing.quantity = (existing.quantity || 1) + 1;
                } else {
                    cart.push({ ...product, size: selectedSize, quantity: 1 });
                }

                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartCount();
                showCartAlert();
            });

        });

        prevBtn.disabled = page === 0;
        nextBtn.disabled = page === 1 || paginatedProducts.length < productsPerPage[page];
        pageNum.textContent = `Page ${page + 1}`;
    }

    function updateFilters() {
        currentPage = 0;
        renderPage(currentPage);
    }

    prevBtn.addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentPage < 1) {
            currentPage++;
            renderPage(currentPage);
        }
    });

    menFilter.addEventListener("change", updateFilters);
    womenFilter.addEventListener("change", updateFilters);

    renderPage(currentPage);
});

function showPopup(message = "Product is successfully added to your cart.") {
    const popup = document.getElementById("popup");
    popup.textContent = message;
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}

function showCartAlert() {
    const alert = document.getElementById("cart-alert");
    alert.style.display = "block";
    alert.style.opacity = "1";

    setTimeout(() => {
        alert.style.opacity = "0";
        setTimeout(() => {
            alert.style.display = "none";
        }, 500);
    }, 2000);
}