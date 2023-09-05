import listCSS from './list.css';
import ThreeDots from '../icons/threeDots.png';
import mkIcon from '../icons/mkIcon';
const mkList = (listObj) =>{
    const list = document.createElement('div');
    list.classList.add('list');
    list.dataset.id = listObj.id;
    const listName = document.createElement('p');
    listName.innerText = listObj.name;
    list.appendChild(listName);
    list.appendChild(mkIcon(ThreeDots));
    return list;
}

export default mkList;