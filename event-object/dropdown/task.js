const btn = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
//const values = document.querySelectorAll('.dropdown__item');

btn.addEventListener('click', () => {
    list.classList.add('dropdown__list_active');
});

list.addEventListener('click', (e) => {
    e.preventDefault();
    list.classList.remove('dropdown__list_active');
    btn.textContent = e.target.textContent;
});