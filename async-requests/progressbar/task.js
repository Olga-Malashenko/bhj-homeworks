const form = document.querySelector('#form');
const progress = document.querySelector('#progress');

form.addEventListener('submit', ()=> {
    e.preventDfault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    
    xhr.upload.addEventListener('progress', (e)=> {
        progress.value = e.loaded;
    });
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
    
});
