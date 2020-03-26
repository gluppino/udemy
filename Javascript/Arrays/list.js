var toDos = [];

var input = prompt("What would you like to do?");


while (input !== "quit") {

    if (input === "list") {
        console.log(**********);
        toDos.forEach(function(todo, index) {
        console.log(i + ": " + toDos);
        console.log(**********);
        });
    } else if (input === "new") {
        var newTodo = prompt("Enter new todo");
    
        toDos.push(newTodo);
    } else if (input === "delete") {}

    input = prompt("What would you like to do?");

}

console.log("OK, You quit the app :(")