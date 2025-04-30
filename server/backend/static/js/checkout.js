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
    const orderSummaryDiv = document.getElementById('order-summary');
    const trackingInfoDiv = document.getElementById('tracking-info');
    const addressForm = document.getElementById('address-form');
    const savedAddressDiv = document.getElementById('saved-address');

    // Retrieve saved address from localStorage (per user)
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    const addressKey = `savedAddress_${loggedInUserId}`;
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
        addressForm.style.display = 'block';
        const inputs = addressForm.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
    }

    // Get **checkoutCart** items from localStorage
    const cartData = JSON.parse(localStorage.getItem("checkoutCart")) || [];
    console.log("Cart Data:", cartData);  // Log cart data to check if it's correct

    // Display cart products in Order Summary
    let total = 0;

    // Loop through cart items and display them in the checkout summary
    cartData.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const priceNumber = parseFloat(item.price.toString().replace(/[^\d.]/g, ""));
        const subtotal = priceNumber * quantity;

        const itemElement = document.createElement("div");
        itemElement.classList.add("product-item");

        itemElement.innerHTML = `
            <img src="/${item.img}" alt="${item.title}" />
            <div class="details">
                <h2>${item.brand.toUpperCase()}</h2>
                <p>${item.title}</p>
                <p><strong>Size:</strong> ${item.size}</p>
            </div>
            <div class="quantity">
                <p><strong>Quantity: </strong><span>${quantity}</span></p>
            </div>
            <div class="price">₱${subtotal.toLocaleString()}</div>
        `;

        orderSummaryDiv.appendChild(itemElement);

        total += subtotal;  // Add to the total
    });

    // Add the total to the order summary
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<h3>Total: ₱${total.toLocaleString()}</h3>`;
    orderSummaryDiv.appendChild(totalDiv);

    // Tracking Details (Example static steps)
    const trackingSteps = ["Order Created"];
    trackingSteps.forEach(step => {
        const div = document.createElement('div');
        div.className = 'tracking-step';
        div.textContent = step;
        trackingInfoDiv.appendChild(div);
    });

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