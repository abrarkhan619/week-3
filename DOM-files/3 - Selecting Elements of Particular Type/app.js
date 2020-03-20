let paragraphs = document.getElementsByTagName('p');

for (let paragraph of paragraphs) {
    console.log(paragraph);
}

/// Below is same as above /////
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i])
}

/////////// Activity 3 //////////

const list = document.getElementsByTagName("li");
console.log(list);
console.log(list.length);

for (let i = 0; i < list.length; i++) {
    list[i].style.color = "orange";
    // list[1].style.color = "orange";
    // list[3].style.color = "orange";
}

const notOrangeItems = document.getElementsByClassName("not-orange")

for (let i = 0; i < notOrangeItems.length; i++) {
    notOrangeItems[i].style.color = "red";
}
