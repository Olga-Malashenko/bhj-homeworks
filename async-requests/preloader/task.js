const loader = document.querySelector('#loader');
const items = document.querySelector('#items');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', ()=> {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');

        let response = JSON.parse(xhr.responseText).response.Valute;
        console.log(response);

        let array = Array.from(response);
        console.log(array);

        for (let i of response) {
            let item = document.createElement('div');
            items.appendChild(item);

            let code = document.createElement('div');
            div.classList.add('item__code');
            div.textContent = i.CharCode;

            let value = document.createElement('div');
            div.classList.add('item__value');
            div.textContent = i.Value;

            item.appendChild(code);
            item.appendChild(value);
        }
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();