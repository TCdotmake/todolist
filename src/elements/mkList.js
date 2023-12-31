import listCSS from "./list.css";
import ThreeDots from "../icons/threeDots.png";
import Up from "../icons/up.png";
import mkIcon from "../icons/mkIcon";
import app from "../app";
import mkExpandBtn from "./mkExpandBtn";
const mkList = (listObj) => {
  const list = document.createElement("div");
  const id = listObj.id;
  list.classList.add("list");
  list.dataset.id = id;
  list.dataset.selectTarget = id;
  list.dataset.type = "list";
  const listName = document.createElement("p");
  listName.innerText = listObj.name;
  listName.dataset.selectTarget = id;
  list.appendChild(listName);

  if (listObj.children) {
    const total = listObj.children.length;
    let completed = 0;
    for (let todo of listObj.children) {
      if (todo.complete) {
        completed += 1;
      }
    }
    const counter = document.createElement("p");
    counter.classList.add("counter");
    counter.innerHTML = `(${completed}/${total})`;
    list.appendChild(counter);
  }

  let btn;
  if (listObj.expand) {
    btn = mkExpandBtn.close();
  } else {
    btn = mkExpandBtn.open();
  }
  btn.dataset.type = "list";
  list.appendChild(btn);

  list.addEventListener("click", (e) => {
    e.preventDefault();
    let current = document.querySelectorAll(".selected");
    if (current.length > 0) {
      for (let n of current) n.classList.remove("selected");
    }
    const selectTarget = e.target.dataset.selectTarget;
    const lists = document.querySelectorAll(".list");
    for (let n of lists) {
      if (n.dataset.id == selectTarget) {
        n.classList.add("selected");
      }
    }
  });

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    app.toggleExpand(id);
  });

  return list;
};

export default mkList;
