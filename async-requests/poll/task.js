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
            pollAnswers.classList.add('poll__answers');
            pollAnswer.classList.remove('poll__answers_active');
            pollAnswer.textContent = element;
            pollAnswers.appendChild(pollAnswer);
        });  
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

pollAnswers.addEventListener('click', (e)=> {
    alert('Спасибо, ваш голос засчитан!');
    //console.log(e.target);
    //console.log(answers);
    numberAnswer = answers.indexOf(e.target.textContent);
    console.log(`Индекс : ${numberAnswer}`);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', ()=> {
        if (xhr.readyState === xhr.DONE) {
            pollAnswers.classList.add('poll__answers_active');
            pollAnswers.classList.remove('poll__answers');
            let response = xhr.responseText;
            let resp = JSON.parse(response);
            
            //console.log(resp.stat);
            let sum = 0;
            
            for (let element of resp.stat) {
                //console.log(`Количество голосов: ${element.votes}`);
                sum += element.votes;
                console.log(sum);
            }
            for (let element of resp.stat) {
                let procent = element.votes / sum * 100;
                let stat = document.createElement('div');
                stat.textContent = `${element.answer} : ${procent.toFixed(2)}%`;
                //console.log(element.answer);
                
                //console.log(procent.toFixed(2));
                pollTitle.appendChild(stat);
            }
        }
        

    });
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(`vote=${numberVote}&answer=${numberAnswer}`);
    
});










