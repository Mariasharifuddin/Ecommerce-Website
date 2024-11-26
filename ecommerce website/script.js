let cartCount = 0;
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountElement = document.getElementById('cart-count');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
    });
});
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});