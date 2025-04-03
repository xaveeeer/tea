let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;

    // Update the cart display
    const cartList = document.getElementById('cart-list');
    const newItem = document.createElement('li');
    newItem.textContent = `${name} - $${price.toFixed(2)}`;
    cartList.appendChild(newItem);

    // Update the total price
    document.getElementById('total-price').textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Proceeding to checkout.");
        // You can add your checkout logic here.
    }
}

// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    // You can replace this with real submission logic (e.g., sending data to a server)
    alert(`Thank you for subscribing, ${email}!`);

    // Clear the form
    document.getElementById('newsletter-form').reset();
});

// Comment Form Submission
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // You can replace this with real submission logic (e.g., sending data to a server)
    alert(`Thank you, ${name}! Your comment has been submitted.`);

    // Clear the form
    document.getElementById('comment-form').reset();
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can replace this with real submission logic (e.g., sending data to a server)
    alert(`Thank you for reaching out, ${name}! We will get back to you at ${email} soon.`);

    // Clear the form after submission
    document.getElementById('contact-form').reset();
});
