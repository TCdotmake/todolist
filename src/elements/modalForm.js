import formCss from './modalForm.css';

import listDiv from './modalListSection';
import todoDiv from './modalTodoSection';
const form = document.createElement('form');
form.classList.add('modal-form');

form.appendChild(listDiv);
form.appendChild(todoDiv);


export default form;