import containerCSS from './container.css';
import header from './header';
import nav from './navBar';
import content from './content';
import footer from './footer';
import addBtn from './addBtn';
import modal_bg from './modalBGandCSS';
import mkTrigger from '../mkModal';
import todoForm from '../todoForm';
import modalWindow from './modalWindow';
const container = document.createElement('div');
container.setAttribute('id', 'container');

const mid = document.createElement('section');
mid.setAttribute('id', 'mid');
mid.appendChild(nav);
mid.appendChild(content);


const trigger = mkTrigger(container, 'add-todo', '+', modalWindow);
trigger.classList.add('add-btn');

container.appendChild(header);
container.appendChild(mid);
container.appendChild(footer);
// container.appendChild(addBtn);
container.appendChild(trigger);
container.appendChild(modal_bg);
export default container;