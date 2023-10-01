const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');
let answers;
let numberVote;
let numberAnswer;

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', ()=> {
    if(xhr.readyState === xhr.DONE) {
        const question = JSON.parse(xhr.responseText);

        pollTitle.textContent = question.data.title;
        answers = question.data.answers;
        numberVote = question.id;
        pollAnswers.classList.remove('poll__answers');
        pollAnswers.classList.add('poll__answers_active');

        answers.forEach(element => {
            let pollAnswer = document.createElement('button');
            pollAnswer.classList.add('poll__answer');
            pollAnswer.textContent = element;
            pollAnswers.appendChild(pollAnswer);
        });  
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

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
});

