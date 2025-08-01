/*const sampleProducts = [
  { name: "Wooden Spoon", price: 500, image: "https://raw.githubusercontent.com/slide-t/essentialkitchengear/main/Image/cup-straw.jpg" },
  { name: "Plate Set", price: 1500, image: "https://raw.githubusercontent.com/slide-t/essentialkitchengear/main/Image/cup-straw.jpg" },
  { name: "Non-Stick Pan", price: 3500, image: "https://raw.githubusercontent.com/slide-t/essentialkitchengear/main/Image/pan.jpg" },
  { name: "Cooking Set", price: 10000, image: "https://raw.githubusercontent.com/slide-t/essentialkitchengear/main/Image/cooking-set.jpg" },
  { name: "Curtain Design", price: 4500, image: "https://raw.githubusercontent.com/slide-t/essentialkitchengear/main/Image/curtain.jpg" },
  { name: "Wall Art", price: 2000, image: "https://raw.githubusercontent.com/slide-t/essentialkitchengear/main/Image/wall-art.jpg" },
  { name: "Plastic Toy", price: 800, image: "https://raw.githubusercontent.com/slide-t/essentialkitchengear/main/Image/plastic-toy.jpg" },
  { name: "Electronic Toy", price: 3000, image: "https://raw.githubusercontent.com/slide-t/essentialkitchengear/main/Image/electronic-toy.jpg" }
];

const grid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPriceEl = document.getElementById("totalPrice");
const cartModal = document.getElementById("cart-modal");
const whatsappOrder = document.getElementById("whatsappOrder");

let cart = [];

function renderCards() {
  grid.innerHTML = "";
  sampleProducts.forEach((product, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>₦${product.price}</p>
      <button onclick="addToCart(${i})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function addToCart(index) {
  cart.push(sampleProducts[index]);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const div = document.createElement("div");
    div.textContent = `${item.name} - ₦${item.price}`;
    cartItems.appendChild(div);
  });

  cartCount.textContent = cart.length;
  totalPriceEl.textContent = `₦${total}`;

  // WhatsApp order link update
  const orderText = cart.map(p => `- ${p.name}: ₦${p.price}`).join("%0A");
  whatsappOrder.href = `https://wa.me/?text=I'm%20ordering:%0A${orderText}%0ATotal:%20₦${total}`;
}

function showCartModal() {
  cartModal.classList.toggle("active");
}

function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("open");
}

function toggleCategory(el) {
  el.classList.toggle("active");
}

// Handle category product filtering (if needed)
document.querySelectorAll(".sub-category a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    renderProducts(e.target.textContent.trim()); // define this function if using categories
    document.getElementById("sideMenu").classList.remove("open");
  });
});

renderCards();
*/






const sampleProducts = [
  { name: "Wooden Spoon", price: 500, image: "https://github.com/slide-t/essentialkitchengear/blob/main/Image/cup-straw.jpg" },
  { name: "Plate Set", price: 1500, image: "https://github.com/slide-t/essentialkitchengear/blob/main/Image/cup-straw.jpg" },
  { name: "Non-Stick Pan", price: 3500, image: "images/pan.jpg" },
  { name: "Cooking Set", price: 10000, image: "images/cooking-set.jpg" },
  { name: "Curtain Design", price: 4500, image: "images/curtain.jpg" },
  { name: "Wall Art", price: 2000, image: "images/wall-art.jpg" },
  { name: "Plastic Toy", price: 800, image: "images/plastic-toy.jpg" },
  { name: "Electronic Toy", price: 3000, image: "images/electronic-toy.jpg" }
];

const grid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPriceEl = document.getElementById("totalPrice");
const cartModal = document.getElementById("cart-modal");
const whatsappOrder = document.getElementById("whatsappOrder");

let cart = [];

function renderCards() {
  grid.innerHTML = "";
  sampleProducts.forEach((product, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>₦${product.price}</p>
      <button onclick="addToCart(${i})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function addToCart(index) {
  cart.push(sampleProducts[index]);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price;
    const div = document.createElement("div");
    div.textContent = `${item.name} - ₦${item.price}`;
    cartItems.appendChild(div);
  });
  cartCount.textContent = cart.length;
  totalPriceEl.textContent = total;
  whatsappOrder.href = `https://wa.me/?text=I'm%20ordering:%0A${cart.map(
    (p) => `- ${p.name}: ₦${p.price}`
  ).join("%0A")}%0ATotal: ₦${total}`;
}

function showCartModal() {
  cartModal.classList.toggle("active");
}
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("open");
}

function toggleCategory(el) {
  el.classList.toggle("active");
}

document.querySelectorAll(".sub-category a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    renderProducts(e.target.textContent.trim());
    document.getElementById("sideMenu").classList.remove("open");
  });
});



renderCards();
