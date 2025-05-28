// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuToggle.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
});

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        navMenu.classList.remove('show');
        menuToggle.textContent = '☰';
    });
});

// // Create Floating Coffee Beans
// function createCoffeeBean() {
//     const bean = document.createElement('div');
//     bean.className = 'coffee-bean';
    
//     // Random position and animation
//     const startX = Math.random() * 100;
//     const duration = 10 + Math.random() * 20;
//     const delay = Math.random() * 5;
//     const size = 20 + Math.random() * 30;
//     const rotation = Math.random() * 360;
    
//     bean.style.left = `${startX}vw`;
//     bean.style.width = `${size}px`;
//     bean.style.height = `${size}px`;
//     bean.style.animationDuration = `${duration}s`;
//     bean.style.animationDelay = `${delay}s`;
//     bean.style.transform = `rotate(${rotation}deg)`;
    
//     document.body.appendChild(bean);
    
//     // Remove bean after animation completes
//     setTimeout(() => {
//         bean.remove();
//     }, duration * 1000);
// }

// // Create initial beans
// for (let i = 0; i < 15; i++) {
//     createCoffeeBean();
// }

// // Continue creating beans periodically
// setInterval(createCoffeeBean, 2000);

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-title, .menu-item, .testimonial, .about-text p, .contact-form');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementPosition < windowHeight - elementVisible) {
            element.style.animationPlayState = 'running';
        }
    });
};

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Enhanced Cursor Follower
const cursorFollower = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
});

// Activate cursor follower on hover
document.querySelectorAll('a, button, .hover-scale').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('active');
    });
    
    element.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('active');
    });
});

// Ripple effect on click
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

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