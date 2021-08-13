const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        loader.classList.remove('loader_active');
        let currencies = JSON.parse(xhr.response).response.Valute;
        
        for (let item in currencies) {
            let itemCode = currencies[item].CharCode;
            let itemValue = currencies[item].Value;
            items.innerHTML += `
            <div class="item">
                <div class="item__code">
                    ${itemCode}
                </div>
                <div class="item__value">
                    ${itemValue}
                </div>
                <div class="item__currency">
                    руб.
            </div>
            `;
        }
    }
})




