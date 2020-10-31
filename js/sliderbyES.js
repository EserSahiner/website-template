const sliderMain = document.querySelector('#slider-main');
const slide = document.querySelector('#slide');
const slideBox = document.querySelector('#slide-image-box');
const slideImg = document.querySelector('.slide-image');
const infoHeader = document.querySelector('#info-header');
const infoContent = document.querySelector('#info-content')

//Buttons//
const btnRight = document.querySelector('#slider-arrowr');
const btnLeft = document.querySelector('#slider-arrowl');
///////////

let slideTotal = slideBox.children.length;
let imageWidth = 100;
let slideIndex = 0;
let mleftVal = 0; 


function slideRight(){
    if(slideIndex < slideTotal - 1){
        slideIndex++;
        mleftVal += -(imageWidth);
        slideBox.style.transition = 'margin-left 1s';
        slideBox.style.animation = 'none';
        slideBox.style.marginLeft = mleftVal + '%';
        console.log(slideIndex+' '+mleftVal);
    }else{
        slideIndex = 0;
        slideBox.style.animation = 'slideReset 2s ease-out';
        slideBox.style.transition = 'none';
        mleftVal = (imageWidth*slideIndex);
        slideBox.style.marginLeft = mleftVal + '%';
        console.log(slideIndex+' '+mleftVal);
    }
}

function slideLeft(){
    if(slideIndex < slideTotal && slideIndex > 0){
        slideIndex--;
        mleftVal += +(imageWidth);
        slideBox.style.transition = 'margin-left 1s';
        slideBox.style.animation = 'none';
        slideBox.style.marginLeft = mleftVal + '%';
        console.log(slideIndex+' '+mleftVal);
    }else{
        slideIndex = slideTotal -1;
        mleftVal = -(imageWidth*slideIndex);
        slideBox.style.animation = 'slideReset 2s ease-out';
        slideBox.style.transition = 'none';
        slideBox.style.marginLeft = mleftVal + '%';
        console.log(slideIndex+' '+mleftVal);
    }
}

btnRight.addEventListener('click', sliderPlayRight);

function sliderPlayRight(e){
    e.preventDefault();
    slideRight();
    slideStop();
}

btnLeft.addEventListener('click', sliderPlayLeft);

function sliderPlayLeft(e){
    e.preventDefault();
    slideLeft();
    slideStop();
}

var slidingTime = 5000;
var slideAuto = setInterval(slideRight, slidingTime);

slideBox.addEventListener('pointerenter', slideStop);
slideBox.addEventListener('pointerleave', slideKeep);

function slideStop(){
    clearInterval(slideAuto);
}

function slideKeep(){
    slideAuto = setInterval(slideRight, slidingTime);
}