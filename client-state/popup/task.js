const modal = document.querySelector('#subscribe-modal');
const modalClose = document.querySelector('.modal__close');

let modalCloseMarker = checkCookie('modal');
if (!modalCloseMarker) {
    modal.classList.add('modal_active');
}

document.cookie = 'modal=close';
console.log(document.cookie);

modalClose.addEventListener('click', ()=> {
    modal.classList.remove('modal_active');
    document.cookie = 'modal=close';
    console.log(document.cookie);
})

function checkCookie(name) {
    const pairs = document.cookie.split('; ');
    if (pairs.find(pair => pair.startsWith(name + '='))) {
        return true;
    }
    return false; 
}
