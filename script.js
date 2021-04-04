function menuFunction(x) {
    x.classList.toggle("change")

    var y = document.getElementById("myTopnav");
    if (y.className === "topnav") {
        y.className += " responsive";
    } else {
        y.className = "topnav";
    }
};