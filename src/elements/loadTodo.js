import mkPriorityIcon from "./mkPriorityIcon";
import app from "../app";
function loadTodo(){

    // make icons
    let lpIcon, mpIcon, hpIcon;
    const priorityArr = ["Low", "Med", "High"];
    const btnArr = [];
    for (let n of priorityArr) {
      const btn = mkPriorityIcon(n);
      btnArr.push(btn);
    }
    [lpIcon, mpIcon, hpIcon] = [...btnArr];
    
    lpIcon.addEventListener("click", (e) => {
        e.preventDefault();
        lpIcon.replaceWith(mpIcon);
      });
      mpIcon.addEventListener("click", (e) => {
        e.preventDefault();
        mpIcon.replaceWith(hpIcon);
      });
      hpIcon.addEventListener("click", (e) => {
        e.preventDefault();
        hpIcon.replaceWith(lpIcon);
      }); 

      // load items
      const name = document.getElementById('edit-todo-name');
      const desc = document.getElementById('edit-todo-desc');
      const due = document.getElementById('edit-due-date');
      const icon = document.getElementById('edit-todo-misc').firstChild;
      const selected = document.querySelector('.selected');
      const id = selected.dataset.id;
      const todo = app.getItem(id);
      name.value = todo.name;
      desc.value = todo.desc;
      console.log(todo.due);
      due.value = todo.due;
      const priority = todo.priority;
      if(priority == 'Low'){
          icon.replaceWith(lpIcon);
      }else if(priority == 'Med'){
          icon.replaceWith(mpIcon);
      }else{
          icon.replaceWith(hpIcon);
      }
}

export default loadTodo;