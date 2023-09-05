import LP from '../icons/lp.png';
import MP from '../icons/mp.png';
import HP from '../icons/hp.png';
import mkIcon from '../icons/mkIcon';

// todo section
const todoDiv = document.createElement('div');
const todoLabel = document.createElement('p');
todoLabel.innerHTML = 'Add Todo';

const toDo = document.createElement('input');
toDo.setAttribute('type','text');
toDo.setAttribute('name', 'todo');
toDo.setAttribute('placeholder', 'Enter ToDo');

const desc = document.createElement('input');
desc.setAttribute('type','text');
desc.setAttribute('name', 'desciption');
desc.setAttribute('placeholder', 'Description');

const todoMisc = document.createElement('div');
todoMisc.classList.add('todo-misc');
const lpIcon = mkIcon(LP);
const mpIcon = mkIcon(MP );
const hpIcon = mkIcon(HP);

const datePicker = document.createElement('input');
datePicker.setAttribute('type','date');

todoMisc.appendChild(lpIcon);

todoMisc.appendChild(datePicker);

todoDiv.appendChild(todoLabel);
todoDiv.appendChild(toDo);
todoDiv.appendChild(desc);
todoDiv.appendChild(todoMisc);

export default todoDiv;