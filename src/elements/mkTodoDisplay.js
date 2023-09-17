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
    todoSection.innerHTML = "List is empty...";
  }

  return todoSection;
};
export default mkTodoDisplay;
