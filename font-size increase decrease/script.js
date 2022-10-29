
/*
function size50()
{
    document.getElementById("lorem").style.fontSize="50px";
}

function size10()
{
    document.getElementById("lorem").style.fontSize="10px";
}

*/

function sizeInc() {
    document.getElementById("text").style.fontSize="50px";
}

function sizeDec() {
    document.getElementById("text").style.fontSize="10px"
}
function sizeNorm() {
    document.getElementById("text").style.fontSize="32px"
}

var test1 = document.getElementById("bigger");
    test1.onclick = sizeInc;

var test2 = document.getElementById("normal");
    test2.onclick = sizeNorm;

var test3 = document.getElementById("smaller");
    test3.onclick = sizeDec;