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