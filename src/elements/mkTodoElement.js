import todoCSS from "./todo.css";
import app from "../app";
import mkPriorityIcon from "./mkPriorityIcon";
import mkIcon from "../icons/mkIcon";
import Check from "../icons/check.png";

function formatDueDate(due) {
  if (due == null || due == "") {
    return null;
  }
  const arr = due.split("-");
  let year, month, date;
  [year, month, date] = arr;
  year = year.slice(2, 4);
  return `${month}.${date}.${year}`;
}

const mkTodoElement = (todoObj) => {
  const itemDiv = document.createElement("div");
  itemDiv.dataset.id = todoObj.id;
  itemDiv.dataset.type = "todo";
  itemDiv.classList.add("todo-item-div");
  const checkBox = document.createElement("div");
  checkBox.classList.add("checkBox");
  if (todoObj.complete) {
    const completed = mkIcon(Check);
    checkBox.appendChild(completed);
  }
  const todoDiv = document.createElement("div");
  const todoName = document.createElement("p");
  todoName.innerHTML = todoObj.name;
  const todoDesc = document.createElement("p");
  todoDesc.innerHTML = todoObj.desc;
  todoDesc.classList.add("todo-desc");
  const icon = mkPriorityIcon(todoObj.priority);
  const dueDate = document.createElement("p");
  dueDate.innerHTML = formatDueDate(todoObj.due) || "Anytime";
  //assembly
  todoDiv.appendChild(todoName);
  todoDiv.appendChild(todoDesc);

  itemDiv.appendChild(checkBox);
  itemDiv.appendChild(todoDiv);
  itemDiv.appendChild(icon);
  itemDiv.appendChild(dueDate);

  itemDiv.addEventListener("click", (e) => {
    e.preventDefault();
    let current = document.querySelectorAll(".selected");
    if (current.length > 0) {
      for (let n of current) n.classList.remove("selected");
    }
    itemDiv.classList.add("selected");
  });

  todoDiv.addEventListener("click", (e) => {
    e.preventDefault();
    let current = document.querySelectorAll(".selected");
    if (current.length > 0) {
      for (let n of current) n.classList.remove("selected");
    }
    itemDiv.classList.add("selected");
  });

  todoName.addEventListener("click", (e) => {
    e.preventDefault();
    let current = document.querySelectorAll(".selected");
    if (current.length > 0) {
      for (let n of current) n.classList.remove("selected");
    }
    itemDiv.classList.add("selected");
  });

  todoDesc.addEventListener("click", (e) => {
    e.preventDefault();
    let current = document.querySelectorAll(".selected");
    if (current.length > 0) {
      for (let n of current) n.classList.remove("selected");
    }
    itemDiv.classList.add("selected");
  });
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    let current = document.querySelectorAll(".selected");
    if (current.length > 0) {
      for (let n of current) n.classList.remove("selected");
    }
    itemDiv.classList.add("selected");
  });
  dueDate.addEventListener("click", (e) => {
    e.preventDefault();
    let current = document.querySelectorAll(".selected");
    if (current.length > 0) {
      for (let n of current) n.classList.remove("selected");
    }
    itemDiv.classList.add("selected");
  });

  checkBox.addEventListener("click", (e) => {
    e.preventDefault();
    const id = todoObj.id;
    app.toggleComplete(id);
    console.log(app.getItem(id).complete);
  });

  if (todoObj.pinned) {
    itemDiv.classList.add("pinned");
  }

  return itemDiv;
};

export default mkTodoElement;
