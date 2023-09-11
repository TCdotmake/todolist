import listCSS from "./list.css";
import ThreeDots from "../icons/threeDots.png";
import mkIcon from "../icons/mkIcon";
const mkList = (listObj) => {
  const list = document.createElement("div");
  list.classList.add("list");
  list.dataset.id = listObj.id;
  list.dataset.selectTarget = listObj.id;
  list.dataset.type = 'list';
  const listName = document.createElement("p");
  listName.innerText = listObj.name;
  listName.dataset.selectTarget = listObj.id;
  list.appendChild(listName);
  list.appendChild(mkIcon(ThreeDots));

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

  return list;
};

export default mkList;
