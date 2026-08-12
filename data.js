

let search_bar = document.querySelector('#search_bar');
let search_box = document.querySelector('.search_box');
let shop = document.querySelector('#shop_cart');
let shopcart = document.querySelector('.shopping_cart');
let menubar = document.querySelector('#menu_bar');
let mynav = document.querySelector('.navbar' );






 


search_bar.onclick = () =>{
	search_box.classlist.toggle('active')
}
shop.onclick = () =>{
	shopcart.classlist.toggle('active');
} 
menubar.onclick = () =>{
	mynav.classlist.toggle('active')

}