// Declaring the variable from the DOM

let searchForm = document.querySelector(".search-form");
const loginForm = document.querySelector(".login-form");
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartProducts = document.querySelector(".shopping-cart-products");
const checkoutCartProducts = document.querySelector(".checkout-cart-products");
const navBar = document.querySelector(".navbar");
const addToCart = document.querySelectorAll(".addToCart");
const total = document.querySelector(".total");
const totalPrice = document.querySelector(".total-price");

const swiperWrapper = document.querySelector(".swiper-wrapper");
const categories = document.querySelector(".categories");
const emptyWord = document.querySelector(".empty");

// cart Array

// Toggle for shopping-cart
document.getElementById("cart-btn").onmouseover = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  navBar.classList.remove("active");
  loginForm.classList.remove("active");
};

// Toggle for Login/Sign Up Users
document.getElementById("login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navBar.classList.remove("active");
};

// Toggle for search button
document.getElementById("search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  navBar.classList.remove("active");
  loginForm.classList.remove("active");
};
// Toggle for menu bars
document.getElementById("menu-btn").onclick = () => {
  navBar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};
window.onscroll = () => {
  searchForm.classList.remove("active");
  // shoppingCart.classList.remove("active");
  navBar.classList.remove("active");
  loginForm.classList.remove("active");
};

// Products Section

// Cart Array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// Add to Cart
function addtoCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    let item = data.find((content) => content.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
    updateCart();
  }
}

// Update Cart
function updateCart() {
  renderCartItems();
  renderSubTotal();

  // Save cart to local Storage
  localStorage.setItem("CART", JSON.stringify(cart));
}
// Calculate and render subtotal
function renderSubTotal() {
  const checkoutContainer = document.querySelector(".checkout-container");
  const totalPrice1 = checkoutContainer.querySelector(".total-price");
  let totalPrice = 0,
    totalItems = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  totalPrice1.innerHTML = `Total: $${totalPrice.toFixed(
    2
  )} - Items: ${totalItems} `;
  total.innerHTML = `Total: $${totalPrice.toFixed(2)} - Items: ${totalItems} `;
}

// Render Cart items
function renderCartItems() {
  shoppingCartProducts.innerHTML = ""; // clear cart element
  checkoutCartProducts.innerHTML = "";
  cart.forEach((item) => {
    // Render shopping cart products
    shoppingCartProducts.innerHTML += `
    <div class="box">
    <i class="fas fa-trash" onclick="removeItemFromCart(${item.id})"></i>
    <img src="/${item.img}" alt="earphones">
    <div class="content">
        <h3>${item.name}</h3>
        <span class="price">$${item.price}</span>
        <span class="quantity">Qty: ${item.numberOfUnits}</span>
        <div class="plus-minus-icons">
        <i class="fa-solid fa-plus" onclick="changeNumberOfUnits('plus', ${item.id})"></i>
        <i class="fa-solid fa-minus" onclick="changeNumberOfUnits('minus', ${item.id})"></i>
        </div>
    </div>
    </div>

    `;
    // Removes Empty word
    emptyWord.classList.add("remove");
    // Render Checkout product
    checkoutCartProducts.innerHTML += `
    <div class="box">
    <i class="fas fa-trash" onclick="removeItemFromCart(${item.id})"></i>
    <img src="/${item.img}" alt="earphones">
    <div class="content">
        <h3>${item.name}</h3>
        <span class="price">$${item.price}</span>
        <span class="quantity">Qty: ${item.numberOfUnits}</span>
        <div class="plus-minus-icons">
        <i class="fa-solid fa-plus" onclick="changeNumberOfUnits('plus', ${item.id})"></i>
        <i class="fa-solid fa-minus" onclick="changeNumberOfUnits('minus', ${item.id})"></i>
         </div>
    </div>
    </div>
    `;
  });
}
// Remove Item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.inStock) {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}
