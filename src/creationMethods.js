import mkContainer from "./mkContainer";
const mkData = {
    mkProj: function(name){
        const proj = {
            name,
            ...mkContainer(),
        }
        return proj;
    },
    mkToDo: function(name, desc, due, priority){
       const todo = {
        name,
        desc,
        due,
        priority,
        complete: false,
        ...mkContainer(),
       }
        return todo;
    }
};

export default mkData;