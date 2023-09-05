//import css
import colorCSS from './colors.css';
import css from "./style.css";
import opensansCSS from './fonts/opensans/opensans.css';
//import visual elements
import container from './elements/container';
import updateVisual from './elements/updateVisual';
// import application logic
import app from './app';
// mounting visual
document.body.appendChild(container);

//app
console.log(app);
updateVisual();

// eventListeners

let shutModal = document.querySelectorAll('.modal-close');
for(let n of shutModal){
    n.addEventListener('click', ()=>{
        let opened = document.querySelectorAll('.modal-open');
        for(let item of opened){
            item.classList.remove('modal-open');
        }
    })
}