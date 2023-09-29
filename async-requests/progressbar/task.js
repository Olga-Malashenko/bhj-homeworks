const form = document.querySelector('#form');
const progress = document.querySelector('#progress');

form.addEventListener('submit', ()=> {
    e.preventDfault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
    xhr.addEventListener('readystatechange', ()=> {
        if(xhr.readyState === 1) {
            progress.value = 0.2;
        }
        if(xhr.readyState === 2) {
            progress.value = 0.5;
        }
        if(xhr.readyState === 3) {
            progress.value = 0.75;
        }
        if(xhr.readyState === xhr.DONE) {
            progress.value = 1;
        }
    });
    const formData = new FormData(form);
});





