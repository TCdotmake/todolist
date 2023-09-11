import formCss from './modalForm.css';
import modalWindowCSS from "./modalWindow.css";
import Exit from "../icons/exit.png";
import mkIcon from "../icons/mkIcon";
import app from '../app';
//exit btn
const editList = document.createElement("div");
editList.classList.add("modal-window");

const exitIcon = mkIcon(Exit);

//edit input

const form = document.createElement('form');
form.classList.add('modal-form');

const listDiv = document.createElement('div');

const listLabel = document.createElement('p');
listLabel.innerHTML = 'Edit List Name';

const listInput = document.createElement('input');
listInput.setAttribute('type','text');
listInput.setAttribute('id', 'edit-list-input');

listDiv.appendChild(listLabel);
listDiv.appendChild(listInput);

form.appendChild(listDiv);

//modal btn bar
const modalBtnBar = document.createElement("div");
modalBtnBar.classList.add("modal-btn-bar");

const saveListEdit = document.createElement("button");
saveListEdit.innerHTML = "Save";
saveListEdit.classList.add("modal-btn");
saveListEdit.classList.add("confirm-btn");
saveListEdit.setAttribute("id", "saveListEdit");

const resetListEdit = document.createElement("button");
resetListEdit.innerHTML = "Reset";
resetListEdit.classList.add("modal-btn");
resetListEdit.setAttribute("id", "resetListEdit");
modalBtnBar.appendChild(saveListEdit);
modalBtnBar.appendChild(resetListEdit);

editList.appendChild(exitIcon);
editList.appendChild(form);
editList.appendChild(modalBtnBar);

//event listener
exitIcon.addEventListener("click", (e) => {
    e.preventDefault();
  let opened = document.querySelectorAll(".modal-open");
  for (let item of opened) {
    item.classList.remove("modal-open");
  }
});

saveListEdit.addEventListener('click',(e)=>{
    e.preventDefault();
    const name = listInput.value;
    if(name != null && name != ''){
        const id = listInput.dataset.id;
        app.editList(id, name);
        listInput.dataset.current = name;
    }
})

resetListEdit.addEventListener('click', (e)=>{
    e.preventDefault();
    listInput.value = listInput.dataset.current;
})

export default editList;