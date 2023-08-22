import { uid } from "uid";

const mkContainer = ()=>{
    const container = {
        arr: [],
        id: uid(),
        getId: function(){return this.id;},
        addItem: function(item){
            item.parentId = this.id;
            this.arr.push(item);
        },
        finditem: function(id){
            let index = -1;
            for(let n in this.arr){
                if(this.arr[n].id == id){
                    index = n;
                }
            }
            return index;
        },
        removeitem: function(id){
            const index = this.finditem(id);
            if(index>=0){
                this.arr.splice(index, 1);
            }
        },
        getItem: function(id){
            const index = this.finditem(id);
            if(index>=0){
                return this.arr[index];
            }
            return null;
        },
    };
    return container;
}
export default mkContainer;