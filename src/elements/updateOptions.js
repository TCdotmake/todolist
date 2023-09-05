import app from "../app";

const defaultOption = document.createElement("option");
defaultOption.innerHTML = "Select List";
defaultOption.setAttribute("selected", true);
defaultOption.setAttribute("disabled", true);
defaultOption.setAttribute("value", null);

const updateOptions = () => {
  const listDropDown = document.getElementById("listDropDown");
  while (listDropDown.firstElementChild) {
    listDropDown.firstElementChild.remove();
  }
  listDropDown.appendChild(defaultOption);
  for (let list of app.children) {
    const item = document.createElement("option");
    item.innerHTML = list.name;
    item.setAttribute("value", list.name);
    listDropDown.appendChild(item);
  }
};

export default updateOptions;
