const calendar = document.createElement('input');
calendar.setAttribute('type', 'date');
calendar.setAttribute('id','datePicker');
calendar.addEventListener('change', function(){
    const date = new Date(this.value);
    console.log(date);
})

export default calendar;