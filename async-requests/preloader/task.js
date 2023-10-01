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
            items.appendChild(item);
            console.log(response[key]);

            let code = document.createElement('div');
            code.classList.add('item__code');
            code.textContent = response[key].CharCode;

            let value = document.createElement('div');
            value.classList.add('item__value');
            value.textContent = response[key].Value;

            let currency = document.createElement('div');
            currency.classList.add('item__currency');
            currency.textContent = 'руб.';

            item.appendChild(code);
            item.appendChild(value);
            item.appendChild(currency);
        }
        

        //let array = Array.from(response);
        //console.log(array);

        //let responseJson = xhr.responseText;
        //let response = JSON.parse(responseJson);
        //console.log(responseJson);
        //console.log(response);
        //console.log(12);

        

        for (let i of response) {
            

            
        }
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

//let response = JSON.parse(xhr.responseText);
        //console.log(response.response.Valute);
        //console.log(response);
        //console.log(12);