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
        { img: "static/nike_images/n1.png", title: "Dunk Low Retro Men’s Basketball Shoes - White", price: "₱5,495", gender: "men" },
        { img: "static/nike_images/n2.png", title: "Cortez Women’s Sneakers - Black", price: "₱4,995.00", gender: "women" },
        { img: "static/nike_images/n3.png", title: "Nike Zoom Vomero 5 Men’s Sneakers - Wolf Gray", price: "₱8,895.00", gender: "men" },
        { img: "static/nike_images/n4.png", title: "Air Jordan 1 Low Men’s - Bred Toe", price: "₱6,195.00", gender: "men" },
        { img: "static/nike_images/n5.png", title: "Nike Air Force 1 '07 Women’s - White", price: "₱5,495.00", gender: "women" },
        { img: "static/nike_images/n6.png", title: "Book 1 EP Men’s Basketball Shoes - Barely Grape", price: "₱7,895.00", gender: "men" },
        { img: "static/nike_images/n7.png", title: "Air Jordan 4 Retro Men’s Basketball Shoes - Black", price: "₱11,395.00", gender: "men" },
        { img: "static/nike_images/n8.png", title: "Air Jordan 11 Retro Men’s Basketball Shoes - White", price: "₱11,895.00", gender: "men" },
        { img: "static/nike_images/n9.png", title: "Air Jordan 11 Retro Low Men’s Basketball Shoes - White/Navy", price: "₱10,295.00", gender: "men" },
        { img: "static/nike_images/n10.png", title: "Zoom Vomero 5 Women’s Sneaker Shoes - Vast Gray", price: "₱9,395.00", gender: "women" },
        { img: "static/nike_images/n11.png", title: "Dunk Low Sail Women’s - Brown ", price: "₱5,495.00", gender: "women" },
        { img: "static/nike_images/n12.png", title: "Air Jordan 11 Retro Women’s Basketball Shoes - Black", price: "₱12,295.00", gender: "women" },
        { img: "static/nike_images/n13.png", title: "P-6000 Men’s Sneaker Shoes - Khaki", price: "₱4,995.00", gender: "men" },
        { img: "static/nike_images/n14.png", title: "Air Max Plus Utility Men’s Sneaker Shoes - Khaki", price: "₱10,295.00", gender: "men" },
        { img: "static/nike_images/n15.png", title: "Air Max Plus Men’s Sneaker Shoes - Khaki", price: "₱9,895.00", gender: "men" },
        { img: "static/nike_images/n16.png", title: "Nike Air Max Plus Sneaker Shoes - Yellow/Black", price: "₱6,295.00", gender: "women" },
        { img: "static/nike_images/n17.png", title: "Dunk Low University Blue Women’s - Blue", price: "₱7,495.00", gender: "women" },
        { img: "static/nike_images/n18.png", title: "Nike P-6000 Women’s Sneakers - Orange", price: "₱6,195.00", gender: "women" },
        { img: "static/nike_images/n19.png", title: "Nike P-6000 Women’s Sneakers - Phantom", price: "₱6,195.00", gender: "women" },
        { img: "static/nike_images/n20.png", title: "Air Force 1 LX Women’s Sneakers - Sail", price: "₱7,595.00", gender: "women" }
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