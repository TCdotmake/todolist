const mkModalContent = (id, content) => {
  const modal = document.createElement("div");
  modal.setAttribute("id", id);
  modal.classList.add("modal");
  modal.classList.add("modal-content");
  modal.appendChild(content);
  return modal;
};

const mkModalTrigger = (container, id, triggerLabel, modal) => {
  container.appendChild(modal);
  const trigger = document.createElement("button");
  trigger.classList.add("modal-trigger");
  trigger.innerHTML = triggerLabel;
  trigger.setAttribute("data-modal", id);
  trigger.addEventListener('click',()=>{
    // container.appendChild(modal);
    document.querySelector('.modal-bg').classList.add('modal-open');
    document.querySelector(`#${id}`).classList.add('modal-open');
  })
  return trigger;
};

const mkTrigger = (container, id, triggerLabel, content)=>{
    const modal = mkModalContent(id, content);
    const trigger = mkModalTrigger(container, id, triggerLabel, modal);
    return trigger;
};

export default mkTrigger;


