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

const addToDo = document.createElement('button');
addToDo.innerHTML = 'Add';
addToDo.classList.add('modal-btn');
addToDo.classList.add('confirm-btn');
const reset = document.createElement('button');
reset.innerHTML = 'Reset';
reset.classList.add('modal-btn');
modalBtnBar.appendChild(addToDo);
modalBtnBar.appendChild(reset);
//assembly
modalWindow.appendChild(exitIcon);

modalWindow.appendChild(form);


modalWindow.appendChild(modalBtnBar);

//event listener
exitIcon.addEventListener('click',()=>{
    let opened = document.querySelectorAll('.modal-open');
    for(let item of opened){
        item.classList.remove('modal-open');
    }
    //clean up
    // let content = document.querySelectorAll('.modal-content');
    // for(let child of content){
    //     child.parentNode.removeChild(child);
    // }
})

export default modalWindow;