import mkPriorityIcon from "./mkPriorityIcon";
let lpIcon, mpIcon, hpIcon;
const priorityArr = ['Low', 'Med', 'High'];
const btnArr = [];
for(let n of priorityArr){
    const btn = mkPriorityIcon(n);
    btnArr.push(btn);
}

[lpIcon, mpIcon, hpIcon] = [...btnArr];

export {lpIcon, mpIcon, hpIcon};