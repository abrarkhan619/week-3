const input = document.getElementById("input");
const button = document.getElementById("submit");
const error = document.getElementById("error")
const showHideButton = document.getElementById("showhide-btn")


// let list = document.getElementsByTagName("ul")[0]; // or
const list = document.getElementById("list");

button.addEventListener("click", () =>{
    let listItem = document.createElement("li");

    if(input.value == ""){
        error.textContent = "Please insert something"
    } else {
        listItem.textContent = input.value;
        list.appendChild(listItem);
        input.value = "";
    }
})

showHideButton.addEventListener("click", () =>{

    if (list.style.display == "none") {
        list.style.display = "block";
        showHideButton.textContent = "hide";
    } else {
        list.style.display = "none";
        showHideButton.textContent = "show";
    }
})
