document.addEventListener("DOMContentLoaded", () => {
    const menFilter = document.getElementById("men-filter");
    const womenFilter = document.getElementById("women-filter");
  
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartCount = document.querySelector(".cart-count");
      if (cartCount) {
        const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartCount.textContent = totalQty;
      }
    }
  
    function filterProducts() {
      const products = document.querySelectorAll(".product");
      products.forEach(product => {
        const gender = product.getAttribute("data-gender").toLowerCase();
        let show = true;
        if (menFilter.checked && gender !== "men") show = false;
        if (womenFilter.checked && gender !== "women") show = false;
        if (!menFilter.checked && !womenFilter.checked) show = true;
  
        product.style.display = show ? "block" : "none";
      });
    }
  
    menFilter.addEventListener("change", filterProducts);
    womenFilter.addEventListener("change", filterProducts);
  
    document.querySelectorAll(".add-btn").forEach(button => {
      button.addEventListener("click", () => {
        const parent = button.closest(".product");
        const title = parent.querySelector("h3").innerText;
        const price = parent.querySelector(".price").innerText;
        const imgSrc = parent.querySelector("img").getAttribute("src");
        const brand = "Nike";  // static here, you can make dynamic if needed
        const sizeSelect = parent.querySelector(".size-dropdown");
        const selectedSize = sizeSelect.value;
  
        if (!selectedSize) {
          alert("Please select a size before adding to cart.");
          return;
        }
  
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find(item => item.title === title && item.size === selectedSize);
  
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({
            brand: brand,
            title: title,
            price: price,
            img: imgSrc.startsWith("/") ? imgSrc.substring(1) : imgSrc, // Remove starting slash if it exists
            size: selectedSize,
            quantity: 1
          });
        }
  
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert("Product added to cart!");
      });
    });
  
    updateCartCount();
    filterProducts();
  });
  