function inn() {
    document.getElementById("top").style.background = "white";
    document.getElementById("in").style.background = "lime";
    document.getElementById("in").style.border = "1px solid black";
    document.getElementById("in").style.transform = "translate(243px)";
    document.getElementById("h").style.visibility = "visible";
}
function innn() {
    document.getElementById("top").style.background = "white";
    document.getElementById("inn").style.background = "lime";
    document.getElementById("top").style.border = "2px solid white";
    document.getElementById("inn").style.transform = "translate(244px)";
}
function dark() {
    document.getElementById("body1").style.background = "black";
    document.getElementById("body1").style.transition = "2s";
    document.getElementById("top").style.border = "2px solid white";
    document.getElementById("white").style.background = "black";
    document.getElementById("white").style.color = "white";
    document.getElementById("white").style.border = "2px solid white";
    document.getElementById("white").style.boxShadow = "none";
    document.getElementById("dark").style.boxShadow = "0px 0px 10px yellow";
}
function white() {
    document.getElementById("body1").style.background = "white";
    document.getElementById("body1").style.transition = "2s";
    document.getElementById("top").style.border = "2px solid black";
    document.getElementById("white").style.color = "white";
    document.getElementById("white").style.background = "black";
    document.getElementById("white").style.borderColor = "black";
    document.getElementById("white").style.boxShadow = "0px 0px 10px red";
    document.getElementById("dark").style.border = "2px solid black";
    document.getElementById("dark").style.background = "white";
    document.getElementById("dark").style.boxShadow = "none";
}
