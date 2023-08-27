const mkModalContent = (id, content) => {
  const modal = document.createElement("div");
  modal.setAttribute("id", id);
  modal.classList.add("modal");
  modal.classList.add("modal-content");
  modal.appendChild(content);
  return modal;
};

const mkModalTrigger = (id, triggerName) => {
  const trigger = document.createElement("button");
  trigger.classList.add("modal-trigger");
  trigger.innerHTML = triggerName;
  trigger.setAttribute("data-modal", id);
  return trigger;
};

const mkModalObj = (id, triggerName, content)=>{
    const obj = {
        modal: mkModalContent(id, content),
        trigger: mkModalTrigger(id, triggerName)
    }
    return obj;
};

export default mkModalObj;


