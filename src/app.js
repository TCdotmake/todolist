import creationMethods from "./creationMethods";
import localLoad from "./localLoad";
import managementMethods from "./managementMethods";
import mkContainer from "./mkContainer";

const STORAGE = 'todoAppStorage';
const data = localLoad(STORAGE) || mkContainer();
const app = {
    ...data,
    ...creationMethods,
    ...managementMethods,
}
if(localLoad(STORAGE) == null){
    app.addList('General');
    app.updateMemory();
}

export default app;