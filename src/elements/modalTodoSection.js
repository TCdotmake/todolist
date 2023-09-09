import { lpIcon, mpIcon, hpIcon } from "./priorityIcons";


// todo section
const todoDiv = document.createElement('div');
const todoLabel = document.createElement('p');
todoLabel.innerHTML = 'Add Todo';

const toDo = document.createElement('input');
toDo.setAttribute('type','text');
toDo.setAttribute('name', 'todo');
toDo.setAttribute('placeholder', 'Enter ToDo');
toDo.setAttribute('id', 'todoName');

const desc = document.createElement('input');
desc.setAttribute('type','text');
desc.setAttribute('name', 'desciption');
desc.setAttribute('placeholder', 'Description');
desc.setAttribute('id','desc');

const todoMisc = document.createElement('div');
todoMisc.classList.add('todo-misc');
todoMisc.setAttribute('id', 'todoMisc');

const datePicker = document.createElement('input');
datePicker.setAttribute('type','date');
datePicker.setAttribute('id','dueDate');

todoMisc.appendChild(lpIcon);

todoMisc.appendChild(datePicker);

todoDiv.appendChild(todoLabel);
todoDiv.appendChild(toDo);
todoDiv.appendChild(desc);
todoDiv.appendChild(todoMisc);

lpIcon.addEventListener('click', (e)=>{
    e.preventDefault();
    lpIcon.replaceWith(mpIcon);
})
mpIcon.addEventListener('click', (e)=>{
    e.preventDefault();
    mpIcon.replaceWith(hpIcon);
})
hpIcon.addEventListener('click', (e)=>{
    e.preventDefault();
    hpIcon.replaceWith(lpIcon);
})

export default todoDiv;