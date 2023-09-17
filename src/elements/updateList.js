import app from "../app";
import mkList from "./mkList";
import mkTodoDisplay from "./mkTodoDisplay";



const updateList = ()=>{
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
