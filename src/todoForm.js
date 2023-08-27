const todoForm = document.createElement('form');
todoForm.classList.add('todo-form');

todoForm.innerHTML = `
<div class="todo-exit-div">
        <button class="todo-exit-btn modal-close">X</button>
      </div>
      <div class="todo-input">
        <label for="Title">Title</label>
        <input type="text" name="Title" id="todo-title" />
      </div>
      <div class="todo-row">
        <div class="todo-input">
          <label for="Priority">Priority</label>
          <select name="Priority" id="todo-priority">
            <option value="Low">Low</option>
            <option value="Med">Med</option>
            <option value="High">High</option>
          </select>
        </div>
        <div class="todo-input">
          <label for="Due Date">Due Date</label>
          <input type="date" name="Due Date" id="todo-dueDate" />
        </div>
      </div>
      <div class="todo-input">
        <label for="Description">Description</label>
        <textarea
          name="Description"
          id="todo-desc"
          cols="30"
          rows="4"
        ></textarea>
      </div>
      <div class="todo-row">
        <button id="todo-reset">Reset</button>
        <input type="submit" value="Add" id="todo-add" />
      </div>
`;

export default todoForm;