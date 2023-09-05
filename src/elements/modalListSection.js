import app from "../app";
// list section
const listDiv = document.createElement('div');

const listLabel = document.createElement('p');
listLabel.innerHTML = 'List';

const listDropDown = document.createElement('select');
listDropDown.setAttribute('name','select list');
listDropDown.setAttribute('id', 'listDropDown');

const listInputDiv = document.createElement('div');
listInputDiv.classList.add('list-input-div');

const listInput = document.createElement('input');
listInput.setAttribute('type','text');
listInput.setAttribute('placeholder','Create new list');
listInput.setAttribute('id', 'list-input');

const addList = document.createElement('button');
addList.innerHTML = 'Add';
addList.classList.add('modal-btn');
addList.classList.add('confirm-btn');
addList.setAttribute('id', 'add-list');

listInputDiv.appendChild(listInput);
listInputDiv.appendChild(addList);

listDiv.appendChild(listLabel);
listDiv.appendChild(listDropDown);
listDiv.appendChild(listInputDiv);

addList.addEventListener('click', (e)=>{
    e.preventDefault();
    if(listInput.value != ''){
    app.addList(listInput.value);
    listInput.value = '';
    }
})

export default listDiv;