const image = document.getElementById("image");
const input = document.getElementById("input");
const button = document.getElementById("submit");

button.addEventListener("click", () =>{
    console.log(image);
    // image.src = "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
    image.src = input.value;
});