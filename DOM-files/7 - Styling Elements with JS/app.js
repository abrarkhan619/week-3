const image = document.getElementById("cat");
const button = document.getElementById("submit");
button.textContent = "Show"
image.style.display = "none";

button.addEventListener("click", () =>{

    if (image.style.display == "none") {
        image.style.display = "block"
        button.textContent = "Hide"
    } else {
        image.style.display = "none"
        button.textContent = "Show"
    }

    // image.style.display = "none"
})


console.log(image.style)