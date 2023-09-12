import formCss from "./modalForm.css";
import modalWindowCSS from "./modalWindow.css";
import Exit from "../icons/exit.png";
import mkIcon from "../icons/mkIcon";
import app from "../app";
// import { lpIcon, mpIcon, hpIcon } from "./priorityIcons";
import mkPriorityIcon from "./mkPriorityIcon";
import loadTodo from "./loadTodo";

const editTodo = document.createElement("div");
editTodo.classList.add("modal-window");

//exit btn
const exitIcon = mkIcon(Exit);

// form
const form = document.createElement("form");
form.classList.add("modal-form");

// todo section
const todoDiv = document.createElement("div");
const todoLabel = document.createElement("p");
todoLabel.innerHTML = "Edit Todo";

const toDo = document.createElement("input");
toDo.setAttribute("type", "text");
toDo.setAttribute("name", "todo");
toDo.setAttribute("placeholder", "Enter ToDo");
toDo.setAttribute("id", "edit-todo-name");

const desc = document.createElement("input");
desc.setAttribute("type", "text");
desc.setAttribute("name", "desciption");
desc.setAttribute("placeholder", "Description");
desc.setAttribute("id", "edit-todo-desc");

const todoMisc = document.createElement("div");
todoMisc.classList.add("todo-misc");
todoMisc.setAttribute("id", "edit-todo-misc");

const datePicker = document.createElement("input");
datePicker.setAttribute("type", "date");
datePicker.setAttribute("id", "edit-due-date");

// priority icons
let lpIcon, mpIcon, hpIcon;
const priorityArr = ["Low", "Med", "High"];
const btnArr = [];
for (let n of priorityArr) {
  const btn = mkPriorityIcon(n);
  btnArr.push(btn);
}
[lpIcon, mpIcon, hpIcon] = [...btnArr];

todoMisc.appendChild(lpIcon);
todoMisc.appendChild(datePicker);

// assembly
todoDiv.appendChild(todoLabel);
todoDiv.appendChild(toDo);
todoDiv.appendChild(desc);
todoDiv.appendChild(todoMisc);

form.appendChild(todoDiv);

//modal btn bar
const modalBtnBar = document.createElement("div");
modalBtnBar.classList.add("modal-btn-bar");

const saveTodoEdit = document.createElement("button");
saveTodoEdit.innerHTML = "Save";
saveTodoEdit.classList.add("modal-btn");
saveTodoEdit.classList.add("confirm-btn");
saveTodoEdit.setAttribute("id", "save-todo-edit");

const resetTodoEdit = document.createElement("button");
resetTodoEdit.innerHTML = "Reset";
resetTodoEdit.classList.add("modal-btn");
resetTodoEdit.setAttribute("id", "reset-todo-edit");
modalBtnBar.appendChild(saveTodoEdit);
modalBtnBar.appendChild(resetTodoEdit);

editTodo.appendChild(exitIcon);
editTodo.appendChild(form);
editTodo.appendChild(modalBtnBar);

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

//event listener
exitIcon.addEventListener("click", (e) => {
  e.preventDefault();
  let opened = document.querySelectorAll(".modal-open");
  for (let item of opened) {
    item.classList.remove("modal-open");
  }
});

resetTodoEdit.addEventListener('click', (e)=>{
    e.preventDefault();
    loadTodo();
})

export default editTodo;