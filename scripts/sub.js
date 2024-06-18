var sub = document.getElementById('submit');
var open = document.getElementById('add');
var close = document.getElementById('closePop');
var popUp = document.getElementById("popBlock");
open.addEventListener("click", function (){
    console.log("clicked");
    popUp.style.display = "block";
});

sub.addEventListener("click", function(){
    console.log("closed");
    popUp.style.display = "none";
});

close.addEventListener("click", function(){
    console.log("closed");
    popUp.style.display = "none";
})
