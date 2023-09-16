import Exit from "../icons/exit.png";
import mkIcon from "../icons/mkIcon";
import app from "../app";
//exit btn
const confirmDelete = document.createElement("div");
confirmDelete.classList.add("modal-window");

const exitIcon = mkIcon(Exit);

// msg
const msg = document.createElement("div");
msg.classList.add("modal-msg");

const msgDiv = document.createElement("div");
const msgLabel = document.createElement("p");
msgLabel.innerHTML = "Confirm Delete";

const msgContent = document.createElement("div");
msgContent.innerHTML = "List is not empty, proceed?";

msgDiv.appendChild(msgLabel);
msgDiv.appendChild(msgContent);
msg.appendChild(msgDiv);

//modal btn bar
const modalBtnBar = document.createElement("div");
modalBtnBar.classList.add("modal-btn-bar");

const deleteList = document.createElement("button");
deleteList.innerHTML = "Yes";
deleteList.classList.add("modal-btn");
deleteList.classList.add("confirm-btn");
deleteList.setAttribute("id", "confirm-delete-list");

const cancelDelete = document.createElement("button");
cancelDelete.innerHTML = "No";
cancelDelete.classList.add("modal-btn");
cancelDelete.setAttribute("id", "cancel-delete-list");
modalBtnBar.appendChild(deleteList);
modalBtnBar.appendChild(cancelDelete);

confirmDelete.appendChild(exitIcon);
confirmDelete.appendChild(msg);
confirmDelete.appendChild(modalBtnBar);

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

deleteList.addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.querySelector('.selected').dataset.id;
  app.removeItem(id);
});

export default confirmDelete;
