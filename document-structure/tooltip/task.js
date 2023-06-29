const phrases = document.querySelectorAll('.has-tooltip');


for (let phrase of phrases) {
    phrase.addEventListener('click', handler);
}



function handler(e) {
    e.preventDefault();

    let currentPhrase = e.target;
    let coordinates = currentPhrase.getBoundingClientRect();

    if (currentPhrase.firstElementChild) {
        currentPhrase.firstElementChild.remove();
    } else {
        let tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.classList.add('tooltip_active');
        tooltip.textContent = currentPhrase.title;

        //let left = coordinates.left;
        //let top = coordinates.top;
        
        tooltip.style = 'left: coordinates.left; top: coordinates.bottom;';
        //tooltip.style = `left: ${left}; top: ${top}`;
        currentPhrase.appendChild(tooltip);
    }
   
}