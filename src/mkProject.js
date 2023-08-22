import mkContainer from "./mkContainer";

const mkProject = (title)=>{
    const project = {
        title,
        ...mkContainer(),
    };
    return project
};

export default mkProject;

