import todoCSS from './todo.css';
import app from "../app";
import mkPriorityIcon from "./mkPriorityIcon";
const mkTodoElement = (todoObj)=>{
    const itemDiv = document.createElement('div');
    itemDiv.dataset.id = todoObj.id;
    itemDiv.classList.add('todo-item-div');
    const checkBox = document.createElement('div');
    const todoDiv = document.createElement('div');
    const todoName = document.createElement('p');
    todoName.innerHTML = todoObj.name;
    const todoDesc = document.createElement('p');
    todoDesc.innerHTML = todoObj.desc;
    todoDesc.classList.add('todo-desc');
    const icon = mkPriorityIcon(todoObj.priority);
    const dueDate = document.createElement('p');
    dueDate.innerHTML = todoObj.due;
    //assembly
    todoDiv.appendChild(todoName);
    todoDiv.appendChild(todoDesc);
    itemDiv.appendChild(checkBox);
    itemDiv.appendChild(todoDiv);
    itemDiv.appendChild(icon);
    itemDiv.appendChild(dueDate);
    return itemDiv;
}

const mkTodoDisplay = (parentID)=>{
    const parent = app.getItem(parentID);
    console.log(parent.children);
    const todoSection = document.createElement('div');
    todoSection.classList.add('todo-display-section');
    for(let child of parent.children){
        todoSection.appendChild(mkTodoElement(child));
    }
    return todoSection;
}
export default mkTodoDisplay;