import footerCSS from './footer.css';
import iconCSS from '../icons/icons.css';

import mkIcon from '../icons/mkIcon';
import Pin from '../icons/pin.png';
import Edit from '../icons/edit.png';
import Trash from '../icons/trash.png';
import app from '../app';
import mkPriorityIcon from './mkPriorityIcon';
const footer = document.createElement('section');
footer.setAttribute('id','footer');

const pinIcon = mkIcon(Pin);
const editIcon = mkIcon(Edit);
const trashIcon = mkIcon(Trash);

const icons = [pinIcon, editIcon, trashIcon];

const actionBar = document.createElement('ul');

for(let icon of icons){
    const item = document.createElement('li');
    item.appendChild(icon);
    actionBar.appendChild(item);
}

// priority icons
let lpIcon, mpIcon, hpIcon;
const priorityArr = ["Low", "Med", "High"];
const btnArr = [];
for (let n of priorityArr) {
  const btn = mkPriorityIcon(n);
  btnArr.push(btn);
}
[lpIcon, mpIcon, hpIcon] = [...btnArr];

lpIcon.addEventListener("click", (e) => {
    e.preventDefault();
    lpIcon.replaceWith(mpIcon);
  });
  mpIcon.addEventListener("click", (e) => {
    e.preventDefault();
    mpIcon.replaceWith(hpIcon);
  });
  hpIcon.addEventListener("click", (e) => {
    e.preventDefault();
    hpIcon.replaceWith(lpIcon);
  });

// helper functions

function loadTodo(){
    const name = document.getElementById('edit-todo-name');
    const desc = document.getElementById('edit-todo-desc');
    const due = document.getElementById('edit-due-date');
    const icon = document.getElementById('edit-todo-misc').firstChild;
    const selected = document.querySelector('.selected');
    const id = selected.dataset.id;
    const todo = app.getItem(id);
    name.value = todo.name;
    desc.value = todo.desc;
    console.log(todo.due);
    due.value = todo.due;
    const priority = todo.priority;
    if(priority == 'Low'){
        icon.replaceWith(lpIcon);
    }else if(priority == 'Med'){
        icon.replaceWith(mpIcon);
    }else{
        icon.replaceWith(hpIcon);
    }
}

//eventlisteners
editIcon.addEventListener('click',(e)=>{
    e.preventDefault();
    const selected = document.querySelector('.selected');
    const type = selected.dataset.type;
    const id = selected.dataset.id;
    //context based trigger for modal
    if(type == 'list'){
        const input = document.getElementById('edit-list-input');
        const list = app.getItem(selected.dataset.id);
        input.dataset.id = id;
        input.dataset.current = list.name;
        input.setAttribute('value', list.name);
        document.querySelector(".modal-bg").classList.add("modal-open");
        document.getElementById('edit-list-modal').classList.add("modal-open");
    }
    if(type == 'todo'){
        loadTodo();
        document.querySelector(".modal-bg").classList.add("modal-open");
        document.getElementById('edit-todo-modal').classList.add('modal-open');
    }
})

footer.appendChild(actionBar);

export default footer;