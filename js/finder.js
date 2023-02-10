
const inpt = document.getElementById('s-input')


inpt.addEventListener('keyup', (e) => {
    userTodos = showSearch()
    if(userTodos.length === 0) {
        console.log('you dont have todos to search') //poner advertencia
        return;
    }
    let visible = []
    
    val = String(inpt.value)
        
    for(let i = 0; i < userTodos.length; i++) {
        if(val === userTodos[i].value) {
            visible.push(userTodos[i])
        }

        if (visible.length > 0) {
            for (let j = 0; j < userTodos.length; j++) {
                if(val != userTodos[j].value) {
                    userTodos[j].parentNode.style.display = 'none'
                }
            }
        }
    } 
    
    if (e.key === "Backspace") {
        userTodos = showSearch()
        for(let k = 0; k < userTodos.length; k++) {
            userTodos[k].parentNode.style.display = 'flex'
        }
    }
})


const showSearch = () => {
        let todoNames = []
        let values = document.getElementsByClassName('todoName')

        for(let j = 0; j < values.length; j++) {
            todoNames.push(values[j])
        }

        return todoNames;
}

