import app from "../app";
import mkList from "./mkList";



const updateList = ()=>{
    const content = document.getElementById('content');
    console.log(content);
    //clear out current items if any
    while(content.firstElementChild){
        content.firstElementChild.remove();
    }
    //populate content
    for(let listObj of app.children){
        const item = mkList(listObj);
        content.appendChild(item);
    };

}

export default updateList;
