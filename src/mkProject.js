import mkContainer from "./mkContainer";

const mkProject = (title)=>{
    const project = {
        ...mkContainer(),
        title,
        getTitle: function(){return this.title;},
        setTitle: function(newTitle){
            this.title = newTitle;
        },
    };
    return project
};

export default mkProject;

