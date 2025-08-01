const products = [
  { name: "Stainless Spoon Set", price: 1500, category: "Kitchen Utensils", img: "images/spoon.jpg" },
  { name: "Ceramic Plate Set", price: 3500, category: "Kitchen Utensils", img: "images/plate.jpg" },
  { name: "Non-stick Pan", price: 5000, category: "Kitchen Utensils", img: "images/pan.jpg" },
  { name: "Curtain", price: 5500, category: "Interior Decor", img: "images/curtain.jpg" },
  { name: "RC Toy Car", price: 8000, category: "Toys", img: "images/toycar.jpg" },
  { name: "Chef Knife Set", price: 4200, category: "Kitchen Utensils", img: "images/knife.jpg" },
  { name: "Snuf Cup", price: 1200, category: "Kitchen Utensils", img: "images/snufcup.jpg" }
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
    const timestamp = Date.now() - i * 60000; // fake varying time
    grid.innerHTML += `
      <div class="card product-card" data-added="${timestamp}">
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

  updateSliderCards();
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

document.getElementById("search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  filtered.forEach((prod, i) => {
    const timestamp = Date.now() - i * 60000;
    grid.innerHTML += `
      <div class="card product-card" data-added="${timestamp}">
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

  updateSliderCards();
});

function updateSliderCards() {
  const productCards = Array.from(document.querySelectorAll(".product-card"));
  if (!productCards.length) return;

  const sorted = productCards
    .filter(card => card.dataset.added)
    .sort((a, b) => b.dataset.added - a.dataset.added)
    .slice(0, 4);

  const slider = document.getElementById("productSlider");
  if (!slider) return;

  slider.innerHTML = ""; // clear previous

  sorted.forEach(card => {
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

// Run slider update every 3 seconds
setInterval(updateSliderCards, 3000);

renderProducts();

window.addEventListener("scroll", () => {
  document.querySelector(".scroll-top").style.display = window.scrollY > 100 ? "block" : "none";
});
