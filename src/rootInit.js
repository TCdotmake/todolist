import mkContainer from "./mkContainer";

// new app root, data only
const rootInit = ()=>{
    const rootObj = {
        ...mkContainer(),
    }
    return rootObj;
};

export default rootInit;
