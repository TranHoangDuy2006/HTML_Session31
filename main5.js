document.addEventListener("DOMContentLoaded", function() 
{
    const listEmployees = 
    [
        { id: 1, name: 'Tran Hoang Duy', age: 18, address: 'Viet Nam' },
        { id: 2, name: 'Pham Hoang Truc Dan', age: 18, address: 'Viet Nam' },
        { id: 3, name: 'Hoang Thuy Linh', age: 19, address: 'Viet Nam' },
        { id: 4, name: 'Van Khanh', age: 17, address: 'Viet Nam' },
        { id: 5, name: 'Nguyen Thai Dan Thanh', age: 19, address: 'Viet Nam' }
    ]

    const tableBody = document.getElementById("employeeList").getElementsByTagName("tbody")[0]

    listEmployees.forEach(employee => 
    {
        const row = document.createElement("tr")
        
        row.innerHTML = 
        `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.age}</td>
            <td>${employee.address}</td>
        `
        tableBody.appendChild(row)
    })
})