// first slider for section3

let front= document.getElementById("next");
let back= document.getElementById("pre");
let items= document.querySelector(".slider");


function show(a){

    let next = document.querySelectorAll(".slider article")

    if(a === "abc"){
        items.appendChild(next[0])
    }
    else{
       items.prepend(next[next.length - 1])
    }
}

function b(){
   show("abc")
}

function c(){
    show("l")
}


let setdiameter = () =>{
    let slider =document.querySelector('.section1');
    let widthSlider= slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider,2) + Math.pow(heightSlider,2))
    document.documentElement.style.setProperty('--diameter', diameter + 'px')
    console.log(('diameter', diameter + 'px'))
}
setdiameter()
window.addEventListener('resize', setdiameter)

let sec1item = document.querySelectorAll('.section1 .item')
let prevBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')
let lastPosition = sec1item.length -1;
let firstPosition =0;
let active =1

nextBtn.onclick = () =>{
    active++
    setSlider()
}
prevBtn.onclick = () =>{
    active--
    setSlider()
}
const setSlider =() =>{
    let oldActive = document.querySelector('.section1 .item.active')
    if(oldActive) oldActive.classList.remove('active')
        sec1item[active].classList.add('active')

    nextBtn.classList.remove('none')
    prevBtn.classList.remove('none')
    if(active === lastPosition) nextBtn.classList.add('none')
        if(active === firstPosition) prevBtn.classList.add('none')
}
setSlider()