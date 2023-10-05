const signin = document.querySelector('#signin');
const form = document.querySelector('#signin__form');
const login = form.querySelector('[name="login"]');
const password = form.querySelector('[name="password"]');
const btn = document.querySelector('#signin__btn');
const wellcome = document.querySelector('#welcome');
const userID = wellcome.querySelector('#user_id');

btn.addEventListener('click', ()=> {
    //e.preventDefault();
    console.log(login.value);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        formData.append(login.value, password.value);
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', ()=> {
            // обработка ответа
            if (xhr.readyState === xhr.DONE) {
                console.log('2inside request form');
                let response = JSON.parse(xhr.responseText);
                console.log(response);
                if(response.success === true) {
                    localStorage.setItem('user', response.user_id);
                    console.log(localStorage.getItem('user'));
                    userID.textContent = localStorage.getItem('user');
                    wellcome.classList.add('welcome_active');
                    signin.classList.remove('signin_active');
                    
                } else {
                    alert('Неверный логин/пароль');
                    login.value = '';
                    password.value = '';
                }

            }
            
        });
    
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        xhr.send(formData);
    })
    
    
});


/*form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    
    xhr.upload.addEventListener('progress', (e)=> {
        progress.value = e.loaded / e.total;
    });
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
    
});

pollAnswers.addEventListener('click', (e)=> {
    alert('Спасибо, ваш голос засчитан!');
    numberAnswer = answers.indexOf(e.target.textContent);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', ()=> {
        if (xhr.readyState === xhr.DONE) {
            pollAnswers.classList.remove('poll__answers_active');
            pollAnswers.classList.add('poll__answers');
            let response = xhr.responseText;
            let resp = JSON.parse(response);
            
            let sum = 0;
            
            for (let element of resp.stat) {
                sum += element.votes;
            }

            for (let element of resp.stat) {
                let procent = element.votes / sum * 100;
                let stat = document.createElement('div');
                stat.textContent = `${element.answer} : ${procent.toFixed(2)}%`;
                pollTitle.appendChild(stat);
            }
        }
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(`vote=${numberVote}&answer=${numberAnswer}`);
});*/
