// *** Dom Maipulation  ***

// getElementById()
// getElementByClassName()
// getElementBtTagName()
// querySelector()
// querySelectorAll()


// * 1
const title = document.getElementById("main-heading");
console.log(title);

// // * 2
const listItem = document.getElementsByClassName("list-item");
console.log(listItem);

// // * 3
const listItems = document.getElementsByTagName("li");
console.log(listItems);

// // * 4
const container = document.querySelector('div')
console.log(container);

// // * 5 
const allContainer = document.querySelectorAll("div")
console.log(allContainer);