let second = 59;
const timer = document.querySelector('#timer');
let timerID = setInterval(() => {
    second -= 1;
    timer.textContent = second;
    if (second === 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerID);
    }
}, 1000);
