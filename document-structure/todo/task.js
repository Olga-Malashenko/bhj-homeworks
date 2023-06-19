const btn = document.querySelector('#tasks__add');
const input = document.querySelector('#task__input');
const list = document.querySelector('#tasks__list');



btn.addEventListener('click', (e) => {
    e.preventDefault();

    if(input.value) {
        let task = document.createElement('div');
        task.classList.add('task');
        let taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = input.value;
        let taskDelete = document.createElement('a');
        taskDelete.classList.add('task__remove');
        taskDelete.textContent = '&times;'
        taskDelete.href = '#';

        list.appendChild(task);
        task.appendChild(taskTitle);
        task.appendChild(taskDelete);

        input.value = '';

        taskDelete.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });
    }
    
    
});


