const title = document.querySelector('#main-heading');
title.style.color = 'green';
console.log(title);


// Inline style can only apply to one item at a time other wise we have to use loop

const listItems = document.querySelectorAll('.list-item');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = 'orange'
}
console.log(listItems);