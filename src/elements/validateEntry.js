//validateEntry
const validateEntry = ()=>{
    const listDropDown = document.getElementById('listDropDown');
    const todoName = document.getElementById('todoName');
    if(listDropDown.value!='default' && todoName.value!=null && todoName.value!=''){
        return true;
    }
    return false;
}

export default validateEntry;