// Steam animation for hero image
const heroImage = document.getElementById('heroImage');
if (heroImage) {
    setInterval(() => {
        createSteam(heroImage);
    }, 1500);
}

function createSteam(element) {
    const steam = document.createElement('div');
    steam.className = 'steam';
    
    // Random position
    const startX = 50 + (Math.random() * 40 - 20);
    const startY = 50 + (Math.random() * 40 - 20);
    
    steam.style.left = `${startX}%`;
    steam.style.top = `${startY}%`;
    
    // Random animation
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 2;
    const size = 5 + Math.random() * 10;
    
    steam.style.width = `${size}px`;
    steam.style.height = `${size * 6}px`;
    steam.style.animation = `steam ${duration}s ease-out ${delay}s forwards`;
    
    element.appendChild(steam);
    
    // Remove steam after animation completes
    setTimeout(() => {
        steam.remove();
    }, (duration + delay) * 1000);
}

// Interactive form inputs
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'translateY(-5px)';
        input.parentElement.style.transition = 'transform 0.3s ease';
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'translateY(0)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
});

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

// Menu item hover effect
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.03)';
        item.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

// Testimonial hover effect
const testimonials = document.querySelectorAll('.testimonial');
testimonials.forEach(testimonial => {
    testimonial.addEventListener('mouseenter', () => {
        testimonial.style.transform = 'translateY(-10px)';
        testimonial.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.25)';
    });
    
    testimonial.addEventListener('mouseleave', () => {
        testimonial.style.transform = 'translateY(0)';
        testimonial.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

coffee-bean