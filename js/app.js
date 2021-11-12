// alert('the js is working ');

//selectors

const todoImput     = document.querySelector('.todo-input');
const todoButton    = document.querySelector('.todo-button');
const todoList      = document.querySelector('.todo-list');
const filterOption  = document.querySelector(".filter-todo");

//Event Listeners


todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletChecked);
filterOption.addEventListener("click", filterTodo);

//Functions


function addTodo(event){
    
    //Prevent Form form submitting
    event.preventDefault();

    //tODO div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create LI

    const newTodo = document.createElement("li");
    newTodo.innerText = todoImput.value;
    newTodo.classList.add("todo-item");


    todoDiv.appendChild(newTodo);
    

    //CHECK MARK BUTTON

    const completeButton = document.createElement('button');
    completeButton.innerHTML = "<i class='fas fa-check'></i>";
    completeButton.classList.add("complete-btn");

    todoDiv.appendChild(completeButton);


    //TRASH BUTTON

    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");

    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoImput.value = "";

}

function deletChecked(e){
    // console.log(e.target);
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
        // alert(item.innerText);
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
        // todo.remove();
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        // alert('jesus is lord');
    }
}


function filterTodo(e){
    const todos = todoList.childNodes;
    console.log(todos.classList);
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                // todo.style.displey = "flex";
                 console.log("all");
                break;
            case "completed":
                console.log("complete");
                try {
                    if(todo.classList.contains("todo")){
                    todo.style.displey = "flex";
                    }else{
                        todo.style.displey = "none";
                    }
                } catch (error) {
                    console.log(error);
                }
                
        }
    });


    // if(e.target.value === 'all') {
    //         // alert('all');
    //     }else if(e.target.value === 'completed'){
    //         if (todo.classList.contains('completed')) {
    //             todo.style.display = 'flex';
    //         }else{
    //             todo.style.display = "none";
    //         }

    //     }else if(e.target.value === 'unCompleted'){
    //         // alert('unCompleted');
    //     }

    // todos.forEach(element => {
        
    // });
    console.log(todos);
}