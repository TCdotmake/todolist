//import css
import colorCSS from './colors.css';
import css from "./style.css";
import opensansCSS from './fonts/opensans/opensans.css';
//import visual elements
import container from './elements/container';
import mkApp from './mkApp';
// import application logic

// mounting visual
document.body.appendChild(container);

//app
const app = mkApp();
console.log(app);


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