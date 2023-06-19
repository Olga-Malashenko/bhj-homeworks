const phrases = document.querySelectorAll('.has-tooltip');


for (let phrase of phrases) {
    phrase.addEventListener('click', handler);
}

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
tooltip.style = 'left: 0; top: 0';

function handler(e) {
    e.preventDefault();

    let currentPhrase = e.target;

    tooltip.classList.add('tooltip_active');
    tooltip.textContent = currentPhrase.title;
    //console.log(tooltip);

    currentPhrase.insertAdjacentHTML('afterend', tooltip);

}