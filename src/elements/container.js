import containerCSS from './container.css';
import header from './header';
import nav from './navBar';
import content from './content';
import footer from './footer';
import addBtn from './addBtn';
const container = document.createElement('div');
container.setAttribute('id', 'container');

const mid = document.createElement('section');
mid.setAttribute('id', 'mid');
mid.appendChild(nav);
mid.appendChild(content);


container.appendChild(header);
// container.appendChild(nav);
// container.appendChild(content);
container.appendChild(mid);
container.appendChild(footer);
container.appendChild(addBtn);

export default container;