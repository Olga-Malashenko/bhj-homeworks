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
        tooltip.style = `left: ${coordinates.left}px; top: ${coordinates.top + 20}px`;
        currentPhrase.appendChild(tooltip);
    }
}
