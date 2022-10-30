window.onload = function(){
    var toTopButton = document.getElementById("toTop");

        window.onscroll = function(){
            var yScrollAxis = window.pageYOffset;
            var toTopButton = document.getElementById("toTop");

                if(yScrollAxis > 175)
                    toTopButton.style.display = "block";
                else 
                    toTopButton.style.display = "none";
        };

        toTopButton.onclick = function(){
            window.scrollBy(0, -1 * window.pageYOffset);
        };
};