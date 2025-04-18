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
                <button class="buy-btn">Buy Now</button>
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
        { img: "static/newbalance_images/nb1.png", title: "New Balance 530 Men’s Running Shoes - White Natural Indigo", price: "₱6,295", gender: "men" },
        { img: "static/newbalance_images/nb2.png", title: "New Balance 327 Men’s Sneaker Shoes - Navy", price: "₱6,995.00", gender: "men" },
        { img: "static/newbalance_images/nb3.png", title: "New Balance 327 Men’s Sneaker Shoes - Silver Birch with Black", price: "₱6,995.00", gender: "men" },
        { img: "static/newbalance_images/nb4.png", title: "New Balance 530 Men’s Running Shoes - Moonbeam with Sea Salt", price: "₱6,295.00", gender: "men" },
        { img: "static/newbalance_images/nb5.png", title: "New Balance 2002r Men’s Sneaker Shoes - Light Grey", price: "₱9,995.00", gender: "men" },
        { img: "static/newbalance_images/nb6.png", title: "New Balance 2002r Men’s Sneaker Shoes - Calm Toupe with Angora", price: "₱9,995.00", gender: "men" },
        { img: "static/newbalance_images/nb7.png", title: "New Balance 550 Men’s Sneaker Shoes - Black ", price: "₱8,485.00", gender: "men" },
        { img: "static/newbalance_images/nb8.png", title: "New Balance 550 Men’s Sneaker Shoes - Sea Salt Burgundy", price: "₱8,485.00", gender: "men" },
        { img: "static/newbalance_images/nb9.png", title: "New Balance 1906r Men’s Sneaker Shoes - White Metallic Gold", price: "₱9,795.00", gender: "men" },
        { img: "static/newbalance_images/nb10.png", title: "New Balance 1906r Men’s Sneaker Shoes - Silver", price: "₱9,795.00", gender: "men" },
        { img: "static/newbalance_images/nb11.png", title: "New Balance 530 Women’s Running Shoes - Silver Metallic with Summer Fog", price: "₱6,295 .00", gender: "women" },
        { img: "static/newbalance_images/nb12.png", title: "New Balance 1000 Women’s Sneaker Shoes - Purple/White", price: "₱9,795.00", gender: "women" },
        { img: "static/newbalance_images/nb13.png", title: "New Balance 327 Women’s Sneaker Shoes - Black/White", price: "₱6,995.00", gender: "women" },
        { img: "static/newbalance_images/nb14.png", title: "New Balance 327 Bungee Girl Sneaker Shoes - Pink", price: "₱6,995.00", gender: "women" },
        { img: "static/newbalance_images/nb15.png", title: "New Balance 550 Women’s Sneaker Shoes - White/Green ", price: "₱7,795.00", gender: "women" },
        { img: "static/newbalance_images/nb16.png", title: "New Balance 1906r Women’s Sneaker Shoes - Metallic Pink", price: "₱9,995.00", gender: "women" },
        { img: "static/newbalance_images/nb17.png", title: "New Balance 550 Women’s Sneaker Shoes - UNC Blue", price: "₱7,795.00", gender: "women" },
        { img: "static/newbalance_images/nb18.png", title: "New Balance 2002r Hook and Loop Women’s Sneaker Shoes", price: "₱9,995.00", gender: "women" },
        { img: "static/newbalance_images/nb19.png", title: "New Balance 9060 Women’s Sneaker Shoes - White/Green", price: "₱10,495.00", gender: "women" },
        { img: "static/newbalance_images/nb20.png", title: "New Balance 1906r Women’s Sneaker Shoes - Khaki", price: "₱9,795.00", gender: "women" }
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
            const buyNowBtn = productElement.querySelector(".buy-btn");

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

            buyNowBtn.addEventListener("click", () => {
                alert(`Buying now: ${product.title}`);
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