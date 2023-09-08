import containerCSS from './container.css';
import addBtnCSS from './addBtn.css';
import header from './header';
import nav from './navBar';
import content from './content';
import footer from './footer';
import modal_bg from './modalBGandCSS';
import modalWindow from './modalWindow';
import mkModalContent from './mkModalContent';
import mkModalTrigger from './mkModalTrigger';

const container = document.createElement('div');
container.setAttribute('id', 'container');

const mid = document.createElement('section');
mid.setAttribute('id', 'mid');
mid.appendChild(nav);
mid.appendChild(content);

const addModal = mkModalContent('add-modal',modalWindow);
const addTrigger = mkModalTrigger('+', addModal);
addTrigger.classList.add('add-btn');

container.appendChild(header);
container.appendChild(mid);
container.appendChild(footer);

container.appendChild(modal_bg);

container.appendChild(addModal);
container.appendChild(addTrigger);
export default container;