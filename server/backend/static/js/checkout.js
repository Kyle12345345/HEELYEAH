document.addEventListener("DOMContentLoaded", async () => {
    const orderSummaryDiv = document.getElementById('order-summary');
    const trackingInfoDiv = document.getElementById('tracking-info');
    const addressForm = document.getElementById('address-form');
    const savedAddressDiv = document.getElementById('saved-address');
    const placeOrderBtn = document.getElementById('place-order-btn');

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
    let total = 0;

    // Loop through cart items and display them in the checkout summary
    cartData.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const priceNumber = parseFloat(item.price.toString().replace(/[^\d.]/g, ""));
        const subtotal = priceNumber * quantity;

        const itemElement = document.createElement("div");
        itemElement.classList.add("product-item");

        itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.title}" />
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

    placeOrderBtn.addEventListener('click', () => {
        const orderId = Math.floor(Math.random() * 1000000); // Random Order ID for demonstration
        const currentDate = new Date().toLocaleDateString('en-PH', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
        const userName = localStorage.getItem('loggedInUserName');  // Assuming this is stored when the user logs in
        const fullAddress = savedAddress ? savedAddress : "No address provided";
        
        const receiptHTML = `
            <div class="receipt-popup">
                <!-- Close Button with Font Awesome Icon -->
                <button class="close-btn"><i class="fas fa-times"></i></button>
                <h1>HEELYEAH!</h1>
                <h3>Order Receipt</h3>
                <p><strong>Order #:</strong> ${orderId}</p>
                <p><strong>Date:</strong> ${currentDate}</p>
                <p><strong>Customer:</strong> ${fullAddress.fullname}</p>
                <hr />
                <h3>Items:</h3>
                ${cartData.map(item => {
                    const quantity = item.quantity || 1;
                    const price = parseFloat(item.price.toString().replace(/[^\d.]/g, "")); 
                    const subtotal = price * quantity; 
                    return `
                        <p>${item.title} | Size ${item.size} | ₱${price.toLocaleString()} x ${quantity} = ₱${subtotal.toLocaleString()}</p>
                    `;
                }).join('')}
                <hr />
                <p><strong>Shipping Details:</strong></p>
                <p>${fullAddress.street}</p>
                <p>${fullAddress.city}
                <p>${fullAddress.province}, ${fullAddress.zip}</p>
                <p>${fullAddress.country}</p>
                <p><strong>Payment:</strong> Cash on Delivery</p>
                <p><strong>Total: ₱${total.toLocaleString()}</strong></p>
                <hr />
                <p>Thank you for shopping with us!</p>
                <!-- Message instead of Download Button -->
                <hr><p>Please take a screenshot of the receipt before you exit.</p>
            </div>
        `;
        
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = receiptHTML;
        document.body.appendChild(popup);
        
        // Close button functionality (Redirect to homepage)
        const closeButton = popup.querySelector('.close-btn');
        closeButton.addEventListener('click', () => {
            window.location.href = '/'; // Redirect to homepage (change this URL if needed)
        });
    });
});
