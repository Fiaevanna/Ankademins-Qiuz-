
function initiateColorMode() {
    const switchModeButton = document.querySelector("#switchMode");

    
    
    switchModeButton.addEventListener("click", () => {
     const bodyElement = document.querySelector("body");
    
        const isLightMode = bodyElement.classList.contains("lightMode");

        if (isLightMode) {
            bodyElement.classList.add("darkMode");
            bodyElement.classList.remove("lightMode");
            
        } else {
            bodyElement.classList.add("lightMode");
            bodyElement.classList.remove("darkMode");
            
        }
    });

}
initiateColorMode()
