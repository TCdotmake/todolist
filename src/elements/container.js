import containerCSS from './container.css';
import header from './header';
import nav from './navBar';
import content from './content';
import footer from './footer';
const container = document.createElement('div');
container.setAttribute('id', 'container');

container.appendChild(header);
container.appendChild(nav);
container.appendChild(content);
container.appendChild(footer);

export default container;