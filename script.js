// Loading Screen
window.addEventListener('load', function() {
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.classList.add('hidden');
        }
    }, 1000);
});

// Mobile Menu Toggle
let mobileToggle, navMenu;

// Smooth scrolling for navigation links - will be initialized in DOMContentLoaded

// Navbar background change on scroll - will be initialized in DOMContentLoaded
let navbar;

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Scroll Animations
const observerOptions2 = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer2 = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions2);

// Add animation classes and observe elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navbar
    navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        });
    }

    // Initialize smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize mobile menu elements
    mobileToggle = document.getElementById('mobileToggle');
    navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    const animateElements = document.querySelectorAll('.edu-item, .skill-category, .project-card, .contact-item');
    
    animateElements.forEach((el, index) => {
        if (index % 2 === 0) {
            el.classList.add('slide-in-left');
        } else {
            el.classList.add('slide-in-right');
        }
        observer2.observe(el);
    });

    // Add fade-in to other elements
    const fadeElements = document.querySelectorAll('h2, .about-text p, .contact-content p');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer2.observe(el);
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .fade-in {
        animation: fadeIn 0.6s ease forwards;
    }
    
    .slide-up {
        animation: slideUp 0.8s ease forwards;
    }
`;
document.head.appendChild(style);
