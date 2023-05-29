var expanded = document.querySelector(".item-expanded")
var close = document.querySelector(".close")
var img = document.querySelector(".item-expanded div img")
var title = document.querySelector(".item-expanded h3")
var ul = expanded.children[2].children[1];
var items = document.querySelectorAll(".item");
var list = document.querySelector(".item-list")
var biryani = items[0]
var burger = items[1]
var butterChicken = items[2]
var masalaDosa = items[3]
var Tandoori = items[4]

items.forEach(function (e) {
    e.onclick = () => {
        list.style.display = "none"
        expanded.style.display = "flex"
        img.src = e.childNodes[1].src
        title.innerHTML = e.children[1].children[0].innerHTML
        if (e == biryani) {
            ul.children[0].innerHTML = "Biryani masala"
            ul.children[1].innerHTML = "Basmati Rice"
            ul.children[2].innerHTML = "Chicken"
        } else if (e == burger) {
            ul.children[0].innerHTML = "Chicken Patty"
            ul.children[1].innerHTML = "Toppings"
            ul.children[2].innerHTML = "Bun"
        } else if (e == butterChicken) {
            ul.children[0].innerHTML = "Tomato-based sauce"
            ul.children[1].innerHTML = "Chicken"
            ul.children[2].innerHTML = "Butter"
        } else if (e == masalaDosa) {
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

close.onclick = () => {
    list.style.display = "flex"
    expanded.style.display = "none"
    ul.children[0].innerHTML = "";
    ul.children[1].innerHTML = "";
    ul.children[2].innerHTML = "";
}