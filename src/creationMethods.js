import mkContainer from "./mkContainer";
const creationMethods = {
  mkList: function (name) {
    const list = {
      name,
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
      ...mkContainer(),
    };
    return todo;
  },
};

export default creationMethods;
