const mkModalContent = (id, content) => {
  const modal = document.createElement("div");
  modal.setAttribute("id", id);
  modal.classList.add("modal");
  modal.classList.add("modal-content");
  modal.appendChild(content);
  return modal;
};

const mkModalTrigger = (id, triggerName, modal) => {
  const trigger = document.createElement("button");
  trigger.classList.add("modal-trigger");
  trigger.innerHTML = triggerName;
  trigger.setAttribute("data-modal", id);
  trigger.addEventListener('click',()=>{
    document.body.appendChild(modal);
    document.querySelector('.modal-bg').classList.add('modal-open');
    document.querySelector(`#${id}`).classList.add('modal-open');
  })
  return trigger;
};

const mkModalObj = (id, triggerName, content)=>{
    const modal = mkModalContent(id, content);
    const obj = {
        modal,
        trigger: mkModalTrigger(id, triggerName, modal)
    }
    return obj;
};

export default mkModalObj;


