// Testimonios en español
const testimonialsES = [
    {
        id: 1,
        name: "María González",
        role: "Cliente frecuente",
        content: "Excelente servicio! El auto estaba impecable y el proceso de entrega fue muy rápido. Definitivamente rentaré con Nago en mi próximo viaje a Cancún.",
        rating: 5,
        date: "15 de Junio, 2023",
        source: "google",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
        id: 2,
        name: "Carlos Rodríguez",
        role: "Turista",
        content: "La SUV que rentamos era perfecta para nuestra familia de 5. El personal fue muy amable y resolvió todas nuestras dudas. ¡Totalmente recomendado!",
        rating: 5,
        date: "3 de Julio, 2023",
        source: "google",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Laura Martínez",
        role: "Viajera de negocios",
        content: "Por primera vez rentando auto en México y la experiencia fue excelente. El vehículo estaba en perfectas condiciones y el precio fue justo. ¡Volveré a usarlos!",
        rating: 5,
        date: "22 de Agosto, 2023",
        source: "google",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        id: 4,
        name: "Juan Pérez",
        role: "Visitante extranjero",
        content: "El servicio de entrega en el aeropuerto fue puntual y eficiente. El auto estaba limpio y en perfecto estado. Sin duda los recomiendo!",
        rating: 5,
        date: "10 de Septiembre, 2023",
        source: "google",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        id: 5,
        name: "Ana Sánchez",
        role: "Honeymooner",
        content: "Rentamos un convertible para nuestra luna de miel y fue una experiencia increíble. El personal fue muy atento y el auto estaba impecable.",
        rating: 5,
        date: "5 de Octubre, 2023",
        source: "google",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
        id: 6,
        name: "Roberto Jiménez",
        role: "Viajero frecuente",
        content: "He rentado con Nago varias veces y siempre superan mis expectativas. Precios competitivos y servicio de primera calidad. ¡Mi primera opción en Cancún!",
        rating: 5,
        date: "18 de Noviembre, 2023",
        source: "google",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
];

// Testimonios en inglés
const testimonialsEN = [
    {
        id: 1,
        name: "Maria Gonzalez",
        role: "Frequent customer",
        content: "Excellent service! The car was impeccable and the delivery process was very fast. I will definitely rent with Nago on my next trip to Cancun.",
        rating: 5,
        date: "June 15, 2023",
        source: "google",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
        id: 2,
        name: "Carlos Rodriguez",
        role: "Tourist",
        content: "The SUV we rented was perfect for our family of 5. The staff was very friendly and answered all our questions. Totally recommended!",
        rating: 5,
        date: "July 3, 2023",
        source: "google",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Laura Martinez",
        role: "Business traveler",
        content: "First time renting a car in Mexico and the experience was excellent. The vehicle was in perfect condition and the price was fair. I will use them again!",
        rating: 5,
        date: "August 22, 2023",
        source: "google",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        id: 4,
        name: "John Perez",
        role: "Foreign visitor",
        content: "The airport delivery service was punctual and efficient. The car was clean and in perfect condition. I definitely recommend them!",
        rating: 5,
        date: "September 10, 2023",
        source: "google",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        id: 5,
        name: "Ana Sanchez",
        role: "Honeymooner",
        content: "We rented a convertible for our honeymoon and it was an incredible experience. The staff was very attentive and the car was impeccable.",
        rating: 5,
        date: "October 5, 2023",
        source: "google",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
        id: 6,
        name: "Robert Jimenez",
        role: "Frequent traveler",
        content: "I have rented with Nago several times and they always exceed my expectations. Competitive prices and first class service. My first choice in Cancun!",
        rating: 5,
        date: "November 18, 2023",
        source: "google",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
];

// Obtener testimonios según el idioma
function getTestimonialsByLanguage() {
    const currentPage = window.location.pathname;
    const isEnglishPage = currentPage.includes('index-en') || currentPage.includes('privacy-policy') || currentPage.includes('terms-and-conditions');
    return isEnglishPage ? testimonialsEN : testimonialsES;
}

// Función para generar estrellas de calificación
function generateRatingStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Función para renderizar testimonios
function renderTestimonials(filter = '5') {
    const container = document.getElementById('testimonials-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const testimonials = getTestimonialsByLanguage();
    let filteredTestimonials = testimonials;
    
    if (filter === '5') {
        filteredTestimonials = testimonials.filter(testimonial => testimonial.rating === 5);
    } else if (filter === 'google') {
        filteredTestimonials = testimonials.filter(testimonial => testimonial.source === 'google');
    } else if (filter === 'all') {
        // Todos los testimonios
    }
    
    if (filteredTestimonials.length === 0) {
        const currentPage = window.location.pathname;
        const isEnglishPage = currentPage.includes('index-en') || currentPage.includes('privacy-policy') || currentPage.includes('terms-and-conditions');
        
        container.innerHTML = `
            <div class="testimonial-card" style="grid-column: 1 / -1; text-align: center;">
                <h3>${isEnglishPage ? 'No testimonials found' : 'No se encontraron testimonios'}</h3>
                <p>${isEnglishPage ? 'Try another filter' : 'Intenta con otro filtro'}</p>
            </div>
        `;
        return;
    }
    
    filteredTestimonials.forEach(testimonial => {
        const testimonialEl = document.createElement('div');
        testimonialEl.className = 'testimonial-card';
        testimonialEl.innerHTML = `
            <div class="testimonial-content">
                <p>${testimonial.content}</p>
            </div>
            <div class="testimonial-author">
                <div class="author-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                </div>
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                    <div class="rating">
                        ${generateRatingStars(testimonial.rating)}
                    </div>
                    <div class="testimonial-date">${testimonial.date}</div>
                </div>
            </div>
            <div class="source-badge">
                <span class="google-logo"></span>
                Google Maps
            </div>
        `;
        container.appendChild(testimonialEl);
    });
}

// Detectar idioma del navegador
function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('es') ? 'es' : 'en';
}

// Obtener idioma preferido del usuario
function getPreferredLanguage() {
    // Primero verificar si hay una preferencia guardada
    const savedLanguage = localStorage.getItem('nagoLanguagePreference');
    if (savedLanguage) return savedLanguage;
    
    // Si no hay preferencia guardada, usar el idioma del navegador
    return getBrowserLanguage();
}

// Redirigir según el idioma preferido (solo en la página de inicio)
function redirectBasedOnLanguage() {
    // Solo redirigir si estamos en la página principal (index.html o root)
    const currentPage = window.location.pathname;
    const isHomePage = currentPage.endsWith('/') || currentPage.endsWith('/index.html') || currentPage.endsWith('/index-en.html');
    
    if (!isHomePage) return;
    
    const preferredLanguage = getPreferredLanguage();
    const isEnglishPage = currentPage.includes('index-en');
    
    // Si el idioma preferido es inglés pero estamos en la página española, redirigir
    if (preferredLanguage === 'en' && !isEnglishPage && !currentPage.includes('index-en')) {
        window.location.href = 'index-en.html';
    }
    // Si el idioma preferido es español pero estamos en la página inglesa, redirigir
    else if (preferredLanguage === 'es' && isEnglishPage) {
        window.location.href = 'index.html';
    }
}

// Sistema de cambio de idioma
function setupLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    if (!languageToggle) return;
    
    // Determinar el idioma actual basado en la URL
    const currentPage = window.location.pathname;
    const isEnglishPage = currentPage.includes('index-en') || currentPage.includes('privacy-policy') || currentPage.includes('terms-and-conditions');
    
    // Configurar el botón según el idioma actual
    languageToggle.innerHTML = isEnglishPage ? 
        '<i class="fas fa-globe"></i> ES' : 
        '<i class="fas fa-globe"></i> EN';
    
    languageToggle.addEventListener('click', () => {
        // Guardar preferencia en localStorage
        const newLanguage = isEnglishPage ? 'es' : 'en';
        localStorage.setItem('nagoLanguagePreference', newLanguage);
        
        if (isEnglishPage) {
            // Redirigir a la versión en español
            if (currentPage.includes('privacy-policy')) {
                window.location.href = 'politica-privacidad.html';
            } else if (currentPage.includes('terms-and-conditions')) {
                window.location.href = 'terminos-condiciones.html';
            } else {
                window.location.href = 'index.html';
            }
        } else {
            // Redirigir a la versión en inglés
            if (currentPage.includes('politica-privacidad')) {
                window.location.href = 'privacy-policy.html';
            } else if (currentPage.includes('terminos-condiciones')) {
                window.location.href = 'terms-and-conditions.html';
            } else {
                window.location.href = 'index-en.html';
            }
        }
    });
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) {
                navLinks.classList.remove('active');
            }
            if (hamburger) {
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

// Form submission
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Determinar el idioma actual
        const currentPage = window.location.pathname;
        const isEnglishPage = currentPage.includes('index-en') || currentPage.includes('privacy-policy') || currentPage.includes('terms-and-conditions');
        
        alert(isEnglishPage ? 
            'Thank you for your message! We will contact you soon.' : 
            '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// Header scroll effect
function setupHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Configurar filtros de testimonios
function setupTestimonialFilters() {
    const filterButtons = document.querySelectorAll('.testimonial-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase activa de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase activa al botón clickeado
            button.classList.add('active');
            
            // Aplicar filtro
            const filter = button.getAttribute('data-filter');
            renderTestimonials(filter);
        });
    });
}

// Animación al hacer scroll
function setupScrollAnimations() {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-content, .vehicle-card, .testimonial-card, .stat-card, .step');
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };
    
    // Set initial styles for animation
    const animatedElements = document.querySelectorAll('.about-content, .vehicle-card, .testimonial-card, .stat-card, .step');
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Redirigir según el idioma preferido (solo en la página de inicio)
    redirectBasedOnLanguage();
    
    // Configurar el toggle de idioma
    setupLanguageToggle();
    
    // Configurar el menú móvil
    setupMobileMenu();
    
    // Configurar el formulario de contacto
    setupContactForm();
    
    // Configurar el efecto de scroll en el header
    setupHeaderScroll();
    
    // Configurar scroll suave
    setupSmoothScrolling();
    
    // Renderizar testimonios iniciales (solo 5 estrellas) si existe el contenedor
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer) {
        renderTestimonials('5');
        setupTestimonialFilters();
    }
    
    // Configurar animaciones al hacer scroll
    setupScrollAnimations();
});
