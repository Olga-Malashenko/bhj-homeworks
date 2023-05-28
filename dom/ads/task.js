const phrases = document.querySelectorAll('.rotator__case');
const arr = Array.from(phrases);
let speed;

function changePhrase() {
    const index = arr.findIndex((phrase) => phrase.classList.contains('rotator__case_active'))
    
    setTimeout(() => {
        arr[index].classList.remove('rotator__case_active');
        speed = arr[index].dataset.speed;
        console.log(speed);
        if (index === arr.length - 1) {
            arr[0].classList.add('rotator__case_active');
        } else {
            arr[index + 1].classList.add('rotator__case_active');
        }
    }, speed);
        
}

for(let phrase of arr) {
    phrase.style.color = phrase.dataset.color;
}

setInterval(changePhrase, 1000);