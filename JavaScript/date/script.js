
window.onload = function() {
    var info = document.getElementById("info");
//
    var weekday = ["Sunday","Monday","Tuesday","Wednesday",
    "Thursday","Friday","Saturday"];

    var d = new Date();
    var day = weekday[d.getDay()].fontcolor("yellowgreen");
    info.innerHTML = "Hello, today is " + day;

    info.onclick = function(){
        alert("This is the day of the week");
    };
//
    var zegar = document.getElementById("zegar");
    var clock = new Clock(info);

};