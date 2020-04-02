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
    console.log(x, y)
}

document.addEventListener("click", (event) => {
    addStamp(event.pageX, event.pageY)
})