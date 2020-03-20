const listItems = document.querySelectorAll("li:nth-child(even");
const list = document.querySelectorAll("li");

console.log(listItems);
console.log(listItems.length);

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "lightgreen"
    
}