const loader = document.querySelector('#loader');
const items = document.querySelector('#items');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', ()=> {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');

        let response = JSON.parse(xhr.responseText).response.Valute;
        console.log(response);

        for (let key in response) {
            let item = document.createElement('div');
            item.classList.add('item');
            items.appendChild(item);

            let code = document.createElement('div');
            code.classList.add('item__code');
            code.textContent = response[key].CharCode;

            let value = document.createElement('div');
            value.classList.add('item__value');
            value.textContent = response[key].Value;

            let currency = document.createElement('div');
            currency.classList.add('item__currency');
            currency.textContent = ' руб.';

            item.appendChild(code);
            item.appendChild(value);
            item.appendChild(currency);
        }
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
