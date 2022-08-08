

let todos = document.getElementsByClassName('Todo') 
const input = document.getElementById('todoInput')
const todoContainer = document.getElementById('wrapper')
let key = 0
const container = document.querySelector('.todoContainer')
let emptyTodoLayout = `
    <img src="img/empty_todos.svg" />
    <h1>You don't have tasks</h1>
    <p><center>Here you will be able to see the tasks you create. Create a new task now !</center></p>
    
`
const displayEmptyLayout = () => {
    container.style.height = '750px'
    let wrap = document.createElement('div')
    wrap.classList.add('empty')
    wrap.innerHTML = emptyTodoLayout
    container.appendChild(wrap)

}



const displayList = () => {
    document.querySelector('.empty').remove()
}
let total_text = document.querySelector('#total')   
let completed_text = document.querySelector('#completed')

let completed = 0
let total = 0

const addTodo = (value) => {
    if(parseInt(input.value.length) < 2 || input.value === '') {
        console.error("Task name is required")
        return
    } else {
        
        // Display List
        
        if(todos.length === 0) {
            displayList()
        }    

        // Add todo
        let container = document.createElement('div')
        container.setAttribute('id', key++)            
        container.classList.add('Todo')
        todoContainer.appendChild(container)
            

        container.innerHTML = `
                <button class="checkShadow">
                    <span id="checkContainer">
                        <input id="check" type="checkbox"/>
                    </span>
                </button>
            
                <input id="edit" type="text" placeholder="Edit your todo item here" value="${value}"/>
            `
        const remove = document.createElement('button')
        remove.classList.add('delete')
        remove.innerHTML = '<svg id="bin" class="MuiSvgIcon-root MuiSvgIcon-colorError" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>'            
        container.appendChild(remove)
    
        remove.onclick = () => {
            removeTodo(container.getAttribute('id'))
        }
    }
}

const removeTodo = (key) => {
    document.getElementById(key).remove()
    if (todos.length === 0) {
        displayEmptyLayout()
    }
}

