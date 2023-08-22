let loginContainer = document.getElementById("loginContainer")
let backgroundContainer = document.getElementById("backgroundContainer")

let loginfunc = () => {
    loginContainer.style.display = "flex"
    backgroundContainer.style.display = "block"
}

window.addEventListener("click", (e)=>{
    if (e.target==backgroundContainer) {
        backgroundContainer.style.display = "none"
        loginContainer.style.display = "none"
    }
})


