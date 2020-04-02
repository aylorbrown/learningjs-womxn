let number = 0;
const stamps = [
    "assets/circles.svg",
    "assets/heart.svg",
    "assets/moon.svg",
    "assets/rainbow.svg",
    "assets/shooting-star.svg",
    "assets/waves.svg"
]

const stampsTag = document.querySelector("div.stamps")

const addStamp = function (x, y) {
    const img = document.createElement("img")
    img.setAttribute("src", stamps[number])
    
    img.style.left = x + "px"
    img.style.top = y + "px"

    stampsTag.appendChild(img)

    number += 1
    if (number > stamps.length - 1) {
        number = 0
    }
}

document.addEventListener("click", (event) => {
    addStamp(event.pageX, event.pageY)
})