const mkModalTrigger = (triggerLabel, modal) => {
  const id = modal.getAttribute("id");
  const trigger = document.createElement("button");
  trigger.classList.add("modal-trigger");
  trigger.innerHTML = triggerLabel;
  trigger.setAttribute("data-modal", id);
  trigger.addEventListener("click", () => {
    document.querySelector(".modal-bg").classList.add("modal-open");
    document.getElementById(id).classList.add('modal-open');
  });
  return trigger;
};

export default mkModalTrigger;
