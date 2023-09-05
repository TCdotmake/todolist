const mkModalContent = (id, content) => {
    const modalContent = document.createElement("div");
    modalContent.setAttribute("id", id);
    modalContent.classList.add("modal");
    modalContent.classList.add("modal-content");
    modalContent.appendChild(content);
    return modalContent;
};
export default mkModalContent;