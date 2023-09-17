import navCSS from './navBar.css';
import app from '../app';
const nav = document.createElement('nav');
nav.setAttribute('id', 'nav');

const filters = document.createElement('ul');

const navBtnArr = [
    'all',
    'pinned',
    'today',
    'upcoming',
    'anytime'
];

const mkNavBtn = (label)=>{
    const btn = document.createElement('li');
    btn.classList.add('nav-btn');
    btn.setAttribute('id', label);
    btn.innerHTML = label;
    return btn;
}

const btnArr = [];

for(let n of navBtnArr){
    btnArr.push(mkNavBtn(n));
}

for(let n of btnArr){
    n.addEventListener('click', e=>{
        e.preventDefault();
        app.changeFilter(n.getAttribute('id'));
    })
    filters.appendChild(n);
}

nav.appendChild(filters)



export default nav;