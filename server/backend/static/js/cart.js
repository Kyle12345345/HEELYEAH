document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart");
  const bottomBar = document.getElementById("bottomBar");
  const totalAmountEl = document.getElementById("totalAmount");

  const dropdown = document.querySelector(".dropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  let userToggledSelectAll = false;
  let checkboxStates = {};

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

  function renderCart() {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      cartContainer.innerHTML = "";

      if (cartItems.length === 0) {
          bottomBar.style.display = "none";
          cartContainer.innerHTML = "<p>Your cart is empty.</p>";
          return;
      }

      bottomBar.style.display = "flex";

      cartItems.forEach((item, index) => {
          const quantity = item.quantity || 1;
          const priceNumber = parseFloat(item.price.replace(/[^\d.]/g, ""));
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
                  <small>${item.gender.toUpperCase()}</small>
                  <p><strong>Size:</strong> ${item.size}</p>
              </div>
              <div class="quantity">
                  <button class="minus">-</button>
                  <span>${quantity}</span>
                  <button class="plus">+</button>
              </div>
              <div class="price">
                  ${item.price}<br/>
              </div>
          `;

          const minusBtn = itemElement.querySelector(".minus");
          const plusBtn = itemElement.querySelector(".plus");

          minusBtn.addEventListener("click", () => {
              if (item.quantity > 1) {
                  cartItems[index].quantity -= 1;
              } else {
                  cartItems.splice(index, 1);
                  delete checkboxStates[index];
              }
              localStorage.setItem("cart", JSON.stringify(cartItems));
              renderCart();
          });

          plusBtn.addEventListener("click", () => {
              cartItems[index].quantity = (cartItems[index].quantity || 1) + 1;
              localStorage.setItem("cart", JSON.stringify(cartItems));
              renderCart();
          });

          cartContainer.appendChild(itemElement);
      });

      const selectAllCheckbox = document.getElementById("select-all");
      const itemCheckboxes = document.querySelectorAll(".item-checkbox");

      itemCheckboxes.forEach((checkbox) => {
          const index = checkbox.dataset.index;
          checkbox.addEventListener("change", () => {
              checkboxStates[index] = checkbox.checked;
              updateTotal();
              const allChecked = [...itemCheckboxes].every((cb) => cb.checked);
              if (selectAllCheckbox && !userToggledSelectAll) {
                  selectAllCheckbox.checked = allChecked;
              }
          });
      });

      if (selectAllCheckbox) {
          selectAllCheckbox.removeEventListener("change", selectAllCheckbox._listener || (() => {}));

          const listener = () => {
              userToggledSelectAll = true;
              itemCheckboxes.forEach((cb) => {
                  cb.checked = selectAllCheckbox.checked;
                  checkboxStates[cb.dataset.index] = cb.checked;
              });
              updateTotal();
          };

          selectAllCheckbox.addEventListener("change", listener);
          selectAllCheckbox._listener = listener;

          const allInitiallyChecked = [...itemCheckboxes].every((cb) => cb.checked);
          if (!userToggledSelectAll) {
              selectAllCheckbox.checked = allInitiallyChecked;
          }
      }

      updateTotal();
  }

  function updateTotal() {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      let total = 0;

      document.querySelectorAll(".item-checkbox").forEach((checkbox) => {
          if (checkbox.checked) {
              const index = parseInt(checkbox.dataset.index);
              const item = cartItems[index];
              const quantity = item.quantity || 1;
              const priceNumber = parseFloat(item.price.replace(/[^\d.]/g, ""));
              total += priceNumber * quantity;
          }
      });

      if (totalAmountEl) {
          totalAmountEl.innerHTML = `Total: ₱${total.toLocaleString()}`;
      }
  }

  renderCart();

  // Add Delete Selected functionality
  const deleteSelectedBtn = document.getElementById("delete-selected");

  if (deleteSelectedBtn) {
      deleteSelectedBtn.addEventListener("click", () => {
          let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
          const itemCheckboxes = document.querySelectorAll(".item-checkbox");

          // Filter out checked items (items to remove)
          const updatedCartItems = cartItems.filter((_, index) => {
              const checkbox = document.querySelector(`#checkbox-${index}`);
              return checkbox && !checkbox.checked;
          });

          // Update cart in localStorage with remaining items
          localStorage.setItem("cart", JSON.stringify(updatedCartItems));

          // Reset checkbox states
          checkboxStates = {};
          userToggledSelectAll = false;

          // Re-render cart after deletion
          renderCart();
      });
  }

  // Proceed to Checkout Button (inserted here)
  const proceedBtn = document.getElementById('proceed-to-checkout-btn');

  if (proceedBtn) {
      proceedBtn.addEventListener('click', () => {
          const checkboxes = document.querySelectorAll('.item-checkbox');
          const cartData = JSON.parse(localStorage.getItem('cart')) || [];

          const selectedProducts = [];

          checkboxes.forEach((checkbox, index) => {
              if (checkbox.checked) {
                  selectedProducts.push(cartData[index]);
              }
          });

          if (selectedProducts.length === 0) {
              alert("Please select at least one product to proceed to checkout!");
              return;
          }

          // Save only selected products temporarily
          localStorage.setItem('checkoutCart', JSON.stringify(selectedProducts));

          // Redirect to Checkout Page
          window.location.href = "/checkout"; // your checkout page link
      });
  }
});

