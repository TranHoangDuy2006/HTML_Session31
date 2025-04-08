document.addEventListener("DOMContentLoaded", function() 
{
    const employeeName = document.getElementById("employeeName")

    const employeeRole = document.getElementById("employeeRole")

    const addBtn = document.getElementById("add")

    const firstTable = document.getElementById("firstTable")

    const secondTable = document.getElementById("secondTable")

    const firstBtn = document.getElementById("first")

    const secondBtn = document.getElementById("second")

    let listEmployees = []

    let firstTableHasHeader = false

    let secondTableHasHeader = false

    addBtn.addEventListener("click", function() 
    {
        const employeeNameInput = employeeName.value.trim()

        const employeeRoleInput = employeeRole.value.trim()

        if(employeeNameInput === "" || employeeRoleInput === "") 
        {
            alert("Please fill in all fields")

            return
        }

        if(listEmployees.length < 3) 
        {
            if(!firstTableHasHeader) 
            {
                const firstHeader = document.createElement("tr")

                firstHeader.innerHTML = `<th>ID</th><th>Employee Name</th><th>Position</th>`

                firstTable.appendChild(firstHeader)

                firstTableHasHeader = true
            }

            const tableBody1 = document.createElement("tr")

            tableBody1.innerHTML = `<td>${listEmployees.length + 1}</td><td>${employeeNameInput}</td><td>${employeeRoleInput}</td>`

            firstTable.appendChild(tableBody1)

            firstTable.style.display = "block"

            secondTable.style.display = "none"
        } 
        
        else 
        {
            if(!secondTableHasHeader) 
            {
                const secondHeader = document.createElement("tr")

                secondHeader.innerHTML = `<th>ID</th><th>Employee Name</th><th>Position</th>`

                secondTable.appendChild(secondHeader)

                secondTableHasHeader = true
            }

            secondTable.style.display = "block"

            firstTable.style.display = "none"

            const tableBody2 = document.createElement("tr")

            tableBody2.innerHTML = `<td>${listEmployees.length + 1}</td><td>${employeeNameInput}</td><td>${employeeRoleInput}</td>`

            secondTable.appendChild(tableBody2)
        }

        listEmployees.push(
        {
            id: listEmployees.length + 1,

            name: employeeNameInput,

            role: employeeRoleInput
        })

        employeeName.value = ""

        employeeRole.value = ""
    })

    firstBtn.addEventListener("click", function() 
    {
        firstTable.style.display = "block"

        secondTable.style.display = "none"
    })

    secondBtn.addEventListener("click", function() 
    {
        firstTable.style.display = "none"

        secondTable.style.display = "block"

        if(listEmployees.length <= 3) 
        {
            alert("Please add more employees!")

            firstTable.style.display = "block"

            secondTable.style.display = "none"
        }
    })
})
