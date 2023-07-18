// Cart.js

// Function to add a product to the cart
function addToCart(productId) {
  // You can implement your own logic here to add the product to the cart.
  // For simplicity, let's assume we store the cart data in the local storage.

  // Get the product details from the selected product card
  const productTitle = document.querySelector(`#product${productId} .card-title`).innerText;
  const productPrice = parseFloat(document.querySelector(`#product${productId} .card-text`).innerText.replace('$', ''));

  // Create an object to represent the cart item
  const cartItem = {
    id: productId,
    title: productTitle,
    price: productPrice,
    quantity: 1,
  };

  // Check if the cart already exists in local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product already exists in the cart
  const existingItemIndex = cart.findIndex(item => item.id === productId);

  if (existingItemIndex !== -1) {
    // If the product already exists in the cart, increase its quantity
    cart[existingItemIndex].quantity++;
  } else {
    // If the product is new, add it to the cart
    cart.push(cartItem);
  }

  // Save the updated cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Redirect to the cart page
  window.location.href = 'Cart.html';
}

// You can also implement functions for updating cart items and removing cart items, if needed.
// For this example, let's assume those functions exist in the Cart.js file as well.
// They would update the cart data in the local storage and update the cart table on the Cart.html page.
// Note that the sample cart items in the Cart.html file are using different HTML structure IDs for demonstration purposes. Make sure to adjust them according to your actual implementation.

// Example function for updating cart item quantity
function updateCartItem(productId, quantity) {
  // ... Update cart item in local storage based on productId and quantity
  // ... Update the cart table on the Cart.html page
}

// Example function for removing a cart item
function removeCartItem(productId) {
  // ... Remove cart item from local storage based on productId
  // ... Update the cart table on the Cart.html page
}
function displayCartItems() {
  const cartItemsList = document.getElementById('cart-items-list');
  cartItemsList.innerHTML = ''; // Clear previous items

  // Get cart data from local storage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Loop through the cart items and populate the table
  cart.forEach((item, index) => {
    const { title, price, quantity } = item;
    const total = price * quantity;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${title}</td>
      <td>$${price.toFixed(2)}</td>
      <td>${quantity}</td>
      <td>$${total.toFixed(2)}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="removeCartItem(${index})">Remove</button>
      </td>
    `;

    cartItemsList.appendChild(row);
  });

  // Display the total price
  const totalContainer = document.createElement('div');
  totalContainer.classList.add('text-end');
  totalContainer.innerHTML = `<strong>Total: $${calculateTotal().toFixed(2)}</strong>`;
  document.querySelector('.container').appendChild(totalContainer);
}

// Function to calculate the total price of the cart items
function calculateTotal() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Function to remove a cart item
function removeCartItem(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems(); // Update the cart table
}

// Function to clear the cart
document.getElementById('clear-cart').addEventListener('click', () => {
  localStorage.removeItem('cart');
  displayCartItems(); // Update the cart table
});

// Function to handle checkout (you can implement your own logic here)
document.getElementById('checkout').addEventListener('click', () => {
  alert('Checkout functionality will be implemented later.');
});

// Display cart items when the page loads
displayCartItems();