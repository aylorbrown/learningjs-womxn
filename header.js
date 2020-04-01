const headerTag = document.querySelector("header")

// when scroll the page at a certain thershold, toggle a class to the header 
document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset

    if (pixels > 80) {
        headerTag.classList.add("scrolled")
    } else {
        headerTag.classList.remove("scrolled")
    }
})

