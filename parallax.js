// find all of the sections
const sections = document.querySelectorAll("section")

const addMovement = function () {

}

// run on pageload 
addMovement() 

// run on scroll 
document.addEventListener("scroll", function () {
    addMovement()
})

// run on browser/window resize 
window.addEventListener("resize", function () {
    addMovement()
})