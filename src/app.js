import creationMethods from "./creationMethods";
import localLoad from "./localLoad";
import managementMethods from "./managementMethods";
import mkContainer from "./mkContainer";
import dummydata from "./data";
const STORAGE = "todoAppStorage";
console.log(localLoad(STORAGE));
const data = localLoad(STORAGE) || dummydata;
const app = {
  ...data,
  ...creationMethods,
  ...managementMethods,
};
if (localLoad(STORAGE) == null) {
  app.addList("General");
  app.updateMemory();
}

export default app;
