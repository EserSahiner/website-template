const parallaxBox = document.querySelector('.parallax-container');

parallaxBox.addEventListener('pointermove' , parallax)
parallaxBox.addEventListener('touchstart' , parallax)

function parallax(e) {
    this.querySelectorAll('.pitem').forEach(q => {
        const speed = q.getAttribute('data-speed')

        const x = (parallaxBox.style.width - e.clientX*speed) / 100;
        const y = (parallaxBox.style.height - e.clientY*speed) / 100;

        q.style.transform = `translateX(${x}px) translateY(${y}px)`
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