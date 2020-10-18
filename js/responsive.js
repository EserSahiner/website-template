
//jQuery Toggling

//$(document).ready(function(){
//    $('.menu-toggle').on("click",function(){
//        $('.menu-toggle').toggleClass('responsive', 1000);
//        $('#navbar-ul').toggleClass('responsive', 1000);
//    });
//});


const btnRes = document.querySelector('.menu-toggle');

const ulMenu = document.querySelector('#navbar-ul');

const liMenu = document.querySelectorAll('.navbar-li');



btnRes.addEventListener('click', () => {
    ulMenu.classList.toggle('responsive');
    btnRes.classList.toggle('responsive');
    liMenu.forEach(e => {
        e.classList.toggle('fade');
    });
});