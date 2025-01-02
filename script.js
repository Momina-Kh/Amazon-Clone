const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const cartCount = document.createElement('span');
const cartIcon = document.querySelector('.cart-icon');
const cartText = document.querySelector('.cart p');
const backToTop = document.querySelector('.footer-title');

cartCount.classList.add('cart-count');
cartCount.textContent = '0';
cartIcon.parentNode.appendChild(cartCount);

let cartItems = 0;


searchIcon.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
    searchInput.value = ''; 
  } else {
    alert('Please enter a search term.');
  }
});


cartIcon.addEventListener('click', () => {
  cartItems++;
  cartCount.textContent = cartItems;
  cartText.textContent = `Cart (${cartItems})`;
  alert(`Added an item to the cart. Total items: ${cartItems}`);
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const navLinks = document.querySelectorAll('.links a');
navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#febd68';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#fff';
  });
});


const shopNowButtons = document.querySelectorAll('.shop-link a');
shopNowButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Redirecting to the shop now page.');
  });
});

