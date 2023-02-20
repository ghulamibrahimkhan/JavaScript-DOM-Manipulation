// Event Propagation
//   3 Phases

// 1- Event Capturing 

// 2- Target

// 3- Event Bubbling

    //Capturing phase starts from root travels all the way to the target after it rechees to the targer it goes in to the bubling phase whicj travels backup from the target to root

window.addEventListener('click',function(){
    console.log('Window');
},false)

document.addEventListener('click',function(){
    console.log('Document');
},false)

// document.querySelector('.div2').addEventListener('click', function() {
//   console.log('Div 2');  
// },true)

// stop event propogation
document.querySelector('.div2').addEventListener('click', function() {
    // e.stopPropagation()
  console.log('Div 2');  
},{once:true}) // only fire 1 time

document.querySelector('.div1').addEventListener('click', function() {
  console.log('Div 1');  
},false)

document.querySelector('button').addEventListener('click',function(e) {
    console.log(e.target.innerText = 'clicked');
},false)
document.querySelector('.link').addEventListener('click',function(e) {
    e.preventDefault()
    console.log(e.target.innerText = 'Link clicked');
},false)
