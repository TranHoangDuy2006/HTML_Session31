document.addEventListener("DOMContentLoaded", function() 
{
    const textElement = document.getElementById("text")
    
    const showButton = document.getElementById("show-btn")
    
    const hideButton = document.getElementById("hide-btn")

    hideButton.addEventListener("click", function() 
    {
        textElement.style.visibility = "hidden"
    })

    showButton.addEventListener("click", function() 
    {
        textElement.style.visibility = "visible"
    })

})

