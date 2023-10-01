const loader = document.querySelector('#loader');
const items = document.querySelector('#items');

let storedData;
const xhr = new XMLHttpRequest();

if (storedData) {
    console.log('есть');
    // вывести из локалСтор данные
    // ...

    // получить новые и перезаписать textContent и localStorage

    xhr.addEventListener('readystatechange', ()=> {
        if (xhr.readyState === xhr.DONE) {
            let response = JSON.parse(xhr.responseText).response.Valute;

            for (let key in response) {
                
                code.textContent = response[key].CharCode;
                value.textContent = response[key].Value;
    
                let object = {
                    code: response[key].CharCode,
                    value: response[key].Value
                }
    
                localStorage.setItem(key, JSON.stringify(object));
                storedData = localStorage.getItem(key);
    
            }
        }
    });

} else {
    console.log('пусто');
    xhr.addEventListener('readystatechange', ()=> {
    
        if (xhr.readyState === xhr.DONE) {
            loader.classList.remove('loader_active');
    
            let response = JSON.parse(xhr.responseText).response.Valute;
    
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
    
                let object = {
                    code: response[key].CharCode,
                    value: response[key].Value
                }
    
                localStorage.setItem(key, JSON.stringify(object));
                storedData = localStorage.getItem(key);
    
                item.appendChild(code);
                item.appendChild(value);
                item.appendChild(currency);
            }
            console.log(`after: ${storedData}`);
        }
    });
}

//const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
