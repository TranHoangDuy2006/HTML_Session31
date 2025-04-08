document.addEventListener("DOMContentLoaded", function() 
{
    const loginButton = document.getElementById("login-btn")

    const userName = document.getElementById("userName")

    const password = document.getElementById("password")

    const status = document.getElementById("status")

    const fixedUsername = "huanrose@gmail.com"
        
    const fixedPassword = "123456"

    loginButton.addEventListener("click", function() 
    {
        const usernameInput = document.getElementById("userName").value
        
        const passwordInput = document.getElementById("password").value

        if(usernameInput === fixedUsername && passwordInput === fixedPassword) 
        {
            console.log("Login successfully!")

            console.log("Hi, huanrose!")

            userName.value = ""

            password.value = ""

            status.textContent = "Login successfully!"

            status.style.color = "green"
        } 
        
        else 
        {
            console.log("Login failed, username or password you typed was wrong, try again!")

            status.textContent = "Login failed, try again!"

            status.style.color = "red"
        }
    })
})