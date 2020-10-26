const parallaxBox = document.querySelector('.parallax-container');

parallaxBox.addEventListener('pointermove' , parallax)
parallaxBox.addEventListener('touchmove' , parallax)

function parallax(e) {
    this.querySelectorAll('.pitem').forEach(q => {
        const speed = q.getAttribute('data-speed')

        const x = (parallaxBox.style.width - e.pageX*speed) / 50;
        const y = (parallaxBox.style.height - e.pageY*speed) / 50;

        

        q.style.transform = `translateX(${x}px) translateY(${y}px)`
        console.log(e);
    });
};

parallaxBox.addEventListener('pointerleave', panimationOut);
parallaxBox.addEventListener('touchend', panimationOut);

function panimationOut(){
    this.querySelectorAll('.pitem').forEach(q => {
        q.style.transition = 'all 1s ease-out';
        q.style.transform = 'none';
    })
}

parallaxBox.addEventListener('pointerenter', panimationIn);

function panimationIn(){
    this.querySelectorAll('.pitem').forEach(q => {
        q.style.transition= 'none';
    })
}