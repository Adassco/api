function displayTime() {
    var dateTime = new Date(); 
    var hrs = dateTime.getHours(); // Gets current hour from the system
    var min = dateTime.getMinutes(); // Gets current minute from the system
    var sec = dateTime.getSeconds(); // Gets current second from the system

    document.getElementById('hrs').innerHTML = hrs;
    document.getElementById('mins').innerHTML = min;
    document.getElementById('secs').innerHTML = sec;
}

setInterval(displayTime, 10);