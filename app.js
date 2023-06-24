let inputBox = document.getElementById("input")
let btn = document.getElementById("btn")
let totalTodoCount = document.getElementById("totaltodos")

let todoArray = []

function addTodo(){
    let userEnteredValue = inputBox.value;
    todoArray.push(userEnteredValue);
    console.log(todoArray)
    calculateTodos()
}
btn.addEventListener("click",addTodo)

function calculateTodos(){
    let totalcount = todoArray.length;
    totalTodoCount.innerText = totalcount;
    console.log(totalcount)
}