const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', ()=> {
    if(xhr.readyState === xhr.DONE) {
        const question = JSON.parse(xhr.responseText);
        console.log(question);

        pollTitle.textContent = question.data.title;
        let answers = question.data.answers;
        answers.forEach(element => {
            let pollAnswer = document.createElement('button');
            pollAnswer.classList.add('poll__answer');
            pollAnswer.textContent = element;
            pollAnswers.appendChild(pollAnswer);
        });
        pollAnswers.addEventListener('click', ()=> {
            alert('Спасибо, ваш голос засчитан!');
        });
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

