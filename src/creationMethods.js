import mkContainer from "./mkContainer";
const creationMethods = {
  mkList: function (name) {
    const list = {
      name,
      expand: false,
      ...mkContainer(),
    };
    return list;
  },
  mkTodo: function (name, desc, due, priority) {
    const todo = {
      name,
      desc,
      due,
      priority,
      complete: false,
      pinned: false,
      ...mkContainer(),
    };
    return todo;
  },
};

export default creationMethods;
