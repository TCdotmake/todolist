import app from "../app";
import mkList from "./mkList";
import mkTodoDisplay from "./mkTodoDisplay";
import filters from "../filters";

const updateList = ()=>{

    const lists = structuredClone(app.children);
    const allTodo = [];
    for(let list of lists){
        for(let todo of list.children){
            allTodo.push(todo);
        }
    }
    console.log('all todo');
    console.log(allTodo);
    let filteredTodo = [];
    const filter = app.filter;
    if(filter == 'today'){
        filteredTodo = allTodo.filter(filters.today);
        console.log('today filter');
    }
    if(filter == 'upcoming'){
        filteredTodo = allTodo.filter(filters.upcoming);
        console.log('upcoming filter');
    }
    if(filter == 'anytime'){
        filteredTodo = allTodo.filter(filters.anytime);
        console.log('anytime filter');
    }
    console.log(filteredTodo);

    const content = document.getElementById('content');
    //clear out current items if any
    while(content.firstElementChild){
        content.firstElementChild.remove();
    }
    //populate content
    for(let listObj of app.children){
        const item = mkList(listObj);
        content.appendChild(item);
    if(listObj.children.length > 0 && listObj.expand){
        const todos = mkTodoDisplay(listObj.id);
        content.appendChild(todos);
    }
}
}

export default updateList;
