import app from "../app";
import mkList from "./mkList";
import mkTodoDisplay from "./mkTodoDisplay";
import filters from "../filters";

const updateList = () => {
//   const lists = structuredClone(app.children);
//   const allTodo = [];
//   for (let list of lists) {
//     for (let todo of list.children) {
//       allTodo.push(todo);
//     }
//   }

//   let filteredTodo = [];
//   const filter = app.filter;
//   switch (filter) {
//     case "today":
//       filteredTodo = allTodo.filter(filters.today);
//       break;
//     case "upcoming":
//       filteredTodo = allTodo.filter(filters.upcoming);
//       break;
//     case "anytime":
//       filteredTodo = allTodo.filter(filters.anytime);
//       break;
//     default:
//       filteredTodo = null;
//   }

//   console.log(filteredTodo);

    const filter = app.filter;
    const filteredItems = [];
    for(let id of app.filteredItems){
        filteredItems.push(app.getItem(id));
    }
    console.log(filteredItems);

  const content = document.getElementById("content");
  //clear out current items if any
  while (content.firstElementChild) {
    content.firstElementChild.remove();
  }
  //populate content
  for (let listObj of app.children) {
    const item = mkList(listObj);
    content.appendChild(item);
    if (listObj.children.length > 0 && listObj.expand) {
      const todos = mkTodoDisplay(listObj.id);
      content.appendChild(todos);
    }
  }
};

export default updateList;
