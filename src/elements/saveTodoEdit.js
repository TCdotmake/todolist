import app from "../app";

function saveTodo(){
    const name = document.getElementById('edit-todo-name').value;
      const desc = document.getElementById('edit-todo-desc').value;
      const due = document.getElementById('edit-due-date').value;
      const priority = document.getElementById('edit-todo-misc').firstChild.dataset.priority;
      const selected = document.querySelector('.selected');
      const id = selected.dataset.id;
      const todoObj = {name, desc, due, priority};
      app.editTodo(id, todoObj);
}

export default saveTodo;