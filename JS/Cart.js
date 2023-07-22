// Product data
const products = [
  {
      id: 1,
      name: "Spectacles",
      price: 750,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrLHE6PXmfI9H7ULbUUXn0HdKFFV3LxsXgg&usqp=CAU",
      quantity: 0
  },
  {
    id: 2,
    name: "Backpak ",
    price: 900,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3g4JJ1BLoXv7sgpXC-M17knf3sj7d_nQ7HBlakoWdwHv5rWC7XSDVaFjIaA_XnsiYhY&usqp=CAU13",
    quantity: 0
  },
  {
      id: 3,
      name: "Watch",
      price: 500,
      image: "https://5.imimg.com/data5/GLADMIN/Default/2022/2/OS/JO/JW/81381771/omega-ladies-watch.png",
      quantity: 0
    },
    {
      id: 4,
      name: "Saree",
      price: 600,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmLdTSIphghhS_--YrhMGtud8rXM2yAhOmA&usqp=CAU",
      quantity: 0
    },
    {
      id: 5,
      name: "Wallet",
      price: 700,
      image: "https://images-static.nykaa.com/media/catalog/product/8/b/8be7953tk_wlt_w3_maroon_1_.jpg?tr=w-500,pr-true",
      quantity: 0
    },
    {
      id: 6,
      name: "Sneaker",
      price: 900,
      image: "https://5.imimg.com/data5/PS/VN/MY-53552215/moxxy-sneakers-shoes-white-shoe-women-fashion-brand-retro-sneaker-lady-autumn-winter-footwear.jpg",
      quantity: 0
    },
    {
        id: 7,
        name: "Handbag",
        price: 650,
        image: "https://rukminim2.flixcart.com/image/450/500/l4pxk7k0/hand-messenger-bag/m/r/a/women-hand-bag-stylish-black-color-for-women-girls-hand-bag-12-original-imagfk29hdgjvy68.jpeg?q=90&crop=false",
        quantity: 0
      },
      {
        id: 8,
        name: "Glass",
        price: 450,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqne2bX_z4pSzIEuXZmd8E-oqzy4g7waYXA&usqp=CAU",
        quantity: 0
      },
      {
        id: 9,
        name: "Glass",
        price: 500,
        image: "https://www.urbanmonkey.com/cdn/shop/products/airplane-mode-002-right-view_7856bfe8-cdc2-4c1e-a71a-f439f4bd8c92_1024x.jpg?v=1682318453",
        quantity: 0
      },
      {
        id: 10,
        name: "T-Shirt",
        price: 750,
        image: "https://www.snitch.co.in/cdn/shop/products/SNITCH-JUNE1399_1800x1800.jpg?v=1655450250",
        quantity: 0
       
      },
      {
        id: 11,
        name: "Sneakers",
        price: 700,
        image: "data:image/jpeg;base64,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",
        quantity: 0
      },
      {
        id: 12,
        name: "Hoodie",
        price: 700,
        image: "https://m.media-amazon.com/images/I/61YWB-llUbL._UY741_.jpg",
        quantity: 0
      },
      
  
];

// Smartwatches data
const smartwatches = [
  {
    id: 14,
    name: "Watch",
    price: 1200,
    image: "data:image/jpeg;base64,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",
    quantity: 0
  },
  {
    id: 15,
    name: "Wallet",
    price: 750,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gTwWRQfb3KRZbCFYOBpUL_33dBDNwNlTdg&usqp=CAU",
    quantity: 0
  },
  {
    id: 16,
    name: "Ethnic-Kurta",
    price: 990,
    image: "data:image/jpeg;base64,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",
    quantity: 0
  },
  {
    id: 14,
    name: "Hand-bag",
    price: 599,
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR0QM1PUlzvs1Emrz3F4ZcoA3GbKoozzuq4pDXZTk1B4sfQ8yos5qfw-IWjOQi8JvQH5gdkeramWzjK-SdiT_U7eBkcJZMM_6VLS1O3Le9OouWrT14UXVBtQQ&usqp=CAE",
    quantity: 0
  },
  {
    id: 18,
    name: "Perfume",
    price: 199,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkMy5oF3YFK9NpMeGgIgJbDB6Wiz6vTZrjA&usqp=CAU",
    quantity: 0
  },
  {
    id: 19,
    name: "Earing",
    price: 179,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/6/317451874/KC/NA/IO/4509493/earing-with-kanchain-golden-polish-500x500.jpg",
    quantity: 0
  },
  {
    id: 20,
    name: "Backpacks",
    price: 249,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/2/BF/NR/TT/68103635/2.jpg",
    quantity: 0
  },
  {
    id: 21,
    name: "Sandals",
    price: 299,
    image: "https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/viola-mules_17oct2022-0945449001666009538.jpg?noopt=true",
    quantity: 0
  }
  
];

// Cart data
let cartItems = [];

// Function to store cart items in localStorage
function storeCartItems() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Function to retrieve cart items from localStorage
function retrieveCartItems() {
  const storedCartItems = localStorage.getItem("cartItems");
  if (storedCartItems) {
      cartItems = JSON.parse(storedCartItems);
  } else {
      cartItems = [];
  }
}

// Function to render product cards
function renderProductCards() {
  const productList = document.getElementById("product-list");
  if (!productList) return;

  productList.innerHTML = "";

  const allProducts = [...products, ...smartwatches]; // Combine smartphones and smartwatches

  allProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
    card.innerHTML = `
      <div class="card">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h4 class="card-title">${product.name}</h4>
          <span class="card-text">₹${product.price}</span>
          <div class="d-grid gap-2">
            <button class="btn btn-dark add-to-cart-btn" data-product-id="${product.id}">Add to cart</button>
          </div>
        </div>
      </div>
    `;

    if (product instanceof Object && product.id >= 9 && product.id <= 16) {
      const smartwatchList = document.getElementById("smartwatch-list");
      if (smartwatchList) {
        smartwatchList.appendChild(card);
      }
    } else {
      productList.appendChild(card);
    }
  });

  // Add event listeners to the "Add to cart" buttons
  const addToCartButtons = document.getElementsByClassName("add-to-cart-btn");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addToCart);
  }
}

// Function to handle adding a product to the cart
function addToCart(event) {
  const productId = parseInt(event.target.getAttribute("data-product-id"));

  // Check if the product is already in the cart
  const existingCartItem = cartItems.find(item => item.id === productId);
  if (existingCartItem) {
      existingCartItem.quantity++;
  } else {
      const product = [...products, ...smartwatches].find(item => item.id === productId);
      cartItems.push({ ...product, quantity: 1 });
  }

  // Update the cart count and store the cart items in localStorage
  updateCartCount();
  storeCartItems();

  // Show notification
  showNotification("Item added to cart!");

  // Reset notification after 2 seconds
  setTimeout(() => {
    resetNotification();
  }, 2000);
}

// Function to remove a product from the cart
function removeFromCart(event) {
  const productId = parseInt(event.target.getAttribute("data-product-id"));
  cartItems = cartItems.filter(item => item.id !== productId);
  renderCartItems();
  updateTotalPrice();
  updateCartCount();

  // Store the cart items in localStorage or clear it if all items are removed
  if (cartItems.length > 0) {
      storeCartItems();
  } else {
      clearCart();
  }
}

// Function to clear the cart
function clearCart() {
  cartItems = [];
  renderCartItems();
  updateTotalPrice();
  updateCartCount();
  localStorage.removeItem("cartItems");
}

// Function to decrease the quantity of a cart item
function decreaseQuantity(event) {
  const productId = parseInt(event.target.getAttribute("data-product-id"));
  const cartItem = cartItems.find(item => item.id === productId);

  if (cartItem.quantity > 1) {
      cartItem.quantity--;
      renderCartItems();
      updateTotalPrice();
      storeCartItems(); // Store cart items after updating the quantity
  }
}

// Function to increase the quantity of a cart item
function increaseQuantity(event) {
  const productId = parseInt(event.target.getAttribute("data-product-id"));
  const cartItem = cartItems.find(item => item.id === productId);

  cartItem.quantity++;
  renderCartItems();
  updateTotalPrice();
  storeCartItems(); // Store cart items after updating the quantity
}

// Function to render cart items
function renderCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";

  cartItems.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("mb-3");
    cartItem.innerHTML = `
      <div class="card">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="${item.image}" class="img-fluid rounded-start" alt="${item.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">$${item.price}</p>
              <div class="d-flex align-items-center">
                <button class="btn btn-secondary decrease-quantity-btn" data-product-id="${item.id}">-</button>
                <span class="mx-2">${item.quantity}</span>
                <button class="btn btn-secondary increase-quantity-btn" data-product-id="${item.id}">+</button>
                <button class="btn btn-danger remove-from-cart-btn ms-auto" data-product-id="${item.id}">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  // Add event listeners to the quantity and remove buttons
  const decreaseQuantityButtons = document.getElementsByClassName("decrease-quantity-btn");
  const increaseQuantityButtons = document.getElementsByClassName("increase-quantity-btn");
  const removeFromCartButtons = document.getElementsByClassName("remove-from-cart-btn");

  for (let i = 0; i < decreaseQuantityButtons.length; i++) {
    decreaseQuantityButtons[i].addEventListener("click", decreaseQuantity);
    increaseQuantityButtons[i].addEventListener("click", increaseQuantity);
    removeFromCartButtons[i].addEventListener("click", removeFromCart);
  }

  updateTotalPrice();
  updateCartCount();
}

// Function to update the cart count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (!cartCount) return;

  cartCount.textContent = cartItems.length;

  const navLink = document.querySelector(".nav-link");
  if (cartItems.length > 0) {
    navLink.classList.add("has-count");
  } else {
    navLink.classList.remove("has-count");
  }

  storeCartItems();
}

// Function to update the total price
function updateTotalPrice() {
  const totalPriceElement = document.getElementById("total-price");
  if (!totalPriceElement) return;

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to handle checkout button click
function checkout() {
  // Check if there are items in the cart
  if (cartItems && cartItems.length > 0) {
    alert("Order placed successfully!");
  } else {
    alert("No items found in the cart. Please add items to your cart before proceeding to checkout.");
  }
}

// Function to show notification
function showNotification(message) {
  const notification = document.getElementById("notification");
  if (!notification) return;

  notification.textContent = message;
  notification.style.display = "block";
}

// Function to reset notification
function resetNotification() {
  const notification = document.getElementById("notification");
  if (!notification) return;

  notification.textContent = "";
  notification.style.display = "none";
}

// Function to render cart items on page load
function renderCartItemsOnLoad() {
  retrieveCartItems();
  renderCartItems();
  updateTotalPrice();
  updateCartCount();

  if (cartItems.length === 0) {
    localStorage.removeItem("cartItems");
  }
}

// Call the necessary functions to initialize the page
document.addEventListener("DOMContentLoaded", function() {
  renderProductCards();
  renderCartItemsOnLoad();
});