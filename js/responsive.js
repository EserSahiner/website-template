
//jQuery Toggling

//$(document).ready(function(){
//    $('.menu-toggle').on("click",function(){
//        $('.menu-toggle').toggleClass('responsive', 1000);
//        $('#navbar-ul').toggleClass('responsive', 1000);
//    });
//});


const btnRes = document.querySelector('.menu-toggle');

const ulMenu = document.querySelector('#navbar-ul');


btnRes.addEventListener('click', () => {
    ulMenu.classList.toggle('responsive');
    ulMenu.classList.toggle('fade');
    btnRes.classList.toggle('responsive');
});