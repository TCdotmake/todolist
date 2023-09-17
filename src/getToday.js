function getToday(){
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth();
    month +=1;
    month = month.toString();
    if(month.length < 2){
        month = `0${month}`;
    }
    const day = date.getDate();
    const today = `${year}-${month}-${day}`;
    return today;
}
export default getToday;