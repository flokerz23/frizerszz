// Main Initialization
function init() {
    console.log('Initializing website scripts...');

    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const closeMenu = document.getElementById('closeMenu');

    if (hamburger && navMenu && navOverlay) {
        function openMenu() {
            navMenu.classList.add('active');
            hamburger.classList.add('active');
            navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenuFunc() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (navMenu.classList.contains('active')) {
                closeMenuFunc();
            } else {
                openMenu();
            }
        });

        if (closeMenu) {
            closeMenu.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeMenuFunc();
            });
        }

        navOverlay.addEventListener('click', (e) => {
            if (e.target === navOverlay) {
                closeMenuFunc();
            }
        });

        navMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenuFunc();
            });
        });
    } else {
        console.warn('Navigation elements not found');
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Statistics Counter
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.classList.contains('animated')) {
                    statNumber.classList.add('animated');
                    animateCounter(statNumber);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item').forEach(item => {
        statsObserver.observe(item);
    });

    // Luxurious Scroll Animations
    initAnimations();

    // Parallax
    initParallax();
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target === 12 ? 'K' : '+');
        }
    };

    updateCounter();
}

function initAnimations() {
    console.log('Initializing animations...');
    const observerOptions = {
        threshold: 0.1, // Lower threshold to trigger sooner
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Revealing:', entry.target);
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = [
        { selector: '.section-title', class: 'reveal-up' },
        { selector: '.section-description', class: 'reveal-up', delay: 'delay-100' },
        { selector: '.service-card', class: 'reveal-up', stagger: true },
        { selector: '.offer-card', class: 'reveal-up', stagger: true },
        { selector: '.gallery-item', class: 'reveal-up', stagger: true },
        { selector: '.contact-info', class: 'reveal-left' },
        { selector: '.contact-form-wrapper', class: 'reveal-right' },
        { selector: '.hero-content > *', class: 'reveal-up', stagger: true },
        { selector: '.service-modern-content > *', class: 'reveal-up', stagger: true },
        { selector: '.service-modern-image', class: 'reveal-left' }
    ];

    // Handle Service Rows (Slide In)
    document.querySelectorAll('.service-row').forEach((row, index) => {
        const text = row.querySelector('.service-text');
        const image = row.querySelector('.service-image-col');

        if (row.classList.contains('service-row-reverse')) {
            // Reverse row: Image Left, Text Right
            if (image) {
                image.classList.add('reveal-left');
                revealObserver.observe(image);
            }
            if (text) {
                text.classList.add('reveal-right');
                revealObserver.observe(text);
            }
        } else {
            // Normal row: Text Left, Image Right
            if (text) {
                text.classList.add('reveal-left');
                revealObserver.observe(text);
            }
            if (image) {
                image.classList.add('reveal-right');
                revealObserver.observe(image);
            }
        }
    });

    animatedElements.forEach(config => {
        const elements = document.querySelectorAll(config.selector);
        if (elements.length === 0) {
            // console.warn(`No elements found for selector: ${config.selector}`);
        }

        elements.forEach((el, index) => {
            el.classList.add(config.class);

            if (config.delay) {
                el.classList.add(config.delay);
            }

            if (config.stagger) {
                const delayIndex = (index % 5) + 1;
                el.classList.add(`delay-${delayIndex}00`);
            }

            revealObserver.observe(el);
        });
    });
}

function initParallax() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                heroImage.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        });
    }
}

// Run Init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Active Link Highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Multumim pentru mesaj! Va vom contacta in curand.');
        contactForm.reset();
    });
}

// Cookie Consent
const cookieConsent = document.getElementById('cookieConsent');
const acceptCookies = document.getElementById('acceptCookies');
const rejectCookies = document.getElementById('rejectCookies');

if (cookieConsent && acceptCookies && rejectCookies) {
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 1000);
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.classList.remove('show');
    });

    rejectCookies.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieConsent.classList.remove('show');
    });
}

