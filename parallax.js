// find all of the sections
const sections = document.querySelectorAll("section")
const bodyTag = document.querySelector("body")

const addMovement = function () {
    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight / 2)

    // middle of each section 
    sections.forEach((section, index) => {
        const topSection = section.offsetTop
        const midSection = topSection + (section.offsetHeight / 2)

        // how far away is the section from the visible area of the page
        const distanceToSection = midViewport - midSection

        // pick the tags to parallax
        const image = section.querySelector("img")
        const content = section.querySelector("div")

        // weight down this distance 
        let rotation = distanceToSection / 100
        let contentDistance = -1 * distanceToSection / 2

        // for every even section, rotate the other way 
        // is the index divisible by 2?
        // use the modulo operator! 
        if (index % 2 == 1) {
            rotation = rotation * -1
        }

        // apply some parallax
        image.style.transform = `rotate(${rotation}deg)`
        content.style.top = `${contentDistance}px`
        content.style.transform = `rotate(${-1 * rotation}deg)`

        // check the background color 
        if (distanceToSection > -100) {
            const dataBackground = section.getAttribute("data-background")
            bodyTag.style.backgroundColor = dataBackground
        }
    })
}

// run on pageload 
addMovement() 

// run on scroll 
document.addEventListener("scroll", () => {
    addMovement()
})

// run on browser/window resize 
window.addEventListener("resize", () => {
    addMovement()
})