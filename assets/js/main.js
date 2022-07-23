/*=============== SHOW MENU ===============*/
let navMenu = document.querySelector('.nav-menu');
/*===== MENU SHOW ====*/
document.querySelector('#menu-btn').onclick = () => {
  navMenu.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

/*=============== SHOW CARD ITEMS ===============*/
let cartItem = document.querySelector('.cart-items');

document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active');
  navMenu.classList.remove('active');
  searchForm.classList.remove('active');
}

/*=============== SHOW SEARCH ===============*/
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navMenu.classList.remove('active');
  cartItem.classList.remove('active');
}

window.onscroll = () => {
  navMenu.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}
