const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Add product to your cart logic here
        alert('Product added to cart!');
    });
});
