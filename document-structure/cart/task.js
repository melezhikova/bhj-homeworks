const quantityDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const quantityInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const value = Array.from(document.querySelectorAll(".product__quantity-value"));
const prodactNumber = Array.from(document.querySelectorAll(".product"));
const prodactImages = Array.from(document.querySelectorAll(".product__image"));
const addToBasket = Array.from(document.querySelectorAll(".product__add"));
const basket = document.querySelector(".cart__products");

for (let i = 0; i < quantityDec.length; i++) {
    let decButton = quantityDec[i];
    decButton.onclick = () => {
        let currentValue = value[i].textContent*1;
        if (currentValue === 1) {
            return;
        } else {
            value[i].textContent = currentValue - 1;
        } 
    }
}

for (let i = 0; i < quantityInc.length; i++) {
    let incButton = quantityInc[i];
    incButton.onclick = () => {
        let currentValue = value[i].textContent*1;
        value[i].textContent = currentValue + 1; 
    }
}

for (let i = 0; i < quantityInc.length; i++) {
    let addButton = addToBasket[i];
    addButton.onclick = () => {
        let currentValue = value[i].textContent*1;
        let articleNumber = prodactNumber[i].dataset.id;
        let image = prodactImages[i].getAttribute("src");

        let prodactsInBasket = Array.from(document.querySelectorAll(".cart__product"));
        let addBefore = prodactsInBasket.findIndex ((item) => 
            item.dataset.id === articleNumber);

        if (addBefore >= 0) {
            let productsInBasketCount = Array.from(document.querySelectorAll(".cart__product-count"));
            let basketCount = productsInBasketCount[addBefore].textContent*1;
            productsInBasketCount[addBefore].textContent = basketCount += currentValue;
        } else {
            basket.innerHTML += `
                <div class="cart__product" data-id="${articleNumber}">
                    <img class="cart__product-image" src="${image}">
                    <div class="cart__product-count">${currentValue}</div>
                    <div class="product__delete">Удалить из корзины</div>
                </div>
            `;
        }

        let removeButtons = Array.from(document.getElementsByClassName("product__delete"));
        let products = Array.from(document.querySelectorAll(".cart__product"));
        for (let i = 0; i < removeButtons.length; i++) {
            let button = removeButtons[i];
            button.onclick = () => {
                products[i].remove();
            }
        }
    }
}

