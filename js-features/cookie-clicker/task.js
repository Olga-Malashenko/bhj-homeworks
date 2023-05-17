const cookie = document.querySelector('#cookie');
const counter = document.querySelector('#clicker__counter');
const speed = document.querySelector('#clicker__speed');
let timeLast = 0;

cookie.onclick = function() {
    counter.textContent = Number(counter.textContent) + 1;
    cookie.width = 220;
    setTimeout(() => cookie.width = 200, 100);
    let timeCurrent = new Date();
    speed.textContent = (1 / (timeCurrent - timeLast) * 1000).toFixed(2);
    timeLast = timeCurrent;
}