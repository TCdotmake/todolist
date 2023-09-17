import app from "../app";
import mkList from "./mkList";
import mkTodoDisplay from "./mkTodoDisplay";
import mkFilterList from "./mkFilterList";
const updateList = () => {

  const content = document.getElementById("content");
  //clear out current items if any
  while (content.firstElementChild) {
    content.firstElementChild.remove();
  }

  //filter if any
  const filter = app.filter;
  const filteredItems = [];
  if (app.filteredItems != null) {
    for (let id of app.filteredItems) {
      filteredItems.push(app.getItem(id));
    }
  };

  if (app.filter != null && app.filter != 'all') {
    const filterListObj = app.mkList(filter);
    const filterList = mkFilterList(filterListObj);
    content.appendChild(filterList);
    if(app.filterExpand){
        const todos = mkTodoDisplay(filteredItems);
        content.appendChild(todos);
    }
  }

  //populate content
  for (let listObj of app.children) {
    const item = mkList(listObj);
    content.appendChild(item);
    if (listObj.expand) {
      const todos = mkTodoDisplay(listObj.children);
      content.appendChild(todos);
    }
    
  }
};

export default updateList;
