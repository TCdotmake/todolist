import { uid } from "uid";
import mkContainer from "./mkContainer";
const rootMethods = {
  //   addProject: function (projectName) {
  //     const project = mkContainer();
  //     project.name = projectName;
  //     this.root.push(project);
  //   },
  //   findProject: function (id) {
  //     let index = -1;
  //     for (let n in this.root) {
  //       if (this.root[n].id == id) {
  //         index = n;
  //       }
  //     }
  //     return index;
  //   },
  //   removeProject: function (id) {
  //     const index = this.findProject(id);
  //     if (index >= 0) {
  //       this.root.splice(index, 1);
  //     }
  //   },
  getID: function () {
    return this.id;
  },
  searchObj: function (obj, id) {
    if (obj.id == id) {
      return obj;
    }
    if (obj.children.length > 0) {
      for (let child of obj.children) {
        let result = searchObj(child, id);
        if (result) {
          return result;
        }
      }
    }
    return undefined;
  },
  addItem: function (parentID, item) {
    item.parentID = parentID;
    const parent = this.searchObj(this, parentID);
    parent.children.push(item);
  },
  getItem: function (id){
    return this.searchObj(this, id);
  },
  removeItem: function(id){
    const parentID = this.getItem(id).parentID;
    const parent = this.getItem(parentID);
    let index = -1;
    for(let n in parent.children){
        if(parent.children[n].id == id){
            index = n;
        }
    }
    parent.children.splice(index, 1);
  }
  
};

export default rootMethods;
