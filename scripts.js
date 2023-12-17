const addToCartButtons = document.querySelectorAll('.product button');

// Define a product object constructor
function Product(name, image, price) {
  this.name = name;
  this.image = image;
  this.price = price;
}

// Initialize an empty cart array
let cart = [];

// Handle product addition to cart
function addToCart(product) {
  cart.push(product);
  updateCartUI(product); // Update cart UI on addition
  console.log(`Added product "${product.name}" to cart.`);
}

// Update cart UI based on added product
function updateCartUI(product) {
  // Implement logic to update cart UI, such as displaying confirmation message, updating badge, etc.
  // For example:
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.innerText = cart.length;
}

// Bind click event to all "Add to Cart" buttons
addToCartButtons.forEach(button => {
  const productElement = button.parentNode; // Assuming button is inside a product element
  const productName = productElement.querySelector('h3').textContent;
  const productImage = productElement.querySelector('img').src;
  const productPrice = parseFloat(productElement.querySelector('p').textContent.slice(7)); // Extract price from "Price: $" format
  const product = new Product(productName, productImage, productPrice);

  button.addEventListener('click', () => addToCart(product));
});

// Remove welcome alert (optional)
if (window.onload) {
  window.onload = null; // Disable existing welcome alert
}
