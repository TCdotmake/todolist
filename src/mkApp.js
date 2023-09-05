import creationMethods from "./creationMethods";
import localLoad from "./localLoad";
import managementMethods from "./managementMethods";
import mkContainer from "./mkContainer";

const mkApp = () => {
  const data = localLoad("todoAppStorage") || mkContainer();
  const app = {
    ...data,
    ...creationMethods,
    ...managementMethods,
  }
  return app;
};

export default mkApp;
