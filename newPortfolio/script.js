window.onload = function(){
    var btn = document.getElementById("contactBtn");

    function appear(){
        document.getElementById("hiddenDiv").style.display="flex";
        document.getElementById("contactBtn").style.display="none";
    }

    btn.onclick = function(){
        appear();
    };
};