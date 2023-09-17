const mkPriorityIcon = (priority)=>{
    const btn = document.createElement('button');
    const label = document.createElement('p');
    label.innerHTML = priority;
    btn.appendChild(label);
    btn.classList.add('modal-btn');
    btn.classList.add('confirm-btn');
    btn.classList.add('priority-btn');
    btn.classList.add(priority);
    btn.dataset.priority = priority;
    return btn;
};

export default mkPriorityIcon;