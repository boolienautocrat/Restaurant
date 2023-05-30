var expanded = document.querySelector(".item-expanded") 
var ul = expanded.children[2].children[1];
var items = document.querySelectorAll(".item");
var list = document.querySelector(".item-list")
var ham = document.querySelector(".ham")

items.forEach(function (e) {
    e.onclick = () => {
        list.style.display = "none"
        expanded.style.display = "flex"
        document.querySelector(".item-expanded div img").src = e.childNodes[1].src
        document.querySelector(".item-expanded h3").innerHTML = e.children[1].children[0].innerHTML
        if (e == items[0]) {
            ul.children[0].innerHTML = "Biryani masala"
            ul.children[1].innerHTML = "Basmati Rice"
            ul.children[2].innerHTML = "Chicken"
        } else if (e == items[1]) {
            ul.children[0].innerHTML = "Chicken Patty"
            ul.children[1].innerHTML = "Toppings"
            ul.children[2].innerHTML = "Bun"
        } else if (e == items[2]) {
            ul.children[0].innerHTML = "Tomato-based sauce"
            ul.children[1].innerHTML = "Chicken"
            ul.children[2].innerHTML = "Butter"
        } else if (e == items[3]) {
            ul.children[0].innerHTML = "Rice and lentil batter"
            ul.children[1].innerHTML = "Chutney and sambar"
            ul.children[2].innerHTML = "Potato Masala"
        } else {
            ul.children[0].innerHTML = "Tandoori spice blend"
            ul.children[1].innerHTML = "Chicken"
            ul.children[2].innerHTML = "Yogurt"
        }
    }
})

document.querySelector(".close").onclick = () => {
    list.style.display = "flex"
    expanded.style.display = "none"
    ul.children[0].innerHTML = "";
    ul.children[1].innerHTML = "";
    ul.children[2].innerHTML = "";
}