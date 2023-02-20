// Event Deligation

// It allows users to append a single event listner to a parent element that adds it to all of its present and future descendants that match a selector.

// document.querySelector("#football").addEventListener('click', function (e) {
//     console.log('Football is clicked');
//     const target = e.target;

//     if (target.matches('li')) {
//         target.style.backgroundColor = 'Black'
//     }
// })

document.querySelector("#sports").addEventListener('click',function (e) {
    const sportName = e.target.getAttribute('id')
    console.log(sportName + " is clicked");

    const target = e.target;
    target.style.backgroundColor = 'green'
})


const sports = document.getElementById('sports')
const circket = document.createElement('li');

circket.innerText = 'Circket'
circket.setAttribute('id','circket');
sports.appendChild(circket)