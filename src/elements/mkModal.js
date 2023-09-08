const mkModalContent = (id, content) => {
  const modalContent = document.createElement("div");
  modalContent.setAttribute("id", id);
  modalContent.classList.add("modal");
  modalContent.classList.add("modal-content");
  modalContent.appendChild(content);
  return modalContent;
};

const mkModalTrigger = (container, id, triggerLabel, modal) => {
  container.appendChild(modal);
  const trigger = document.createElement("button");
  trigger.classList.add("modal-trigger");
  trigger.innerHTML = triggerLabel;
  trigger.setAttribute("data-modal", id);
  trigger.addEventListener('click',()=>{
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


