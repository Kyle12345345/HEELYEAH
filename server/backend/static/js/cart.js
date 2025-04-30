document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart");
  const bottomBar = document.getElementById("bottomBar");
  const totalAmountEl = document.getElementById("totalAmount");
  const deleteSelectedBtn = document.getElementById("delete-selected");
  const selectAllCheckbox = document.getElementById("select-all");

  let checkboxStates = {};

  // Check if the user is logged in by calling Flask's /check-login route
  async function isUserLoggedIn() {
    try {
      const response = await fetch('/check-login', {
        method: 'GET',
        credentials: 'same-origin'  // Ensures cookies/session are sent with the request
      });

      const data = await response.json();

      return data.loggedIn; // Returns true if logged in, false otherwise
    } catch (error) {
      console.error("Error checking login status:", error);
      return false;  // Default to false if there is an error
    }
  }

  // Update Cart Count
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.querySelector(".cart-count");
    if (cartCount) {
      const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      cartCount.textContent = totalQty;
    }
  }

  // Render Cart
  function renderCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartContainer.innerHTML = "";

    if (cartItems.length === 0) {
      bottomBar.style.display = "none";
      cartContainer.innerHTML = "<p class='empty-cart'>Your cart is empty.</p>";
      return;
    }

    bottomBar.style.display = "flex";

    cartItems.forEach((item, index) => {
      const quantity = item.quantity || 1;
      const priceNumber = parseFloat(item.price.toString().replace(/[^\d.]/g, ""));
      const subtotal = priceNumber * quantity;

      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");

      const itemId = `checkbox-${index}`;
      const isChecked = checkboxStates[index] !== undefined ? checkboxStates[index] : false;

      itemElement.innerHTML = `
        <input type="checkbox" class="item-checkbox" id="${itemId}" data-index="${index}" ${isChecked ? "checked" : ""} />
        <img src="${item.img}" alt="${item.title}" />
        <div class="details">
          <h2>${item.brand.toUpperCase()}</h2>
          <p>${item.title}</p>
          <p><strong>Size:</strong> ${item.size}</p>
        </div>
        <div class="quantity">
          <button class="minus">-</button>
          <span>${quantity}</span>
          <button class="plus">+</button>
        </div>
        <div class="price">₱${subtotal.toLocaleString()}</div>
      `;

      const minusBtn = itemElement.querySelector(".minus");
      const plusBtn = itemElement.querySelector(".plus");

      minusBtn.addEventListener("click", () => {
        if (cartItems[index].quantity > 1) {
          cartItems[index].quantity -= 1;
        } else {
          cartItems.splice(index, 1);
          delete checkboxStates[index];
        }
        localStorage.setItem("cart", JSON.stringify(cartItems));
        renderCart();
      });

      plusBtn.addEventListener("click", () => {
        cartItems[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cartItems));
        renderCart();
      });

      cartContainer.appendChild(itemElement);
    });

    setupCheckboxEvents();
    updateTotal();
  }

  // Setup Checkbox Events
  function setupCheckboxEvents() {
    const itemCheckboxes = document.querySelectorAll(".item-checkbox");

    itemCheckboxes.forEach((checkbox) => {
      const index = checkbox.dataset.index;
      checkbox.addEventListener("change", () => {
        checkboxStates[index] = checkbox.checked;
        updateTotal();
        checkAllSelected();
      });
    });

    if (selectAllCheckbox) {
      selectAllCheckbox.removeEventListener("change", selectAllCheckbox._listener || (() => {}));

      const listener = () => {
        itemCheckboxes.forEach((cb) => {
          cb.checked = selectAllCheckbox.checked;
          checkboxStates[cb.dataset.index] = cb.checked;
        });
        updateTotal();
      };

      selectAllCheckbox.addEventListener("change", listener);
      selectAllCheckbox._listener = listener;

      checkAllSelected();
    }
  }

  // Check if All Items are Selected
  function checkAllSelected() {
    const itemCheckboxes = document.querySelectorAll(".item-checkbox");
    if (selectAllCheckbox) {
      selectAllCheckbox.checked = [...itemCheckboxes].every(cb => cb.checked);
    }
  }

  // Update Total Amount
  function updateTotal() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    document.querySelectorAll(".item-checkbox").forEach((checkbox) => {
      if (checkbox.checked) {
        const index = parseInt(checkbox.dataset.index);
        const item = cartItems[index];
        const quantity = item.quantity || 1;
        const priceNumber = parseFloat(item.price.toString().replace(/[^\d.]/g, ""));
        total += priceNumber * quantity;
      }
    });

    if (totalAmountEl) {
      totalAmountEl.innerHTML = `Total: ₱${total.toLocaleString()}`;
    }
  }

  // Delete Selected Items
  if (deleteSelectedBtn) {
    deleteSelectedBtn.addEventListener("click", () => {
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const itemCheckboxes = document.querySelectorAll(".item-checkbox");

      // Filter out only the checked (selected) items to remove them
      const updatedCartItems = cartItems.filter((_, index) => {
        const checkbox = document.querySelector(`#checkbox-${index}`);
        return checkbox && !checkbox.checked;  // Keep only unchecked items
      });

      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      checkboxStates = {};  // Reset checkbox states
      renderCart();
    });
  }

  // Checkout Button
  const checkoutBtn = document.querySelector(".checkout");

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", async () => {
      const loggedIn = await isUserLoggedIn();

      if (!loggedIn) {
        alert("You must be logged in to proceed to checkout!");
        window.location.href = "/login";
        return;
      } else {
        window.location.href = "/checkout";
      }

      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const selectedItems = [];

      // Collect only the selected items
      document.querySelectorAll(".item-checkbox").forEach((checkbox) => {
        if (checkbox.checked) {
          const index = parseInt(checkbox.dataset.index);
          selectedItems.push(cartItems[index]);
        }
      });

      if (selectedItems.length === 0) {
        alert("Please select at least one product before proceeding to checkout!");
        return;
      }

      // Store the selected items in the checkoutCart
      localStorage.setItem("checkoutCart", JSON.stringify(selectedItems));

      // Filter out only the unchecked (unselected) items to stay in the cart
      const updatedCartItems = cartItems.filter((_, index) => {
        const checkbox = document.querySelector(`#checkbox-${index}`);
        return checkbox && !checkbox.checked;  // Keep only the unchecked items
      });

      // Update the cart in localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));

      // Redirect to checkout page
      window.location.href = "/checkout";
    });
  }

  renderCart(); 
});
