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

    const productElements = document.querySelectorAll(".product-card");

    productElements.forEach(productElement => {
        const addToCartBtn = productElement.querySelector(".add-btn");

        if (addToCartBtn) {
            addToCartBtn.addEventListener("click", () => {
                const sizeSelect = productElement.querySelector("select");
                const selectedSize = sizeSelect.value;
                const title = productElement.querySelector("h3").innerText;
                const price = productElement.querySelector(".price") ? productElement.querySelector(".price").innerText : "₱0";
                const img = productElement.querySelector("img").getAttribute("src");
                const gender = productElement.querySelector(".gender") ? productElement.querySelector(".gender").innerText : "Unisex";

                if (!selectedSize) {
                    alert("Please select a size before adding to cart.");
                    return;
                }

                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                const existing = cart.find(item => item.title === title && item.size === selectedSize);

                if (existing) {
                    existing.quantity = (existing.quantity || 1) + 1;
                } else {
                    cart.push({ img, title, price, gender, size: selectedSize, quantity: 1 });
                }

                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartCount();
                showCartAlert();
            });
        }
    });
});

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
    