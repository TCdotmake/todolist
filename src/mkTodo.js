import { uid } from "uid";
const mkTodo = ({ title, desc, priority, dueDate, completed }) => {
  const todo = {
    id: uid(),
    getId: function () {
      return this.id;
    },
    title,
    setTitle: function (title) {
      this.title = title;
    },
    getTitle: function () {
      return this.title;
    },
    desc,
    setDesc: function (desc) {
      this.desc = desc;
    },
    getDesc: function () {
      return this.desc;
    },
    priority,
    setPriority: function (priority) {
      this.priority = priority;
    },
    getPriority: function () {
      return this.priority;
    },
    dueDate,
    setDueDate: function(dueDate){this.dueDate = dueDate;},
    getDueDate: function(){return this.dueDate;},
    completed,
    toggleComplete: function(){this.completed = !this.completed;},
    getCompleted: function(){return this.completed;},
  };
  return todo;
};

export default mkTodo;
