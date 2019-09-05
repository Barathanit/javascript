var todos = [ "hi this is todo list solution"];

var input = prompt("this is todo...");

if (input === "list"){
    console.log(todos);
} else if(input === "new"){
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
}
while (input  !== "quit"){

}
console.log("Quit the app");