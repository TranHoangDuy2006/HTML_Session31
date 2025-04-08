let todoList = 
[
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false }
]

    const todoListItems = document.getElementById("myUL")

    const taskInput = document.getElementById("myInput")

    todoList.forEach(item => 
    {
        const listItem = document.createElement("li")

        listItem.innerHTML = `<span class="ul li.checked">${item.task}</span>`

        const closeBtn = document.createElement("button")

        closeBtn.innerHTML = "&#10005;"
            
        closeBtn.classList.add("close")

        listItem.appendChild(closeBtn)

        if(item.completed) 
        {
            const checkBtn = document.createElement("button")

            checkBtn.innerHTML = "✔"

            checkBtn.classList.add("check-btn")
            
            listItem.innerHTML = `<span class="ul li.checked" style="text-decoration: line-through">${item.task}</span>`
            
            const closeBtn = document.createElement("button")

            closeBtn.innerHTML = "&#10005;"
            
            closeBtn.classList.add("close")

            listItem.appendChild(closeBtn)
            
            listItem.appendChild(checkBtn)

            closeBtn.addEventListener("click", function() 
            {
                listItem.remove()
            })
        }

        closeBtn.addEventListener("click", function() 
        {
            listItem.remove()
        })

        todoListItems.appendChild(listItem)
    })

    const addBtn = document.getElementById("addBtn")

    addBtn.addEventListener("click", function() 
    {
        const newTask = document.createElement("li")
    
        const newDataTask = taskInput.value.trim()
    
        if(newDataTask !== "") 
        {

            newTask.innerHTML = `<span class="ul li.checked">${newDataTask}</span>`
    
            const closeBtn = document.createElement("button")

            closeBtn.innerHTML = "&#10005;"

            closeBtn.classList.add("close")
    
            newTask.appendChild(closeBtn)
    
            todoListItems.appendChild(newTask)
    
            taskInput.value = ""
        }
    })

    

    