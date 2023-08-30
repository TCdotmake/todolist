import css from "./style.css";
import mkModalObj from "./mkModal";
import modal_bg from "./modalBGandCSS";
import todoForm from './todoForm';
import opensansCSS from './fonts/opensans/opensans.css';
document.body.appendChild(modal_bg);
let todoModalObj = mkModalObj('todoModal', 'Add Todo', todoForm);
document.body.appendChild(todoModalObj.trigger);



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