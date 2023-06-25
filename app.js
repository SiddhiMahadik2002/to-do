let inputBox = document.getElementById("input")
let btn = document.getElementById("btn")
let totalTodoCount = document.getElementById("totaltodos")
let displayTodosArea = document.getElementById("displayTodosArea")

let todoArray = []

function addTodo(){
    let userEnteredValue = inputBox.value;
    if(userEnteredValue.length >= 1){  
        todoArray.push(userEnteredValue);

    calculateTodos();
    displayTodos();
     inputBox.value = "";
    }
    else{
        alert("Please enter something")
    }
}
btn.addEventListener("click",addTodo)

function calculateTodos(){
    let totalcount = todoArray.length;
    totalTodoCount.innerText = totalcount;
   
}

function displayTodos(){
    let todos = ""
    for(let i = 0; i < todoArray.length ;i++){
        todos = todos + `
        <div class="singletodo">
                    <p>${ todoArray[i] }</p>
                
                    <button>
                        <ion-icon name="trash"></ion-icon>
                    </button>
                    
        </div>
        `
    }
    displayTodosArea.innerHTML = todos;

}