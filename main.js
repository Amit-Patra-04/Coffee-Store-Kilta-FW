// Logo animation on hover
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('mouseenter', () => {
        logo.style.animation = 'pulse 0.5s';
    });
    
    logo.addEventListener('animationend', () => {
        logo.style.animation = '';
    });
}

