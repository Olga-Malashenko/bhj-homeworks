const loader = document.querySelector('#loader');
const items = document.querySelector('#items');

//let storedData = JSON.parse(localStorage.getItem('data'));
//let allStoredValutes;
//console.log(`verh: ${allStoredValutes}`);
//storedData = [...allStoredValutes];
//console.log(storedData);
let fromStorage = JSON.parse(localStorage.getItem('data'));;
//let storedData = fromStorage;

//let storedInfo = localStorage.getItem('storedAll');

//console.log(storedInfo);

document.addEventListener("DOMContentLoaded", () => {
    if (fromStorage) {
        console.log('есть');
        //console.log();
        console.log(fromStorage[3]);
        //for (let element of storedData) {
        //console.log(storedData[i].code);
        //};

        //console.log(storedData);
        // вывести из локалСтор данные
        // ...
    } else {
        console.log('запрос');
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {

            if (xhr.readyState === xhr.DONE) {
                loader.classList.remove('loader_active'); // а выше?

                let response = JSON.parse(xhr.responseText).response.Valute;

                let allStoredValutes = [];

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

                    let object = {
                        code: response[key].CharCode,
                        value: response[key].Value
                    }
                    //console.log(object);
                    //console.log(JSON.stringify(object));

                    //localStorage.setItem(key, JSON.stringify(object));

                    //let storedValute = JSON.parse(localStorage.getItem(key));
                    //console.log(storedValute);

                    allStoredValutes.push(object);
                }
                console.log(`allSumma: ${allStoredValutes}`);
                //let newObjectForMemory = JSON.stringify(allStoredValutes);
                localStorage.setItem('data', JSON.stringify(allStoredValutes));
                //let fromStorage = localStorage.getItem('data');
                
                console.log(`Memory: ${fromStorage}`);
                console.log(fromStorage[3]); //it's object
                console.log(Array.isArray(fromStorage)); //true
            }
        });

        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        xhr.send();
    }
})


