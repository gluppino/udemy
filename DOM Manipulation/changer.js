var button = document.querySelector("button");
// var isPurple = false;

// button.addEventlistener("click" , function(){
//     if (isPurple) {
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple"
//         isPurple = "purple";
//     }
//     isPurple = !isPurple!
// });

button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});