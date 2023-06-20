const quantityControlDec = document.querySelectorAll('.product__quantity-control_dec');
const quantityControlInc = document.querySelectorAll('.product__quantity-control_inc');
const addButtons = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');
let count = 1;

for (let btn of quantityControlDec) {
    btn.addEventListener('click', (e) => {
        let quantity = btn.nextElementSibling;
        if (quantity.textContent >= 2) {
            quantity.textContent -= 1;
            count = Number(quantity.textContent);
        }
    })
}

for (let btn of quantityControlInc) {
    btn.addEventListener('click', (e) => {
        let quantity = btn.previousElementSibling;
        quantity.textContent = Number(quantity.textContent) + 1;
        count = Number(quantity.textContent);
    })
}



for (let btn of addButtons) {
    btn.addEventListener('click', (e) => {
        let currentProduct = e.target.previousElementSibling;
        let currentCount = currentProduct.querySelector('.product__quantity-value').textContent;

        let product = btn.closest('.product');
        let productCart = document.createElement('div');
        productCart.classList.add('cart__product');
        productCart.dataset.id = product.dataset.id;

        let image = btn.closest('.product__controls').previousElementSibling;
        let productImage = document.createElement('img');
        productImage.classList.add('cart__product-image');
        productImage.src = image.src;

        let productQuantity = document.createElement('div');
        productQuantity.classList.add('cart__product-count');
        productQuantity.textContent = count;
        
       let addedProducts = Array.from(document.querySelectorAll('.cart__product'));


        if (addedProducts && addedProducts.some(item => item.dataset.id === product.dataset.id)) {
            productCart = addedProducts.find(item => item.dataset.id === product.dataset.id);
            let newCount = Number(productCart.lastElementChild.textContent) + Number(currentCount);
            productCart.lastElementChild.textContent = newCount;
        }
        else {
            cart.appendChild(productCart);
            productCart.appendChild(productImage);
            productCart.appendChild(productQuantity);
        }
        
        count = 1;
    })
}



