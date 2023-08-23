import mkContainer from "./mkContainer";

const mkProject = (title)=>{
    const project = {
        title,
        getTitle: function(){return this.title;},
        setTitle: function(newTitle){
            this.title = newTitle;
        },
        ...mkContainer(),
    };
    return project
};

export default mkProject;

