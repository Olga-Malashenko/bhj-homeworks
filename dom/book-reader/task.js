const book = document.querySelector('.book__content');
const controllSize = document.querySelector('.book__control_font-size');
let selectedButton = document.querySelector('.font-size_active');

    
controllSize.addEventListener('click', onClick);


function onClick(e) {
    e.preventDefault;
    let button = e.target;
    
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
    book.classList.remove('book_fs-big');
    book.classList.remove('book_fs-small');
    if (buttonSize.classList.contains('font-size_small')) {
        book.classList.add('book_fs-small');
    }
    if (buttonSize.classList.contains('font-size_big')) {
        book.classList.add('book_fs-big');
    }
}
