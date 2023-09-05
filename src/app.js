import mkContainer from "./mkContainer";
import localSave from "./localSave";
import localLoad from "./localLoad";
const app = {
    init: function(){
        localStorage.clear();
    },
};

export default app;