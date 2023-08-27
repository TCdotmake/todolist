import css from "./style.css";
import todoForm from "./todoForm";
import { trigger1, trigger2, modal_bg, modal1} from "./modal";

document.body.appendChild(trigger1);
document.body.appendChild(trigger2);
document.body.appendChild(modal_bg);
document.body.appendChild(modal1);

let triggers = document.querySelectorAll('.modal-trigger');
for(let n of triggers){
    n.addEventListener('click', ()=>{
        console.log(n.dataset.modal);
        document.querySelector('.modal-bg').classList.add('modal-open');
        document.querySelector(`#${n.dataset.modal}`).classList.add('modal-open');
    })
}

let shutModal = document.querySelectorAll('.modal-close');
for(let n of shutModal){
    n.addEventListener('click', ()=>{
        let opened = document.querySelectorAll('.modal-open');
        for(let item of opened){
            item.classList.remove('modal-open');
        }
    })
}