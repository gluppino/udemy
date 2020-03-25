var toDos = [];

var input = prompt("What would you like to do?");


while (input !== "quit") {

    if (input === "list") {
        console.log(toDos);
    } else if (input === "new") {
        var newTodo = prompt("Enter new todo");
    
        toDos.push(newTodo);
    }

    input = prompt("What would you like to do?");

}

console.log("OK, You quit the app :(")