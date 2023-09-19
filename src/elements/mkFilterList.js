import mkList from "./mkList";
import app from "../app";
import ThreeDots from "../icons/threeDots.png";
import Up from "../icons/up.png";
import mkIcon from "../icons/mkIcon";

function mkFilterList(listObj) {
  const list = mkList(listObj);
  list.dataset.type = "filter";
  list.dataset.name = listObj.name;
  let icon;
  if (app.filterExpand) {
    icon = mkIcon(Up);
  } else {
    icon = mkIcon(ThreeDots);
  }

  console.log(app.filteredItems.length);
  const total = app.filteredItems.length;
  let completed = 0;
  for(let id of app.filteredItems){
    if(app.getItem(id).complete){completed +=1;}
  }
  const counter = list.children[1];
  counter.innerHTML = `(${completed}/${total})`;
  


  list.lastChild.replaceWith(icon);
  list.lastChild.dataset.type = "filter";

  icon.addEventListener('click', e=>{
    e.preventDefault();
    app.toggleFilterExpand();

  })

  return list;
}

export default mkFilterList;
