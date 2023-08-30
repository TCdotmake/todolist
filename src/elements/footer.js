import footerCSS from './footer.css';

import iconCSS from '../icons/icons.css';
import mkIcon from '../icons/mkIcon';
import Pin from '../icons/pin.png';
import Edit from '../icons/edit.png';
import Trash from '../icons/trash.png';
const footer = document.createElement('section');
footer.setAttribute('id','footer');

const pinIcon = mkIcon(Pin);
const editIcon = mkIcon(Edit);
const trashIcon = mkIcon(Trash);

const icons = [mkIcon(Pin),mkIcon(Edit),mkIcon(Trash)];

const actionBar = document.createElement('ul');

for(let icon of icons){
    const item = document.createElement('li');
    item.appendChild(icon);
    actionBar.appendChild(item);
}

footer.appendChild(actionBar);

export default footer;