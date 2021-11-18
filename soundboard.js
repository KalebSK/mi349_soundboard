const button1 = document.getElementById("blip");
const button2 = document.getElementById("blurp");
const button3 = document.getElementById("boing");

var loadListeners = function() {
    button1.addEventListener("mouseenter", function() {
        document.getElementById("blp").play();
    });
    
    button1.addEventListener("click", function() {
        document.getElementById("bloop").play();;
    });
    
    button2.addEventListener("mouseenter", function() {
        document.getElementById("blrp").play();;
    });
    
    button2.addEventListener("click", function() {
        document.getElementById("boing1").play();;
    });
    
    button3.addEventListener("mouseenter", function() {
        document.getElementById("boing2").play();;

    });
    
    button3.addEventListener("click", function() {
        document.getElementById("boing3").play();;
    });
}

window.onload =(e) => {
    loadListeners();
}




