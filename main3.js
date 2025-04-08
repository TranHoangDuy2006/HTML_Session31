document.addEventListener("DOMContentLoaded", function() 
{
    const mainContainer = document.getElementById("main-container");
    
    const colorBoxes = document.querySelectorAll(".square-box")

    colorBoxes.forEach(box => 
    {
        box.addEventListener("click", function() 
        {
            let currentSelectedColor = getComputedStyle(box).backgroundColor
            
            mainContainer.style.backgroundColor = currentSelectedColor
        })
    })
})
