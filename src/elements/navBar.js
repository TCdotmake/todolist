import navCSS from './navBar.css';
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
    const btn = document.createElement('button');
    btn.classList.add('nav-btn');
    btn.setAttribute('id', label);
    btn.innerHTML = label;
    return btn;
}

for(let n of navBtnArr){
    filters.appendChild(mkNavBtn(n));
}


nav.appendChild(filters)

export default nav;