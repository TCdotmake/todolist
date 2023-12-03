import Exit from "../icons/exit.png";
import mkIcon from "../icons/mkIcon";
import app from "../app";
//exit btn
const deleteFilter = document.createElement("div");
deleteFilter.classList.add("modal-window");

const exitIcon = mkIcon(Exit);

const filter = structuredClone(app.filter) || "all";
const capFilter = filter.charAt(0).toUpperCase() + filter.slice(1);

// msg
const msg = document.createElement("div");
msg.classList.add("modal-msg");

const msgDiv = document.createElement("div");
const msgLabel = document.createElement("p");
msgLabel.innerHTML = "Delete filtered todo";

const msgContent = document.createElement("div");
msgContent.innerHTML = `Delete all todo items from ${capFilter}?`;

msgDiv.appendChild(msgLabel);
msgDiv.appendChild(msgContent);
msg.appendChild(msgDiv);

//modal btn bar
const modalBtnBar = document.createElement("div");
modalBtnBar.classList.add("modal-btn-bar");

const deleteFilterTodo = document.createElement("button");
deleteFilterTodo.innerHTML = "Yes";
deleteFilterTodo.classList.add("modal-btn");
deleteFilterTodo.classList.add("confirm-btn");

const cancelDelete = document.createElement("button");
cancelDelete.innerHTML = "No";
cancelDelete.classList.add("modal-btn");
modalBtnBar.appendChild(deleteFilterTodo);
modalBtnBar.appendChild(cancelDelete);

deleteFilter.appendChild(exitIcon);
deleteFilter.appendChild(msg);
deleteFilter.appendChild(modalBtnBar);

//event listener
exitIcon.addEventListener("click", (e) => {
  e.preventDefault();
  let opened = document.querySelectorAll(".modal-open");
  for (let item of opened) {
    item.classList.remove("modal-open");
  }
});

cancelDelete.addEventListener("click", (e) => {
  e.preventDefault();
  let opened = document.querySelectorAll(".modal-open");
  for (let item of opened) {
    item.classList.remove("modal-open");
  }
});

deleteFilterTodo.addEventListener("click", (e) => {
  e.preventDefault();
  app.removeFilterItems();
  let opened = document.querySelectorAll(".modal-open");
  for (let item of opened) {
    item.classList.remove("modal-open");
  }
});

export default deleteFilter;
