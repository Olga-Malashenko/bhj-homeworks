const book = document.querySelector('.book__content');
const controllSize = document.querySelector('.book__control_font-size');
let selectedButton = document/querySelector('font-size_active');

    
controllSize.addEventListener('click', onClick);


function onClick(e) {
    console.log('Клик!');
    let button = e.target;
    console.log(e);
    if ( ! button.classList.contains('font-size')) {
        return;
    }
    
    changeSizeButton(button);
    changeSizeText(button);
}

function changeSizeButton(buttonSize) {
    selectedButton.classList.remove('font-size_active');
    selectedButton = buttonSize;
    selectedButton.classList.add('font-size_active');
}

function changeSizeText(buttonSize) {
    if (buttonSize.classList.contains('font-size_small')) {
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big');
    } else if (buttonSize.classList.contains('font-size_big')) {
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small');
    } else {
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
    }
}
