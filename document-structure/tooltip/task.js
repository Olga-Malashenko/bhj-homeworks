const phrases = document.querySelectorAll('.has-tooltip');


for (let phrase of phrases) {
    phrase.addEventListener('click', handler);
}



function handler(e) {
    e.preventDefault();

    let currentPhrase = e.target;
    //console.log(currentPhrase);

    let tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.style = 'left: 0; top: 0';

    if (! tooltip.classList.contains('tooltip_active')) {
        tooltip.classList.add('tooltip_active');
        tooltip.textContent = currentPhrase.title;
        //console.log(tooltip);

        currentPhrase.appendChild(tooltip);
    } else {
        tooltip.remove();
    }
    

}