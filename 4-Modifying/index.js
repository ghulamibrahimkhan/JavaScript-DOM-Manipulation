// Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

// // Adding Elements
ul.append(li);


// // Modifying Text Methods
// xyz.innerText    // display the text
// xyz.textContent // display the same way its in the html
// xyz.innerHTML  // display the same way its in the html with html tags


// ***Modifying The Text ***

li.innerText = 'X-men'


// ***Modifying Attributes

li.setAttribute('id','main-heading');
li.removeAttribute('id');

li.setAttribute('class','list-item')


const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'));



//@@@@@@@@@@@@@@@@@@@@@
// creating another li 
const li2 = document.createElement('li')
ul.append(li2)
li2.innerText = 'Ant Man'
//@@@@@@@@@@@@@@@@@@@@//


// ***Modifying Classes

li2.classList.add('list-item')

console.log(li2.classList.contains('list-item'));


// ***Remove Elements
li2.remove()
