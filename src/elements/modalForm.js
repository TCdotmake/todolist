import formCss from './modalForm.css';
import LP from '../icons/lp.png';
import MP from '../icons/mp.png';
import HP from '../icons/hp.png';
import Calendar from '../icons/calendar.png';
import mkIcon from '../icons/mkIcon';
const form = document.createElement('form');
form.classList.add('modal-form');

// list section
const listDiv = document.createElement('div');

const listLabel = document.createElement('p');
listLabel.innerHTML = 'List';

const listDropDown = document.createElement('select');
listDropDown.setAttribute('name','select list');

const defaultOption = document.createElement('option');
defaultOption.innerHTML = 'Select List';
defaultOption.setAttribute('selected', true);
defaultOption.setAttribute('disabled', true);
defaultOption.setAttribute('value', null);
listDropDown.appendChild(defaultOption);

const projArr = [
    'general',
    'shopping list',
    'vacation planning'
];

for(let n of projArr){
    const item = document.createElement('option');
    item.innerHTML = n;
    item.setAttribute('value', n);
    listDropDown.appendChild(item);
}

const listInputDiv = document.createElement('div');
listInputDiv.classList.add('list-input-div');

const listInput = document.createElement('input');
listInput.setAttribute('type','text');
listInput.setAttribute('placeholder','Create new list');


const addList = document.createElement('button');
addList.innerHTML = 'Add';
addList.classList.add('modal-btn');
addList.classList.add('confirm-btn');

listInputDiv.appendChild(listInput);
listInputDiv.appendChild(addList);



listDiv.appendChild(listLabel);
listDiv.appendChild(listDropDown);
listDiv.appendChild(listInputDiv);

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
const calendarIcon = mkIcon(Calendar);

const datePicker = document.createElement('input');
datePicker.setAttribute('type','date');

todoMisc.appendChild(lpIcon);
// todoMisc.appendChild(calendarIcon);
todoMisc.appendChild(datePicker);

todoDiv.appendChild(todoLabel);
todoDiv.appendChild(toDo);
todoDiv.appendChild(desc);
todoDiv.appendChild(todoMisc);

//assembly
form.appendChild(listDiv);
form.appendChild(todoDiv);


export default form;