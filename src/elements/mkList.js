import listCSS from './list.css';
import ThreeDots from '../icons/threeDots.png';
import mkIcon from '../icons/mkIcon';
const mkList = (name) =>{
    const list = document.createElement('div');
    list.classList.add('list');
    const listName = document.createElement('p');
    listName.innerText = name;
    list.appendChild(listName);
    list.appendChild(mkIcon(ThreeDots));
    return list;
}

export default mkList;