
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

function sizeNorm() {
    document.getElementById("text").style.fontSize="32px"
}

function sizeDec() {
    document.getElementById("text").style.fontSize="10px"
}



const test1 = document.getElementById("bigger");
    test1.addEventListener("click", sizeInc);

const test2 = document.getElementById("normal");
    test2.addEventListener("click", sizeNorm);

const test3 = document.getElementById("smaller");
    test3.addEventListener("click", sizeDec);