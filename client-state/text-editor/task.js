const editor = document.querySelector('#editor');
const card = document.querySelector('.card');
let button = document.querySelector('.button__clear');

button.addEventListener('click', () => {
    editor.value = '';
    button.classList.remove('button__clear_active');
});

let storedContent = localStorage.getItem('content');

if (storedContent) {
    editor.value = storedContent;
    button.classList.add('button__clear_active');
}

editor.addEventListener('input', () => {
    if (editor.value && editor.value !=='') {
        button.classList.add('button__clear_active');
    } else {
        button.classList.remove('button__clear_active');
    }
    localStorage.setItem('content', editor.value);
});

