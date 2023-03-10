
const main = document.querySelector(".main")
const hamburgerMenu = document.querySelector(".hamburger-menu");
let isMenuOpen = false;
let popupOpen = false;
const navbar = document.querySelector(".navbar")
hamburgerMenu.onclick = () => {

if(!isMenuOpen) {
hamburgerMenu.classList.toggle("active");
navbar.classList.toggle("active")
main.style.cssText = "opacity:0;"
isMenuOpen = true;
}else {
    hamburgerMenu.classList.toggle("active");
    navbar.classList.toggle("active");
    main.style.cssText = "opacity:1; transition:opacity 5s"
    
    isMenuOpen =  false;
}



};

let sliderEnd = false

const sectionSlide = document.querySelectorAll(".slide")
const midSlide = document.querySelectorAll(".slide-mid")
const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")

const nextBtnTwo = document.querySelector(".nextBtnTwo")
const prevBtnTwo = document.querySelector(".prevBtnTwo")
sectionSlide.forEach(function(sectionSlide, index){
    sectionSlide.style.left = `${index * 100}%`
});

let counter = 0;

const carousel = () => {
    if(counter === sectionSlide.length){
        counter = 0;
    }
    if(counter < 0) {
        counter = sectionSlide.length - 1
    }
    sectionSlide.forEach(function(sectionSlide){
sectionSlide.style.transform = `translateX(-${counter * 100}%)`
    })
}


/*buttons*/
nextBtn.onclick = () => {
    counter ++;
    carousel()
  
}

prevBtn.onclick = () => {
    counter--;
    carousel()
}




nextBtnTwo.onclick = () => {
    counter ++;
    midSlider()
    
}

prevBtnTwo.onclick = () => {
    counter--;
    midSlider()
}

/*buttons*/


/*buttons conditions*/




/*buttons conditions*/


const midSlider = () => {
    if(counter === sectionSlide.length){
        counter = 0;
    }
    if(counter < 0) {
        counter = sectionSlide.length - 1
    }
    midSlide.forEach(function(midSlide){
midSlide.style.transform = `translateX(-${counter * 100}%)`
    })
}






midSlide.forEach(function(midSlide, index){
    midSlide.style.left = `${index * 100}%`
});