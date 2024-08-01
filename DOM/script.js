let description = document.querySelectorAll('main p');

description.forEach((paragraph) =>{
    console.log(paragraph)
})

let update = document.querySelector(".sub-heading")
update.innerHTML = "New Subheading"


let liH = document.querySelectorAll("ul.top-class li")
console.log(liH)
liH.forEach((element) =>{
    element.innertext += "Menu"
})