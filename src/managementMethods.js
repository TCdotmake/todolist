import { uid } from "uid";
import mkContainer from "./mkContainer";
import STORAGE from "./storageName";
import localLoad from "./localLoad";
import localSave from "./localSave";
const managementMethods = {
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
  updateMemory: function(){
    localSave(STORAGE, this);
    console.log('Store Updated');
    console.log(localLoad(STORAGE));
  },
  getID: function () {
    return this.id;
  },
  searchObj: function (obj, id) {
    if (obj.id == id) {
      return obj;
    }
    if (obj.children.length > 0) {
      for (let child of obj.children) {
        let result = this.searchObj(child, id);
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
    this.updateMemory();
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
    this.updateMemory();
  },
  addList: function(name){
    this.addItem(this.id, this.mkList(name));
  },
  addTodo: function(parentID, name, desc, due, priority){
    this.addItem(parentID, mkTodo(name, desc, due, priority));
  }
};

export default managementMethods;
