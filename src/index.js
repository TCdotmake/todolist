//import css
import colorCSS from './colors.css';
import css from "./style.css";
import opensansCSS from './fonts/opensans/opensans.css';
//import visual elements
import header from './elements/header';
import footer from './elements/footer';
import nav from './elements/navBar';
document.body.appendChild(header);
document.body.appendChild(nav);
document.body.appendChild(footer);
// eventListeners

let shutModal = document.querySelectorAll('.modal-close');
for(let n of shutModal){
    n.addEventListener('click', ()=>{
        let opened = document.querySelectorAll('.modal-open');
        for(let item of opened){
            item.classList.remove('modal-open');
        }
        //clean up
        let content = document.querySelectorAll('.modal-content');
        for(let child of content){
            child.parentNode.removeChild(child);
        }
    })
}