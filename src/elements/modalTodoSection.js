import LP from '../icons/lp.png';
import MP from '../icons/mp.png';
import HP from '../icons/hp.png';
import mkIcon from '../icons/mkIcon';
import validateEntry from './validateEntry';


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

let lpIcon, mpIcon, hpIcon;

const priorityArr = ['Low', 'Med', 'High'];
const btnArr = [];
for(let n of priorityArr){
    const btn = document.createElement('button');
    const label = document.createElement('p');
    label.innerHTML = n;
    btn.appendChild(label);
    btn.classList.add('modal-btn');
    btn.classList.add('confirm-btn');
    btn.classList.add('priority-btn');
    btn.classList.add(n);
    btn.dataset.priority = n;
    btnArr.push(btn);
}

[lpIcon, mpIcon, hpIcon] = [...btnArr];

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
// toDo.addEventListener('change', (e)=>{
//     e.preventDefault();
//     const addTodo = document.getElementById('addTodo');
//     if(validateEntry()){
//         addTodo.setAttribute('disabled', false);
//     }
//     else{
//         addTodo.setAttribute('disabled', true);
//     }
// })
export default todoDiv;