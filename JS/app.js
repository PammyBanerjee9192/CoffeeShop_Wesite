let navbar = document.querySelector('.navbar');
let menu_btn = document.querySelector('#menu-btn');

menu_btn.addEventListener("click", () => {
  navbar.classList.toggle('active');
  cart_items.classList.remove('active');
  search_items.classList.remove('active');
});
let cart_btn=document.querySelector('#cart-btn');
let cart_items=document.querySelector('.cart-items-container');
cart_btn.addEventListener("click",()=>{
  cart_items.classList.toggle('active');
    navbar.classList.remove('active');
    search_items.classList.remove('active');
});
let search_btn=document.querySelector('#search-btn');
let search_items=document.querySelector('.search-form');
search_btn.addEventListener("click",()=>{
  search_items.classList.toggle('active');
  navbar.classList.remove('active');
  cart_items.classList.remove('active');

});
window.onscroll=()=>{
  navbar.classList.remove('active');
  cart_items.classList.remove('active');
  search_items.classList.remove('active');
}