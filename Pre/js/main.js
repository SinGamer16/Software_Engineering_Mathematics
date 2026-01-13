// Custom JavaScript for Software Engineering Mathematics
// Enhanced with Puppertino framework features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeThemeToggle();
    initializeScrollEffects();
    initializeAnimations();
    initializeMobileMenu();
});

// Navigation functionality
function initializeNavigation() {
    const navbarItems = document.querySelectorAll('.navbar-item');
    const sections = document.querySelectorAll('section[id]');

    // Smooth scrolling for navigation links
    navbarItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update active state
                navbarItems.forEach(navItem => navItem.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navbarItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
}

// Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        updateThemeIcon(true);
    }

    themeToggle.addEventListener('click', function() {
        const isDark = body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    });

    function updateThemeIcon(isDark) {
        const icon = themeToggle.querySelector('.icon');
        icon.textContent = isDark ? '☀️' : '🌙';
    }
}

// Scroll effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.curriculum-card, .approach-item, .roadmap-table').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations
function initializeAnimations() {
    // Add loading animation to body
    document.body.classList.add('fade-in-up');

    // Stagger animations for floating cards
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    menuToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('mobile-menu-open');
        const icon = this.querySelector('.icon');
        icon.textContent = navbarMenu.classList.contains('mobile-menu-open') ? '✕' : '☰';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navbarMenu.contains(e.target)) {
            navbarMenu.classList.remove('mobile-menu-open');
            menuToggle.querySelector('.icon').textContent = '☰';
        }
    });
}

// Enhanced button interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            this.appendChild(ripple);

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Intersection Observer for performance
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    // Observe images for lazy loading (if any)
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navbarMenu = document.querySelector('.navbar-menu');
        const menuToggle = document.getElementById('menu-toggle');
        if (navbarMenu.classList.contains('mobile-menu-open')) {
            navbarMenu.classList.remove('mobile-menu-open');
            menuToggle.querySelector('.icon').textContent = '☰';
        }
    }
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Register service worker for offline capabilities
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Performance monitoring
if ('performance' in window && 'PerformanceObserver' in window) {
    // Monitor Largest Contentful Paint
    try {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime);
                }
            }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
        console.log('LCP observation not supported');
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Graceful degradation for older browsers
if (!window.IntersectionObserver) {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll('.curriculum-card, .approach-item').forEach(el => {
        el.classList.add('fade-in-up');
    });
}

// Touch device optimizations
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');

    // Prevent double-tap zoom on buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('touchstart', function(e) {
            e.preventDefault();
        });
    });
}

// Print functionality
function printPage() {
    window.print();
}

// Share functionality
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Software Engineering Mathematics',
            text: 'A comprehensive mathematics curriculum for software engineering students',
            url: window.location.href
        });
    } else {
        // Fallback for browsers without Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}

// Scroll to section functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Export functions for global use
window.printPage = printPage;
window.sharePage = sharePage;
window.scrollToSection = scrollToSection;