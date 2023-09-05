import creationMethods from "./creationMethods";
import localLoad from "./localLoad";
import managementMethods from "./managementMethods";
import mkContainer from "./mkContainer";

const mkApp = (name) => {
  const data = localLoad(name) || mkContainer();
  const app = {
    ...data,
    ...creationMethods,
    ...managementMethods,
  }
  if(localLoad(name) == null){
    app.updateMemory();
  }
  return app;
};

export default mkApp;
