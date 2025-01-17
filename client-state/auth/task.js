const signin = document.querySelector('#signin');
const form = document.querySelector('#signin__form');
const login = form.querySelector('[name="login"]');
const password = form.querySelector('[name="password"]');
const btn = document.querySelector('#signin__btn');
const wellcome = document.querySelector('#welcome');
const userID = wellcome.querySelector('#user_id');
const logout = document.querySelector('#logout__btn');

let storedUser = localStorage.getItem('user');
if (storedUser) {
    wellcomeActive();
}

btn.addEventListener('click', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        if (!login.value || !password.value) {
            alert('Заполните форму');
            form.reset();
        } else if (login.value && password.value) {
            formData.append(login.value, password.value);
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';

            xhr.addEventListener('load', () => {
                    if (response.success) {
                        localStorage.setItem('user', response.user_id);
                        wellcomeActive();
                    } else if (!response.success) {
                        alert('Неверный логин/пароль');
                        form.reset();
                    }
            });

            xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
            xhr.send(formData);
        }
});

logout.addEventListener('click', ()=> {
    localStorage.removeItem('user');
    wellcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
    form.reset();
})

function wellcomeActive() {
    userID.textContent = localStorage.getItem('user');
    wellcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
}
