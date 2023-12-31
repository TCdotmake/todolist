import todoCSS from "./todo.css";
import app from "../app";
import mkTodoElement from "./mkTodoElement";

const mkTodoDisplay = (children) => {
  const todoSection = document.createElement("div");
  todoSection.classList.add("todo-display-section");
  if (children.length > 0) {
    for (let child of children) {
      todoSection.appendChild(mkTodoElement(child));
    }
  } else {
    const empty = document.createElement("p");
    empty.innerHTML = "Empty list";
    todoSection.appendChild(empty);
  }

  return todoSection;
};
export default mkTodoDisplay;
