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
    
    // remove half of the window width so stamp is centers
    img.style.left = (x - window.innerWidth / 2)  + "px"
    img.style.top = y + "px"

    stampsTag.appendChild(img)

    // add the audio 
    const audio = document.createElement("audio")
    audio.setAttribute("src", "assets/plop.mp3")
    audio.play()

    number += 1
    if (number > stamps.length - 1) {
        number = 0
    }
}

document.addEventListener("click", (event) => {
    addStamp(event.pageX, event.pageY)
})