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