import modalWindowCSS from './modalWindow.css';
import Exit from '../icons/exit.png';
import mkIcon from '../icons/mkIcon';
import form from './modalForm';

const modalWindow = document.createElement('div');
modalWindow.classList.add('modal-window');

const exitIcon = mkIcon(Exit);

//modal btn bar
const modalBtnBar = document.createElement('div');
modalBtnBar.classList.add('modal-btn-bar');

const next = document.createElement('button');
next.innerHTML = 'Add';
next.classList.add('modal-btn');
next.classList.add('confirm-btn');
const reset = document.createElement('button');
reset.innerHTML = 'Reset';
reset.classList.add('modal-btn');

//assembly
modalWindow.appendChild(exitIcon);

modalWindow.appendChild(form);

modalBtnBar.appendChild(next);
modalBtnBar.appendChild(reset);
modalWindow.appendChild(modalBtnBar);

//event listener
exitIcon.addEventListener('click',()=>{
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

export default modalWindow;