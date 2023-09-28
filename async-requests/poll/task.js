const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');
let answers;
let numberVote;
let numberAnswer;

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', ()=> {
    if(xhr.readyState === xhr.DONE) {
        const question = JSON.parse(xhr.responseText);
        //console.log(question);

        pollTitle.textContent = question.data.title;
        answers = question.data.answers;
        numberVote = question.id;
        console.log(numberVote);

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
    console.log(e.target);
    console.log(answers);
    numberAnswer = answers.indexOf(e.target.textContent);
    console.log(numberAnswer);
});

const xhr1 = new XMLHttpRequest;
xhr1.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr1.send(`vote=${numberVote}&answer=${numberAnswer}`);








