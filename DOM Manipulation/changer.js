var button = document.querySelectorAll("button");
var isPurple = false;

button.addEventlistener("click" , function(){
    if (isPurple) {
        document.body.style.background = "white";
    } else {
        document.body.style.background = "purple"
    }
    isPurple = !isPurple!
});

button.addEventlistener("click", function(){
    document.body.classList.toggle("purple");
});

