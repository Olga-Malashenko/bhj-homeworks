const quantityControlDec = document.querySelectorAll('.product__quantity-control_dec');
const quantityControlInc = document.querySelectorAll('.product__quantity-control_inc');
const addButtons = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');
let count = 1;

for (let btn of addButtons) {
    btn.addEventListener('click', (e) => {
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
        count = 1;
        console.log( count, productQuantity, productImage) ;

        cart.appendChild(productCart);
        productCart.appendChild(productImage);
        productCart.appendChild(productQuantity);
    })
}

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

