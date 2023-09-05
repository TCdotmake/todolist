const searchArr = (arr, id)=>{
    for(let child of arr){
        if(child.id == id){
            return child;
        }
        if(child.children){
            let result = searchArr(child.children, id)
            if(result){
                return result;
            }
        }
    }
    return undefined
}

const searchObj = (obj, id)=>{
    if(obj.id == id){
        return obj;
    }
    if(obj.children.length > 0){
        for(let child of obj.children){
            let result = searchObj(child, id);
            if(result){
                return result
            }
        }
    }
    return undefined;
}