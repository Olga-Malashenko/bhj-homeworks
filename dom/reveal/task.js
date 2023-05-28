const revealedElements = document.querySelectorAll('.reveal');


function appearance(el) {
    const {top, bottom} = el.getBoundingClientRect();
    
    if (top > 0 && top < window.innerHeight || bottom > 0 && bottom < window.innerHeight ) {
        el.classList.add('reveal_active');
    } else {
        el.classList.remove('reveal_active');
    }
}

for(let revealedElement of revealedElements) {
    setInterval (() => {
        window.addEventListener('scroll', appearance(revealedElement))
    }, 200);
}

