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

footer.appendChild(pinIcon);
footer.appendChild(editIcon);
footer.appendChild(trashIcon);

export default footer;