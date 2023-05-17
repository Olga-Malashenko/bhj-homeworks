const holes = document.querySelectorAll('.hole');
const deadCounter = document.querySelector('#dead');
const lostCounter = document.querySelector('#lost');
let dead = 0;
let lost = 0;

for (let hole of holes) {
    hole.addEventListener('click',  handler); 
}

function handler(e) {
    if (e.target.classList.contains('hole_has-mole')) {
        dead += 1;
        deadCounter.textContent = dead;
    } else {
        lost += 1;
        lostCounter.textContent = lost;
    }
    if (lost === 5 || dead === 10) {
        dead = 0;
        lost = 0;
        
        setTimeout(() => {
            lostCounter.textContent = lost;
            deadCounter.textContent = dead;
            alert('GAME OVER'), 200
        });
        
    }
}
    


