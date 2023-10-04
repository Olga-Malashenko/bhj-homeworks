const loader = document.querySelector('#loader');
const items = document.querySelector('#items');

let fromStorage = JSON.parse(localStorage.getItem('data'));

document.addEventListener("DOMContentLoaded", () => {
    if (fromStorage) {
        console.log('есть');
        createValuteList(fromStorage);
    } else {
        console.log('запрос');
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {

            if (xhr.readyState === xhr.DONE) {
                loader.classList.remove('loader_active'); // а выше?

                let response = JSON.parse(xhr.responseText).response.Valute;

                let allStoredValutes = [];

                createValuteList(response);

                for (let key in response) {
                    
                    let object = {
                        CharCode: response[key].CharCode,
                        Value: response[key].Value
                    }

                    allStoredValutes.push(object);
                }

                localStorage.setItem('data', JSON.stringify(allStoredValutes));
            }
        });

        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        xhr.send();
    }
})

function createValuteList(list) {
    for (let key in list) {
        let item = document.createElement('div');
        item.classList.add('item');
        items.appendChild(item);

        let code = document.createElement('div');
        code.classList.add('item__code');
        code.textContent = list[key].CharCode;
        item.appendChild(code);

        let value = document.createElement('div');
        value.classList.add('item__value');

        value.textContent = list[key].Value;
        item.appendChild(value);

        let currency = document.createElement('div');
        currency.classList.add('item__currency');
        currency.textContent = ' руб.';
        item.appendChild(currency);
    }
}


