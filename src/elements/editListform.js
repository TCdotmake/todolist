import formCss from './modalForm.css';

const form = document.createElement('form');
form.classList.add('modal-form');

const listDiv = document.createElement('div');

const listLabel = document.createElement('p');
listLabel.innerHTML = 'Edit List';

const listInput = document.createElement('input');
listInput.setAttribute('type','text');
listInput.setAttribute('id', 'edit-list-input');

listDiv.appendChild(listLabel);
listDiv.appendChild(listInput);