import modalWindowCSS from "./modalWindow.css";
import Exit from "../icons/exit.png";
import mkIcon from "../icons/mkIcon";
import form from "./modalForm";
import validateEntry from "./validateEntry";
import app from "../app";
import { lpIcon } from "./priorityIcons";
import resetModal from "./resetModal";
const modalWindow = document.createElement("div");
modalWindow.classList.add("modal-window");

const exitIcon = mkIcon(Exit);

//modal btn bar
const modalBtnBar = document.createElement("div");
modalBtnBar.classList.add("modal-btn-bar");

const addToDo = document.createElement("button");
addToDo.innerHTML = "Add";
addToDo.classList.add("modal-btn");
addToDo.classList.add("confirm-btn");
addToDo.setAttribute("id", "addTodo");

const reset = document.createElement("button");
reset.innerHTML = "Reset";
reset.classList.add("modal-btn");
reset.setAttribute("id", "reset");
modalBtnBar.appendChild(addToDo);
modalBtnBar.appendChild(reset);

//assembly
modalWindow.appendChild(exitIcon);
modalWindow.appendChild(form);
modalWindow.appendChild(modalBtnBar);

//event listener
exitIcon.addEventListener("click", () => {
  let opened = document.querySelectorAll(".modal-open");
  for (let item of opened) {
    item.classList.remove("modal-open");
  }
});

addToDo.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateEntry()) {
    const parentID = document.getElementById("listDropDown").dataset.id;
    let name = document.getElementById("todoName").value;
    let desc = document.getElementById("desc").value;
    let due = document.getElementById("dueDate").value;
    let priority =
      document.getElementById("todoMisc").firstChild.dataset.priority;
    app.addTodo(parentID, name, desc, due, priority);
    //reset
    resetModal();
  }
});

reset.addEventListener('click', e=>{
    e.preventDefault();
    resetModal();
})

export default modalWindow;
