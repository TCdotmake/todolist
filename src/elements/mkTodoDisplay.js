import todoCSS from './todo.css';
import app from "../app";
import mkPriorityIcon from "./mkPriorityIcon";

function addSelect(parentNode, target){
    if(parentNode.childnodes){
        const children = parentNode.childnodes;
        for(let index in children){
            children[index].addEventListener('click', (e)=>{
                e.preventDefault();
                let current = document.querySelectorAll(".selected");
                if (current.length > 0) {
                  for (let n of current) n.classList.remove("selected");
                }
                target.classList.add('selected');
            })
        }
    }
}

const mkTodoElement = (todoObj)=>{
    const itemDiv = document.createElement('div');
    itemDiv.dataset.id = todoObj.id;
    itemDiv.dataset.type = 'todo';
    itemDiv.classList.add('todo-item-div');
    const checkBox = document.createElement('div');
    checkBox.classList.add('checkBox');
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

    itemDiv.addEventListener('click', (e)=>{
        e.preventDefault();
        let current = document.querySelectorAll(".selected");
        if (current.length > 0) {
          for (let n of current) n.classList.remove("selected");
        }
        itemDiv.classList.add('selected');
    })

    todoDiv.addEventListener('click', (e)=>{
        e.preventDefault();
        let current = document.querySelectorAll(".selected");
        if (current.length > 0) {
          for (let n of current) n.classList.remove("selected");
        }
        itemDiv.classList.add('selected');
    })

    todoName.addEventListener('click', (e)=>{
        e.preventDefault();
        let current = document.querySelectorAll(".selected");
        if (current.length > 0) {
          for (let n of current) n.classList.remove("selected");
        }
        itemDiv.classList.add('selected');
    })

    todoDesc.addEventListener('click', (e)=>{
        e.preventDefault();
        let current = document.querySelectorAll(".selected");
        if (current.length > 0) {
          for (let n of current) n.classList.remove("selected");
        }
        itemDiv.classList.add('selected');
    })
    icon.addEventListener('click', (e)=>{
        e.preventDefault();
        let current = document.querySelectorAll(".selected");
        if (current.length > 0) {
          for (let n of current) n.classList.remove("selected");
        }
        itemDiv.classList.add('selected');
    })
    dueDate.addEventListener('click', (e)=>{
        e.preventDefault();
        let current = document.querySelectorAll(".selected");
        if (current.length > 0) {
          for (let n of current) n.classList.remove("selected");
        }
        itemDiv.classList.add('selected');
    })

    return itemDiv;
}

const mkTodoDisplay = (parentID)=>{
    const parent = app.getItem(parentID);
    const todoSection = document.createElement('div');
    todoSection.classList.add('todo-display-section');
    if(parent.children.length>0){
        for(let child of parent.children){
            todoSection.appendChild(mkTodoElement(child));
        }
    }

    return todoSection;
}
export default mkTodoDisplay;