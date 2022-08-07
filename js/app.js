
'use strict'

const sendTodoDiv = document.getElementById('send')
const sendBtn = document.getElementById('sendBtn')
const input = document.getElementById('todoInput')


input.addEventListener('keyup', () => {
    if(parseInt(input.value.length) >= 2) {
        sendBtn.style.fill = '#3d72fe'
    } else {
        sendBtn.style.fill = 'gray'
    }
})

sendBtn.addEventListener('click', () => {
    // Change Border
    sendTodoDiv.style.borderBottomColor = 'gray'
    sendTodoDiv.style.borderBottomWidth = '1px'
    /****************************************/
    
})

input.addEventListener('click', () => {

    //Change border to blue
    sendTodoDiv.style.borderBottomColor = '#3d72fe'
    sendTodoDiv.style.borderBottomWidth = '2px'
})
