

document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const sendTodoDiv = document.getElementById('send')
    const sendBtn = document.getElementById('sendBtn')
    const input = document.getElementById('todoInput')
    const deleteBtn = document.getElementsByClassName('delete')

    input.addEventListener('keyup', () => {
        if(parseInt(input.value.length) >= 2) {
            sendBtn.style.fill = '#3d72fe'
            sendBtn.style.cursor = 'pointer'
        } else {
            sendBtn.style.fill = 'gray'
            sendBtn.style.cursor = 'text'
        }
    })

    sendBtn.addEventListener('click', () => {
        // Change Border
        sendTodoDiv.style.borderBottomColor = 'gray'
        sendTodoDiv.style.borderBottomWidth = '1px'
        /****************************************/
        addTodo(input.value)
        input.value = ''
        sendBtn.style.fill = 'gray'
        sendBtn.style.cursor = 'text'
       
    })

    // Funcionalidad al pulsar enter
    
    input.addEventListener('keyup', (e) => {
        if(e.key === 'Enter') {
            addTodo(input.value)
        } else {
            return
        }
    })

    input.addEventListener('click', () => {

        //Change border to blue
        sendTodoDiv.style.borderBottomColor = '#3d72fe'
        sendTodoDiv.style.borderBottomWidth = '2px'
    })

    deleteBtn[0].addEventListener('click', () => {
        deleteTodo()
    })
   

})
