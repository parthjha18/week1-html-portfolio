// --- STRICT VANILLA JS ---

// 1. Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeMoonIcon = document.getElementById('theme-moon');
const themeSunIcon = document.getElementById('theme-sun');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    if (themeMoonIcon) themeMoonIcon.style.display = 'none';
    if (themeSunIcon) themeSunIcon.style.display = 'block';
}

function toggleTheme() {
    body.classList.toggle('dark-theme');
    
    // Check if dark theme is active
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    if (isDark) {
        if (themeMoonIcon) themeMoonIcon.style.display = 'none';
        if (themeSunIcon) themeSunIcon.style.display = 'block';
    } else {
        if (themeMoonIcon) themeMoonIcon.style.display = 'block';
        if (themeSunIcon) themeSunIcon.style.display = 'none';
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}

// 2. Mobile Menu Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// 3. Sticky Header Styling on Scroll
const scrollHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
};
window.addEventListener('scroll', scrollHeader);

// 4. Active Link Switching based on Scroll position
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100; // Offset for header
        const sectionId = current.getAttribute('id');
        const link = document.querySelector(`.nav__list a[href*=${sectionId}]`);

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);

// 5. Scroll Reveal Animations utilizing Intersection Observer
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.1, // 10% visible
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// 6. Typewriter Effect
const typewriterElement = document.getElementById('typewriter');
const roles = ["Frontend Developer", "Software Engineer", "UI/UX Enthusiast", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typewriterEffect() {
    if (!typewriterElement) return;

    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before new word
    }

    setTimeout(typewriterEffect, typeSpeed);
}

// Start typing effect on load
document.addEventListener('DOMContentLoaded', () => {
    if (typewriterElement) setTimeout(typewriterEffect, 1000);
});

// 7. Form Validation & Submission Handling
function setupFormValidation() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('form-message');

    // Email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const showError = (input, messageId, message) => {
        const errorElement = document.getElementById(messageId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
        input.classList.add('error');
    };

    const hideError = (input, messageId) => {
        const errorElement = document.getElementById(messageId);
        if (errorElement) {
            errorElement.classList.remove('show');
        }
        input.classList.remove('error');
    };

    const validateName = () => {
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'name-error', 'Name is required');
            return false;
        } else {
            hideError(nameInput, 'name-error');
            return true;
        }
    };

    const validateEmail = () => {
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'email-error', 'Email is required');
            return false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, 'email-error', 'Please enter a valid email address');
            return false;
        } else {
            hideError(emailInput, 'email-error');
            return true;
        }
    };

    const validateMessage = () => {
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'message-error', 'Message is required');
            return false;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'message-error', 'Message must be at least 10 characters long');
            return false;
        } else {
            hideError(messageInput, 'message-error');
            return true;
        }
    };

    // Real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields on submit
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isMessageValid) {
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            // Show loading state
            btn.innerHTML = 'Sending...';
            btn.style.opacity = '0.8';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.opacity = '1';
                btn.disabled = false;
                
                // Show success message
                formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
                formMessage.style.display = 'block';
                formMessage.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                formMessage.style.color = '#10b981';
                formMessage.style.border = '1px solid #10b981';
                
                contactForm.reset();
                
                // Reset success message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 1500);
        }
    });
}
setupFormValidation();
