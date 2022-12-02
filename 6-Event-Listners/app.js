// Dom Mauiplation

//  Event Listner

// Element.addEvetListner('click',funcrion)

// const buttonTwo = document.querySelector('.btn-2');
// const ILY = ()=> alert('I Love You')

// buttonTwo.addEventListener('click',ILY)

// Mouseover

let bgColor = document.querySelector(".box-3");

const changeBgColor = ()=>{
    bgColor.style.backgroundColor = "red"
}


const defualtBgColor = ()=>{
    bgColor.style.backgroundColor = "aliceblue"
}

bgColor.addEventListener("mouseout",defualtBgColor)
bgColor.addEventListener("mouseover",changeBgColor)