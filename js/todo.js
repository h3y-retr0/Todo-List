
let todos = document.getElementsByClassName('Todo') 
const input = document.getElementById('todoInput')
const todoContainer = document.getElementById('wrapper')
const container = document.querySelector('.todoContainer')
let emptyTodoLayout = `
    <img src="img/empty_todos.svg" />
    <h1>You don't have tasks</h1>
    <p><center>Here you will be able to see the tasks you create. Create a new task now !</center></p>
    
`

let key = 0
const displayEmptyLayout = () => {
    container.style.height = '750px'
    let wrap = document.createElement('div')
    wrap.classList.add('empty')
    wrap.innerHTML = emptyTodoLayout
    container.appendChild(wrap)
}

const displayList = () => {
    document.querySelector('.empty').remove()
    let footer = document.createElement('div')
    footer.classList.add('todoFooter') 
    footer.innerHTML = `
        <p id="completed">Completed items: 0</p>
        <p id="total">Total items: 0</p>
    `
    container.appendChild(footer)
    container.style.height = ''
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
        

        const btn = document.createElement('button')
        btn.classList.add('checkShadow')

        const checkContainer = document.createElement('span')
        checkContainer.setAttribute('id', 'checkContainer')

        const check = document.createElement('input')
        check.setAttribute('id', 'check')
        check.setAttribute('type', 'checkbox')

        checkContainer.appendChild(check)
        btn.appendChild(checkContainer)
        
        container.appendChild(btn)
        
        let edit = document.createElement('input')
        edit.setAttribute('id', 'edit')
        edit.setAttribute('type', 'text')
        edit.setAttribute('placeholder', 'Edit your todo item here')
        edit.setAttribute('value', value)

        container.appendChild(edit)


        // container.innerHTML = `
        //         <input id="edit" type="text" placeholder="Edit your todo item here" value="${value}"/>
        //     `


        const remove = document.createElement('button')
        remove.classList.add('delete')
        remove.innerHTML = '<svg id="bin" class="MuiSvgIcon-root MuiSvgIcon-colorError" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>'            
        
        container.appendChild(remove)
        
        remove.onclick = () => {
            
            let itemToRemove = findTodo(container.getAttribute('id'))
            itemToRemove.remove()
            // Remove previous and display empty if no todos
            if (todos.length === 0) {
                //Remove previous and display empty
                let foot = document.querySelector('.todoFooter')
                foot.remove()
                displayEmptyLayout()
            }
        }

        check.onclick = () => {
            let itemToCheck = findTodo(container.getAttribute('id'))
            let changeText = (value) => {
                itemToCheck.style.textDecoration = value 
            }
            check.checked ? changeText('line-through') : changeText('none')
        }


    }
}

// const removeTodo = (key) => {
//     document.getElementById(key).remove()
//     if (todos.length === 0) {
//         //Remove previous and display empty
//         let foot = document.querySelector('.todoFooter')
//         foot.remove()
//         displayEmptyLayout()
//     }
// }

const findTodo = (key) => {
    return document.getElementById(key)
}


