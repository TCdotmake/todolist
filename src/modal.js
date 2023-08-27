
import modalCSS from './modal.css';
import todoForm from './todoForm';

const modal_bg = document.createElement('div');
modal_bg.classList.add('modal');
modal_bg.classList.add('modal-bg');
modal_bg.classList.add('modal-close');

const trigger1 = document.createElement('button');
trigger1.classList.add('modal-trigger');
trigger1.innerHTML='trigger1'
trigger1.setAttribute('data-modal', 'modal1');
const trigger2 = document.createElement('button');
trigger2.classList.add('modal-trigger');
trigger2.innerHTML='trigger2';
trigger2.setAttribute('data-modal', 'modal2');

const modal1 = document.createElement('div');
modal1.setAttribute('id', 'modal1');
modal1.classList.add('modal');
modal1.classList.add('modal-content');
modal1.appendChild(todoForm);


export {trigger1, trigger2, modal_bg, modal1};