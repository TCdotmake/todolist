import { uid } from "uid";
import mkContainer from "./mkContainer";
import STORAGE from "./storageName";
import localLoad from "./localLoad";
import localSave from "./localSave";
import updateVisual from "./elements/updateVisual";
import getToday from "./getToday";
const managementMethods = {
  updateMemory: function () {
    localSave(STORAGE, this);
    updateVisual();
    console.log("Store Updated");
    console.log(localLoad(STORAGE));
  },

  // add, remove, delete
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
  getItem: function (id) {
    return this.searchObj(this, id);
  },
  removeItem: function (id) {
    const parentID = this.getItem(id).parentID;
    const parent = this.getItem(parentID);
    let index = -1;
    for (let n in parent.children) {
      if (parent.children[n].id == id) {
        index = n;
      }
    }
    parent.children.splice(index, 1);
    this.updateMemory();
  },
  addList: function (name) {
    this.addItem(this.id, this.mkList(name));
  },
  addTodo: function (parentID, name, desc, due, priority) {
    this.addItem(parentID, this.mkTodo(name, desc, due, priority));
  },

  // edit

  editList: function (id, name) {
    this.getItem(id).name = name;
    this.updateMemory();
  },
  editTodo: function (id, { name, desc, due, priority }) {
    this.getItem(id).name = name;
    this.getItem(id).desc = desc;
    this.getItem(id).due = due;
    this.getItem(id).priority = priority;
    this.updateMemory();
  },
  toggleComplete(id) {
    this.getItem(id).complete = !this.getItem(id).complete;
    this.updateMemory();
  },
  toggleExpand(id) {
    this.getItem(id).expand = !this.getItem(id).expand;
    this.updateMemory();
  },

  // filter
  changeFilter(filter) {
    this.filter = filter;
    this.updateFilterItems();
    this.filterExpand = true;
    for(let list of this.children){
      list.expand = false;
    }
    this.updateMemory();
  },
  getToday() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth();
    month += 1;
    month = month.toString();
    if (month.length < 2) {
      month = `0${month}`;
    }
    const day = date.getDate();
    const today = `${year}-${month}-${day}`;
    return today;
  },
  filters: {
    today(obj) {
      const today = getToday().toString();
      const due = obj.due.toString();
      if (due == today) {
        return true;
      }
      return false;
    },
    upcoming(obj) {
      const today = getToday().toString();
      const due = obj.due.toString();
      if (due > today) {
        return true;
      }
      return false;
    },
    anytime(obj) {
      const due = obj.due.toString();
      if (due == "" || due == null) {
        return true;
      }
      return false;
    },
  },
  getAllTodo() {
    const allTodo = [];
    for (let list of this.children) {
      for (let todo of list.children) {
        allTodo.push(todo);
      }
    }
    return allTodo;
  },
  updateFilterItems() {
    const filter = this.filter;
    const allTodo = this.getAllTodo();
    let filteredTodo = [];
    switch (filter) {
      case "today":
        filteredTodo = allTodo.filter(this.filters.today);
        break;
      case "upcoming":
        filteredTodo = allTodo.filter(this.filters.upcoming);
        break;
      case "anytime":
        filteredTodo = allTodo.filter(this.filters.anytime);
        break;
      default:
        filteredTodo = null;
    };
    if(filteredTodo != null){
      this.filteredItems = filteredTodo.map(todo=>todo.id);
    }
    else{this.filteredItems = null;}
  },
  toggleFilterExpand(){
    if(this.filterExpand == null){
      this.filterExpand = true;
    }
    else{
      this.filterExpand = !this.filterExpand;
    }
    this.updateMemory();
  },
};

export default managementMethods;
