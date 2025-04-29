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

function currentSlide(index) {
    showSlide(index);
}

setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

document.addEventListener("DOMContentLoaded", async () => {
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

    const orderSummaryDiv = document.getElementById('order-summary');
    const trackingInfoDiv = document.getElementById('tracking-info');
    const addressForm = document.getElementById('address-form');
    const savedAddressDiv = document.getElementById('saved-address');

    // Create input fields if missing
    if (addressForm && !document.getElementById('province')) {
        addressForm.innerHTML = `
            <input type="text" id="fullname" placeholder="Full Name" required><br>
            <input type="text" id="street" placeholder="Street Address" required><br>
            <input type="text" id="province" placeholder="Province" required><br>
            <input type="text" id="city" placeholder="City" required><br>
            <input type="text" id="zip" placeholder="Zip Code" required><br>
            <input type="text" id="country" placeholder="Country" required><br>
            <button type="submit">Save Address</button>
        `;
    }

    // Example: Assume you get the logged-in user's ID
    const loggedInUserId = localStorage.getItem('loggedInUserId'); // Set this on login
    const addressKey = `savedAddress_${loggedInUserId}`;

    // Get **checkoutCart** items from localStorage instead of "cart"
    const cartData = JSON.parse(localStorage.getItem("checkoutCart")) || [];

    // Display cart products in Order Summary
    let total = 0;

    // Function to fetch product details from the database by productId
    async function getProductDetails(productId) {
        try {
            const response = await fetch(`/products/${productId}`);
            if (!response.ok) throw new Error('Product not found');
            const data = await response.json();
            return data;  // Return product data
        } catch (error) {
            console.error("Error fetching product details:", error);
            return null;
        }
    }

    if (cartData.length === 0) {
        orderSummaryDiv.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        // Loop through cart items and fetch the corresponding product details from the database
        for (const item of cartData) {
            const productDetails = await getProductDetails(item.productId);  // Fetch the product details from the database using productId
            if (productDetails) {
                const quantity = item.quantity || 1;
                const priceNumber = productDetails.price;
                const subtotal = priceNumber * quantity;

                const div = document.createElement('div');
                div.className = 'product-item';
                div.innerHTML = `
                    <img src="${productDetails.image}" alt="${productDetails.name}" style="width: 100px; height: auto; margin-bottom: 10px;">
                    <p><strong>Brand:</strong> ${productDetails.brand}</p>
                    <p><strong>Product:</strong> ${productDetails.name}</p>
                    <p><strong>Size:</strong> ${item.size}</p>
                    <p><strong>Price:</strong> ₱${priceNumber.toLocaleString()}</p>
                    <p><strong>Quantity:</strong> ${quantity}</p>
                    <p><strong>Subtotal:</strong> ₱${subtotal.toLocaleString()}</p>
                    <hr>
                `;
                orderSummaryDiv.appendChild(div);

                total += subtotal;  // Add to the total
            }
        }

        // Add the total to the order summary
        const totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<h3>Total: ₱${total.toLocaleString()}</h3>`;
        orderSummaryDiv.appendChild(totalDiv);
    }

    // Tracking Details (Example static steps)
    const trackingSteps = [
        "Order Created",
    ];

    trackingSteps.forEach(step => {
        const div = document.createElement('div');
        div.className = 'tracking-step';
        div.textContent = step;
        trackingInfoDiv.appendChild(div);
    });

    // Retrieve saved address from localStorage (per user)
    const savedAddress = JSON.parse(localStorage.getItem(addressKey));
    if (savedAddress) {
        savedAddressDiv.innerHTML = `
          <h4>Default Address:</h4>
          <p>${savedAddress.fullname}</p>
          <p>${savedAddress.street}</p>
          <p>${savedAddress.province}</p>
          <p>${savedAddress.city}, ${savedAddress.zip}</p>
          <p>${savedAddress.country}</p>
        `;

        addressForm.style.display = 'none';
    } else {
        // No saved address for this user
        addressForm.style.display = 'block';

        // ✨ Clear all input fields manually
        const inputs = addressForm.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
    }

    // Save Shipping Address
    addressForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const street = document.getElementById('street').value;
        const province = document.getElementById('province').value;
        const city = document.getElementById('city').value;
        const zip = document.getElementById('zip').value;
        const country = document.getElementById('country').value;

        const address = {
            fullname: fullname,
            street: street,
            province: province,
            city: city,
            zip: zip,
            country: country
        };

        localStorage.setItem(addressKey, JSON.stringify(address));

        savedAddressDiv.innerHTML = `
          <h4>Default Address:</h4>
          <p>${fullname}</p>
          <p>${street}</p>
          <p>${province}</p>
          <p>${city}, ${zip}</p>
          <p>${country}</p>
        `;

        addressForm.style.display = 'none';
    });
});

const placeOrderBtn = document.getElementById('place-order-btn');

placeOrderBtn.addEventListener('click', () => {
    const fullCart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutCart = JSON.parse(localStorage.getItem('checkoutCart')) || [];

    const updatedCart = fullCart.filter(fullItem => {
        return !checkoutCart.some(checkoutItem => (
            fullItem.id === checkoutItem.id &&
            fullItem.size === checkoutItem.size
        ));
    });

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.removeItem('checkoutCart');

    // --- Create the popup dynamically ---
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.style.display = 'flex'; // Show the popup immediately

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popupContent.innerHTML = `
        <p>Your order has been placed successfully!</p>
    `;

    popup.appendChild(popupContent);
    document.body.appendChild(popup);

    // --- Auto close the popup after 2 seconds ---
    setTimeout(() => {
        popup.remove(); // Remove the popup from DOM
        window.location.href = "/place_order"; // Redirect after close
    }, 1000); // 1000 milliseconds = 1 second
});
