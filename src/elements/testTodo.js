import app from "../app";
const mkTodoDisplay = (parentID)=>{
    const parent = app.getItem(parentID);
    console.log(parent.children);
    const todoSection = document.createElement('div');
    return todoSection;
}
export default mkTodoDisplay;