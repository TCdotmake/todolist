import { uid } from "uid";
import mkContainer from "./mkContainer";

const parent = mkContainer();
const c1 = mkContainer();
const c2 = mkContainer();

parent.addItem(c1);
parent.addItem(c2);

console.log(parent);
console.log(parent.finditem(c1.getId()));
parent.removeitem(c1.getId());
console.log(parent);
parent.removeitem(c2.getId());
console.log(parent);
