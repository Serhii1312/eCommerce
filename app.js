// Pop-open pop-close code
const openPopUp = document.querySelector('.open-pop');
const closePopUp = document.getElementById('pop-close');
const popUp = document.getElementById('pop-up');

openPopUp.addEventListener('click', function(e) {
  e.preventDefault()
  popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})


// Cart-open cart-close code 
const openCart = document.getElementById('cart-open');
const shoppingCart = document.getElementById('cart-shopping');
const closeCart = document.getElementById('cart-remove');

openCart.addEventListener('click', () => {
  shoppingCart.classList.add('active');
})

closeCart.addEventListener('click', () => {
  shoppingCart.classList.remove('active');
})

// Cart-count code
const bntMinus = document.querySelector('[data-action="minus"]');
const bntPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');



bntMinus.addEventListener('click', () => {
  if(parseInt(counter.innerText) > 1 ) {
    counter.innerText = --counter.innerText;      
  }
})  

bntPlus.addEventListener('click', () => {
  counter.innerText = ++counter.innerText;
})

// Counter for all products
window.addEventListener('click', (event) => {

  let counter;

  if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.cart-count-wrapper');
    counter = counterWrapper.querySelector('[data-counter]');
  }

  if(event.target.dataset.action === 'plus' ) {
    counter.innerText = ++counter.innerText;
  }

  if(event.target.dataset.action === 'minus' ) {
    const counterWrapper = event.target.closest('.cart-count-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');
     
    if(parseInt(counter.innerText) > 1 ) {
      counter.innerText = --counter.innerText;      
    } else if (event.target.closest('.cart-content-item') && parseInt(counter.innerText) === 1) {
      event.target.closest('.cart-content-item').remove();
    }
  }
})
 


// Add product to shopping cart code 
const cartContentWrapper = document.querySelector('.cart-content-wrapper');
//const productTitle = document.querySelector('.product-tittle-content');

window.addEventListener('click', function (event) {

  if(event.target.hasAttribute('data-cart')) {
   const product = event.target.closest('.product-tittle-content');
   
   
   const productInfo = {
    id: product.dataset.id,
    imgSrc: product.querySelector('.product-img').getAttribute('src'),
    title: product.querySelector('.bold-description').innerText,
    price: product.querySelector('.product-price').innerText,
   };
   
  //  const itemInCart = productTitle.querySelector(`[data-id="${productInfo.id}"]`) 
  //  console.log(itemInCart)

  //  if(itemInCart) {
  //   const counterEl = itemInCart.querySelector('[data-counter]');
  //   counterEl.innerText = parseInt(counterEl.id) + parseInt(productInfo.id)
  //  }

   const cartContentItem = `<div class="cart-content-item" data-id="${productInfo.id}"> 
                              <div class="cart-img-wrapper">
                                  <img src="${productInfo.imgSrc}"/>
                              </div>
                              <h2 class="cart-content-title">${productInfo.title}</h2>
                              <div class="cart-count-wrapper">
                                  <span class="count-button" data-action="plus">+</span>
                                  <p class="number-count" data-counter>1</p>
                                  <span class="count-button"data-action="minus">-</span>
                              </div>
                              <div class="cart-info">
                                  <span class="cart-price">${productInfo.price}</span>
                                  <p class="cart-remove">Remove</p>
                              </div> 
                            </div>`;

 

   cartContentWrapper.insertAdjacentHTML('beforeend', cartContentItem);
  }

});


// Adittion items in a shopping cart

function calcCartPrice() {
  const cartContenttItem = document.querySelectorAll('.cart-content-item');

  let totalPrice = 0;

  cartContenttItem.forEach(function (item) {
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.cart-price');
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  });

  console.log(totalPrice)
}
 

 
