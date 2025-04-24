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
            img: "static/adidas_images/A1.png",
            title: "Adidas Campus 00s Men’s Sneakers - Core Black",
            price: "₱5,500.00",
            gender: "men",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A2.png",
            title: "Adidas Tokyo Women’s Sneakers Shoes - Off White",
            price: "₱6,500.00",
            gender: "women",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A3.png",
            title: "Adidas Gazelle Indoor Women’s Sneakers Shoes - Pink",
            price: "₱7,300.00",
            gender: "women",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A4.png",
            title: "Adidas Samba OG Sneakers Women’s Shoes - Ftwr White",
            price: "₱6,195.00",
            gender: "women",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A5.png",
            title: "Adidas Superstar Men’s Sneaker - White",
            price: "₱5,300.00",
            gender: "men",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A6.png",
            title: "Adidas Tokyo Women’s Sneaker Shoes - Black",
            price: "₱6,500.00",
            gender: "women",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A7.png",
            title: "Adidas Gazelle Women’s Indoor Shoes - Better Scarlet",
            price: "₱7,300.00",
            gender: "women",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A8.png",
            title: "Adidas Gazelle Men’s Sneakers - Blue",
            price: "₱5,500.00",
            gender: "men",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A9.png",
            title: "Adidas Handball Spezials Women’s Sneakers - Wonder Silver",
            price: "₱5,300.00",
            gender: "women",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A10.png",
            title: "Adidas Samba LT Women’s Sneakers - Ftwr White",
            price: "₱7,300.00",
            gender: "women",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A11.png",
            title: "Adidas SL 72 OG Women’s Sneakers - Off White",
            price: "₱6,000.00",
            gender: "women",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A12.png",
            title: "Adidas Taewondo Lace Men’ Sneakers - Black",
            price: "₱6,500.00",
            gender: "men",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A13.png",
            title: "Adidas Superstar Men’s Sneaker - White - Core Black",
            price: "₱5,300.00",
            gender: "men",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A14.png",
            title: "Adidas SL 72 OG Women’s Sneakers - Black",
            price: "₱6,000.00",
            gender: "women",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A15.png",
            title: "Adidas Samba OG Sneakers Women’s Shoes - Black",
            price: "₱6,800.00",
            gender: "women",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A16.png",
            title: "Adidas Handball Spezial Men’s Sneakers Shoes - Preloved Yellow",
            price: "₱5,800.00",
            gender: "men",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A17.png",
            title: "Adidas SL 72 RTN Men’s Sneakers - Crystal White",
            price: "₱7,300.00",
            gender: "men",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A18.png",
            title: "Adidas Forum 2000 Men’s Sneakers Shoes - Off White",
            price: "₱6,800.00",
            gender: "men",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A19.png",
            title: "Adidas Taekwondo Lace Men’s Sneakers - White",
            price: "₱6,500.00",
            gender: "men",
            brand: "Adidas"
        },
        {
            img: "static/adidas_images/A20.png",
            title: "Adidas Responce CL Men’s Running Shoes - Gray",
            price: "₱7,000.00",
            gender: "men",
            brand: "Adidas"
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