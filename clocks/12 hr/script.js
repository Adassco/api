function displayTime() {
    var dateTime = new Date(); 
    var hrs = dateTime.getHours(); // Gets current hour from the system
    var min = dateTime.getMinutes(); // Gets current minute from the system
    var sec = dateTime.getSeconds(); // Gets current second from the system

    var ampm = document.getElementById('ampm')

    if(hrs >= 12){
        ampm.innerHTML = 'PM';
    }else{
        ampm.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hrs').innerHTML = hrs;
    document.getElementById('mins').innerHTML = min;
    document.getElementById('secs').innerHTML = sec;
}

setInterval(displayTime, 10);