const quantityControlDec = document.querySelectorAll('.product__quantity-control_dec');
const quantityControlInc = document.querySelectorAll('.product__quantity-control_inc');
const addButtons = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');
let count = 1;

const deleteButtons = document.querySelectorAll('.product__del');
const cartTitle = document.querySelector('.cart__title');
cartTitle.hidden = true;

quantityControlDec.forEach((btn) => btn.addEventListener('click', handlerDec));
quantityControlInc.forEach((btn) => btn.addEventListener('click', handlerInc));
addButtons.forEach((btn) => btn.addEventListener('click', handlerAdd));
deleteButtons.forEach((btn) => btn.addEventListener('click', handlerDelete));
    
function handlerDec(e) {
    let quantity = e.target.nextElementSibling;
    if (quantity.textContent >= 2) {
        quantity.textContent -= 1;
        count = Number(quantity.textContent);
    }
}

function handlerInc(e) {
    let quantity = e.target.previousElementSibling;
    quantity.textContent = Number(quantity.textContent) + 1;
    count = Number(quantity.textContent);
}

function handlerAdd(e) {
    cartTitle.hidden = false;
    let btn = e.target;

    let currentProduct = btn.previousElementSibling;
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
    let selectedProduct = addedProducts.some(item => item.dataset.id === product.dataset.id);

    if (addedProducts && selectedProduct) {
        productCart = addedProducts.find(item => item.dataset.id === product.dataset.id);
        let newCount = Number(productCart.lastElementChild.textContent) + Number(currentCount);
        productCart.lastElementChild.textContent = newCount;
        anime();
    }
    else {
        cart.appendChild(productCart);
        productCart.appendChild(productImage);
        productCart.appendChild(productQuantity);
    }

    count = 1;
    btn.previousElementSibling.querySelector('.product__quantity-value').textContent = count;

    function anime() {
        let locationImage = image.getBoundingClientRect();
        let left = locationImage.left;
        let top = locationImage.top;
        let locationProduct = productImage.getBoundingClientRect();
        let horiz = locationProduct.left - left;
        let vert = top - locationProduct.top;
        console.log(`vert: ${vert} and horiz: ${horiz}`);
        
        let step = 4;
        let stepHoriz = horiz / step;
        let stepVert = vert / step;
        
        let clone = image.cloneNode();
        image.parentElement.appendChild(clone);

        let countForInterval = 1;
        let id = setInterval(() => {
            left += stepHoriz;
            top -= stepVert;
            countForInterval +=1;
            clone.style = `position: absolute; left: ${left}px; top: ${top}px;`;
        }, 300);
        if(countForInterval === 3) {
            clearInterval(id);
            clone.remove();
        }
    }
}

function handlerDelete(e) {
    let product = e.target.closest('.product');
    let addedProducts = Array.from(document.querySelectorAll('.cart__product'));
    let selectedProduct = addedProducts.some(item => item.dataset.id === product.dataset.id);

    if (addedProducts && selectedProduct) {
        productCart = addedProducts.find(item => item.dataset.id === product.dataset.id);
        productCart.remove();
        addedProducts = Array.from(document.querySelectorAll('.cart__product'));
        if (addedProducts.length === 0) {  
            cartTitle.hidden = true;
        }
    }
    
}




