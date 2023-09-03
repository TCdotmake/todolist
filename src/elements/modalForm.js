import formCss from './modalForm.css';

const form = document.createElement('form');
form.classList.add('modal-form');

// list section
const listField = document.createElement('fieldset');
const listLegend = document.createElement('legend');
listLegend.innerHTML = 'Select List';
listField.appendChild(listLegend);

const listDropDown = document.createElement('select');
listDropDown.setAttribute('name','select list');

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


listField.appendChild(listDropDown);

// todo section
const todoField = document.createElement('fieldset');
const todoLegend = document.createElement('legend');
todoLegend.innerHTML = 'Add Todo';

const toDo = document.createElement('input');
toDo.setAttribute('type','text');
toDo.setAttribute('name', 'todo');
toDo.setAttribute('placeholder', 'Enter ToDo');

const desc = document.createElement('input');
desc.setAttribute('type','text');
desc.setAttribute('name', 'desciption');
desc.setAttribute('placeholder', 'Description');

todoField.appendChild(todoLegend);
todoField.appendChild(toDo);
todoField.appendChild(desc);

form.appendChild(listField);
form.appendChild(todoField);


export default form;