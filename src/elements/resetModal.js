import { lpIcon } from "./priorityIcons";
function resetModal(){
    document.getElementById('listDropDown').selectedIndex = 0;
    document.getElementById('list-input').value = '';
    document.getElementById('todoName').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('todoMisc').firstChild.replaceWith(lpIcon);
}

export default resetModal;