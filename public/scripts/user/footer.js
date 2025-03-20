// Add smooth scroll behavior to footer links
document.querySelectorAll('.footer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add hover animation for social icons
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-3px)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0)';
    });
});

// Intersection Observer for fade-in animation when footer comes into view
const footer = document.querySelector('.footer');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.style.opacity = '1';
            }
        });
    },
    { threshold: 0.1 }
);

observer.observe(footer);
