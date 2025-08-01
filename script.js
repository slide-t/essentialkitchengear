

    const products = [
      { name: "Stainless Spoon Set", price: 1500, category: "Kitchen Utensils", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtkRt76rV9PPmX-WcsWoVzfqCwjN5Ry1XhxcMp-rPx8tAYPBEk4ziugtOMNmVHxFO-y0derZUZRcFQ5J5eTrqRvvWZUcO5zJfpotWLTxxFHNBBI2WDUn8jPeS_ZnknDSITfb7SCgfrk82WW6L9iyLS-9H5hYkZfm9EQDAfcJZLn_Y5Vpx9VCsiKgjBp_M/s320/1000049050.jpg" },
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
  
  let sliderIndex = 0;

function updateSliderCards() {
  const productCards = Array.from(document.querySelectorAll(".product-card"));
  if (!productCards.length) return;

  // Sort by data-added (timestamp)
  const sorted = productCards
    .filter(card => card.dataset.added)
    .sort((a, b) => b.dataset.added - a.dataset.added)
    .slice(0, 4);

  const slider = document.getElementById("productSlider");
  slider.innerHTML = ""; // clear previous

  sorted.forEach((card) => {
    const title = card.querySelector("h4")?.innerText || "No Title";
    const imgSrc = card.querySelector("img")?.src || "";

    const div = document.createElement("div");
    div.className = "slider-card";
    div.innerHTML = `
      <img src="${imgSrc}" alt="${title}">
      <h4>${title}</h4>
    `;
    slider.appendChild(div);
  });
}

function autoSlide() {
  const slider = document.getElementById("productSlider");
  const totalSlides = slider.children.length;

  if (totalSlides <= 1) return;

  sliderIndex = (sliderIndex + 1) % totalSlides;
  slider.style.transform = `translateX(-${sliderIndex * 25}%)`;
}

// Start sliding every 3 seconds
setInterval(autoSlide, 3000);

// Monitor product changes every 5 seconds
setInterval(updateSliderCards, 5000);

// Initial trigger
document.addEventListener("DOMContentLoaded", updateSliderCards);
