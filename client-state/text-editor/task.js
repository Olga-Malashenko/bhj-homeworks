const editor = document.querySelector('#editor');
let storedContent = localStorage.getItem('content');

if (storedContent) {
    editor.value = storedContent;
}

editor.addEventListener('input', ()=> {
    localStorage.setItem('content', editor.value);
});
