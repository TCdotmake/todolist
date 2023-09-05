import { uid } from "uid";

const mkContainer = ()=>{
    const container = {
        children: [],
        id: uid(),
    }
    return container;
}
export default mkContainer;