var logo = document.querySelector(".logo");
var ham = document.querySelector(".ham");
var nav = document.querySelector(".nav-links")
var html = document.querySelector("body")

ham.onclick = () => {
    if (ham.classList.contains("ham")) {
        nav.style.display = "flex"
        ham.src = "./Images/Icons/close2.svg"
        ham.classList.remove("ham")
        ham.classList.add("close")
        html.style.overflowY="hidden"
    } else if (ham.classList.contains("close")) {
        nav.style.display = "none"
        ham.src = "./Images/Icons/hamburger.svg"
        ham.classList.remove("close")
        ham.classList.add("ham")
        html.style.overflowY="auto"
    }
}

logo.onclick = () => {
    location.reload();
}