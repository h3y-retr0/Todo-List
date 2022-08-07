
const input = document.getElementById('todoInput')
const todoContainer = document.getElementById('wrapper')

    const addTodo = (value) => {
        if(parseInt(input.value.length) < 2 || input.value === '') {
            console.error("Task name is required")
            return
        } else {
            // Add todo
            
            let container = document.createElement('div')
            container.setAttribute('id', 'Todo')
            container.classList.add('Todo')
            todoContainer.appendChild(container)
           

            container.innerHTML = `
                <button class="checkShadow">
                    <span id="checkContainer">
                        <input id="check" type="checkbox"/>
                    </span>
                </button>
            
                <input id="edit" type="text" placeholder="Edit your todo item here" value="${value}"/>
                <button class="delete">
                    <svg id="bin" class="MuiSvgIcon-root MuiSvgIcon-colorError" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                </button>
            `

            var id = 0
            var id = id + 1
            console.log(id)
            
        }
    }

    const deleteTodo = () => {
        let items = document.getElementsByClassName('Todo')
        console.log()
    }
