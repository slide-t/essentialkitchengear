

    const products = [
      { name: "Stainless Spoon Set", price: 1500, category: "Kitchen Utensils", img: "https://via.placeholder.com/200" },
      { name: "Ceramic Plate Set", price: 3500, category: "Kitchen Utensils", img: "https://via.placeholder.com/200" },
      { name: "Non-stick Pan", price: 5000, category: "Kitchen Utensils", img: "https://via.placeholder.com/200" },
      { name: "Curtain", price: 5500, category: "Interior Decor", img: "https://via.placeholder.com/200" },
      { name: "RC Toy Car", price: 8000, category: "Toys", img: "https://via.placeholder.com/200" },
      { name: "Chef Knife Set", price: 4200, category: "Kitchen Utensils", img: "https://via.placeholder.com/200" }
    ];

    const cart = [];

    function toggleMenu() {
      document.getElementById('sideMenu').classList.toggle('active');
    }

    function toggleCategory(el) {
      const next = el.nextElementSibling;
      next.style.display = next.style.display === 'block' ? 'none' : 'block';
    }

    function renderProducts() {
      const grid = document.getElementById("productGrid");
      grid.innerHTML = "";
      products.forEach((prod, i) => {
        grid.innerHTML += `
          <div class="card">
            <img src="${prod.img}" alt="${prod.name}">
            <div class="info">
              <h4>${prod.name}</h4>
              <p>₦${prod.price}</p>
            </div>
            <div class="add-btn" onclick="addToCart(${i}, this)">Add to Cart</div>
            <div class="checkout-btn" onclick="showCartModal()">Checkout</div>
          </div>
        `;
      });
    }

    function addToCart(index, btn) {
      cart.push(products[index]);
      document.getElementById('cartCount').innerText = cart.length;
      btn.nextElementSibling.style.display = 'block';
    }

    function showCartModal() {
      const list = document.getElementById("cartItems");
      const total = cart.reduce((acc, item) => acc + item.price, 0);
      list.innerHTML = cart.map(item => `<p>${item.name} - ₦${item.price}</p>`).join('');
      document.getElementById("totalPrice").innerText = total;
      document.getElementById("whatsappOrder").href = `https://wa.me/234XXXXXXXXXX?text=I want to order:\n${cart.map(item => item.name + ' - ₦' + item.price).join('\n')}\nTotal: ₦${total}`;
      document.getElementById("cart-modal").style.display = "flex";
    }

    document.getElementById("search").addEventListener("input", function() {
      const keyword = this.value.toLowerCase();
      const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
      const grid = document.getElementById("productGrid");
      grid.innerHTML = "";
      filtered.forEach((prod, i) => {
        grid.innerHTML += `
          <div class="card">
            <img src="${prod.img}" alt="${prod.name}">
            <div class="info">
              <h4>${prod.name}</h4>
              <p>₦${prod.price}</p>
            </div>
            <div class="add-btn" onclick="addToCart(${i}, this)">Add to Cart</div>
            <div class="checkout-btn" onclick="showCartModal()">Checkout</div>
          </div>
        `;
      });
    });

    renderProducts();

    window.addEventListener("scroll", () => {
      document.querySelector(".scroll-top").style.display = window.scrollY > 100 ? "block" : "none";
    });
  
  
