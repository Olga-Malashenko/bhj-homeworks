const phrases = document.querySelectorAll('.rotator__case');
console.log(phrases);
const arr = Array.from(phrases);
console.log(arr);

function changePhrase() {
    
        const index = arr.findIndex((phrase) => phrase.classList.contains('rotator__case_active'))
    console.log(index);
        arr[index].classList.remove('rotator__case_active');
            
        if (index === arr.length - 1) {
            arr[0].classList.add('rotator__case_active');
        } else {
            arr[index + 1].classList.add('rotator__case_active');
        }
        
}

setInterval(changePhrase, 1000);