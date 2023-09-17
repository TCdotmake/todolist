import footerCSS from "./footer.css";
import iconCSS from "../icons/icons.css";

import mkIcon from "../icons/mkIcon";
import Pin from "../icons/pin.png";
import Edit from "../icons/edit.png";
import Trash from "../icons/trash.png";
import app from "../app";
import mkPriorityIcon from "./mkPriorityIcon";
import loadTodo from "./loadTodo";
const footer = document.createElement("section");
footer.setAttribute("id", "footer");

const pinIcon = mkIcon(Pin);
const editIcon = mkIcon(Edit);
const trashIcon = mkIcon(Trash);

const icons = [pinIcon, editIcon, trashIcon];

const actionBar = document.createElement("ul");
actionBar.setAttribute("id", "action-bar");
for (let icon of icons) {
  const item = document.createElement("li");
  item.appendChild(icon);
  actionBar.appendChild(item);
}

//eventlisteners
editIcon.addEventListener("click", (e) => {
  e.preventDefault();
  const selected = document.querySelector(".selected");
  const type = selected.dataset.type;
  const id = selected.dataset.id;
  //context based trigger for modal
  if (type == "list") {
    const input = document.getElementById("edit-list-input");
    const list = app.getItem(selected.dataset.id);
    input.dataset.id = id;
    input.dataset.current = list.name;
    input.setAttribute("value", list.name);
    document.querySelector(".modal-bg").classList.add("modal-open");
    document.getElementById("edit-list-modal").classList.add("modal-open");
  }
  if (type == "todo") {
    loadTodo();
    document.querySelector(".modal-bg").classList.add("modal-open");
    document.getElementById("edit-todo-modal").classList.add("modal-open");
  }
});

trashIcon.addEventListener("click", (e) => {
  e.preventDefault();
  const selected = document.querySelector(".selected");
  const type = selected.dataset.type;
  const id = selected.dataset.id;
  if (type == "todo") {
    app.removeItem(id);
  }
  if (type == "list") {
    const item = app.getItem(id);
    if (item.children == null || item.children.length == 0) {
      app.removeItem(id);
    } else {
      document.querySelector(".modal-bg").classList.add("modal-open");
      document.getElementById("delete-list-modal").classList.add("modal-open");
    }
  }
  if (type == "filter") {
    document.querySelector(".modal-bg").classList.add("modal-open");
      document.getElementById("delete-filter-modal").classList.add("modal-open");
  }
});

footer.appendChild(actionBar);

export default footer;
