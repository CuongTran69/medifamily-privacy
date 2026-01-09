// MediFamily Website Script - Language Switching

// Get saved language or default to 'en'
let currentLang = localStorage.getItem('medifamily-lang') || 'en';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setLang(currentLang);
});

// Set language function
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('medifamily-lang', lang);

    // Update all elements with data-en and data-vi attributes
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.textContent = text;
        }
    });

    // Update button states
    document.getElementById('btn-en')?.classList.toggle('active', lang === 'en');
    document.getElementById('btn-vi')?.classList.toggle('active', lang === 'vi');

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

