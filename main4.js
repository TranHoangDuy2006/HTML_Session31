document.addEventListener("DOMContentLoaded", function() 
{ 
    const modalButton = document.getElementById("modal-btn")

    const messageBox = document.getElementById("message-box")

    const closeIcon = document.getElementById("close-icon")

    const overlay = document.getElementById("overlay")

    modalButton.addEventListener("click", function() 
    {
        messageBox.style.visibility = "visible"

        overlay.style.visibility = "visible"
    })

    closeIcon.addEventListener("click", function()
    {
        messageBox.style.visibility = "hidden"

        overlay.style.visibility = "hidden"
    })
})