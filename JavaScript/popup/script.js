function colorChange1(){
    document.body.style.backgroundColor = "yellowgreen";
};

function changeBack(){
    myBtn2.style.display = "block";
};

window.onload = function(){
    var myBtn1 = document.getElementById("myBtn");
    var myBtn2 = document.getElementById("myBtn2");
    myBtn1.onclick = function(){
        var yes = confirm("are you sure you want to change me to yellowgreen?")
        if (yes)
            colorChange1();
            setTimeout(changeBack, 2500);
    }
    myBtn2.onclick = function(){
        var yes2 = confirm("do you want to change me back?")
        if (yes2) {
            document.body.style.backgroundColor = "#252525";
            myBtn2.style.display = "none";
        }
    };
};