import mkList from "./mkList";

function mkFilterList(listObj){
    const list = mkList(listObj);
    list.dataset.type = 'filter';
    list.lastChild.dataset.type = 'filter';
    return list;
}

export default mkFilterList;