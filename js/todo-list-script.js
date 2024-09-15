let todoList = JSON.parse(localStorage.getItem('todoList')) || [];


renderTodoList()

function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach(function(todoObject){
        const {name, date} = todoObject
        const html = `
        <div>${name}</div> 
        <div>${date}</div>
        <button class="todo-delete-button js-delete-todo-button">Delete</button>`
            
        todoListHTML += html
    })
  
    document.querySelector('.js-show-todos').innerHTML=todoListHTML

    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index)=>{
        deleteButton.addEventListener('click', ()=>{
            todoList.splice(index, 1);
            renderTodoList();
            localStorage.removeItem('todoList')
        }
        )
        })

}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
})



function addTodo(){
    const inputElem =document.querySelector('.js-name-ipt');
    const dateInputElem = document.querySelector('.js-date-ipt')

    const name = inputElem.value;
    const date = dateInputElem.value;
    todoList.push({name, date})
    inputElem.value = ''
    dateInputElem.value=''
    localStorage.setItem('todoList', JSON.stringify(todoList))

    renderTodoList();
}