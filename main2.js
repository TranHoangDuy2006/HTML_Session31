document.addEventListener("DOMContentLoaded", function() 
{
    const titleElement = document.getElementById("title")
    
    const contentElement = document.getElementById("description")
    
    const backgroundDiv = document.getElementById("main-container")
    
    const buttonDarkMode = document.getElementById("toggle-button")

    let isDarkMode = false

    buttonDarkMode.addEventListener("click", function() 
    {
        if(isDarkMode) 
        {
            titleElement.style.color = "black"
            
            contentElement.style.color = "black"
            
            backgroundDiv.style.backgroundColor = "white"
            
            isDarkMode = false
        } 
        
        else 
        {
            titleElement.style.color = "white"
            
            contentElement.style.color = "white"
            
            backgroundDiv.style.backgroundColor = "black"
            
            isDarkMode = true
        }
    })
})