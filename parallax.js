// find all of the sections
const sections = document.querySelectorAll("section")

const addMovement = function () {
    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight / 2)

    // middle of each section 
    sections.forEach(section => {
        const topSection = section.offsetTop
        const midSection = topSection + (section.offsetHeight / 2)

        // how far away is the section from the visible area of the page
        const distanceToSection = midViewport - midSection

        // pick the tags to parallax
        const image = section.querySelector("img")
        const content = section.querySelector("div")

        // apply some parallax
        image.style.transform = `rotate(${distanceToSection}deg)`
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