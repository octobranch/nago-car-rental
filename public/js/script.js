// script.js
// Datos de testimonios - Extraídos de Google Maps con 5 estrellas
const testimonials = [
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
    container.innerHTML = '';
    
    let filteredTestimonials = testimonials;
    
    if (filter === '5') {
        filteredTestimonials = testimonials.filter(testimonial => testimonial.rating === 5);
    } else if (filter === 'google') {
        filteredTestimonials = testimonials.filter(testimonial => testimonial.source === 'google');
    } else if (filter === 'all') {
        // Todos los testimonios
    }
    
    if (filteredTestimonials.length === 0) {
        container.innerHTML = `
            <div class="testimonial-card" style="grid-column: 1 / -1; text-align: center;">
                <h3>No se encontraron testimonios</h3>
                <p>Intenta con otro filtro</p>
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

// Sistema de cambio de idioma
const languageToggle = document.getElementById('language-toggle');
let currentLanguage = 'es';

const translations = {
    es: {
        inicio: "Inicio",
        nosotros: "Quiénes Somos",
        vehiculos: "Vehículos",
        reservas: "Reservas",
        testimonios: "Testimonios",
        contacto: "Contacto",
        heroTitle: "Renta Premium de Autos en Cancún y Riviera Maya",
        heroSubtitle: "La mejor flota de vehículos con precios competitivos, servicio premium y entrega en cualquier ubicación",
        btnVehicles: "Ver Vehículos",
        btnContact: "Contactar Ahora",
        sectionAboutTitle: "Quiénes Somos",
        sectionAboutSubtitle: "Más de 10 años ofreciendo la mejor experiencia en renta de vehículos en la Riviera Maya",
        sectionVehiclesTitle: "Nuestra Flota Premium",
        sectionVehiclesSubtitle: "Descubre nuestra amplia selección de vehículos para todas tus necesidades de viaje",
        sectionReserveTitle: "Reserva Tu Vehículo",
        sectionReserveSubtitle: "Completa nuestro formulario para realizar tu reserva de manera rápida y segura",
        sectionTestimonialsTitle: "Lo Que Dicen Nuestros Clientes",
        sectionTestimonialsSubtitle: "Experiencias reales de viajeros que han confiado en nuestro servicio",
        sectionContactTitle: "Contáctanos",
        sectionContactSubtitle: "Estamos disponibles para resolver tus dudas y ayudarte con tu reserva",
        footerRights: "Todos los derechos reservados"
    },
    en: {
        inicio: "Home",
        nosotros: "About Us",
        vehiculos: "Vehicles",
        reservas: "Bookings",
        testimonios: "Testimonials",
        contacto: "Contact",
        heroTitle: "Premium Car Rental in Cancun and Riviera Maya",
        heroSubtitle: "The best fleet of vehicles with competitive prices, premium service and delivery anywhere",
        btnVehicles: "View Vehicles",
        btnContact: "Contact Now",
        sectionAboutTitle: "About Us",
        sectionAboutSubtitle: "Over 10 years offering the best car rental experience in Riviera Maya",
        sectionVehiclesTitle: "Our Premium Fleet",
        sectionVehiclesSubtitle: "Discover our wide selection of vehicles for all your travel needs",
        sectionReserveTitle: "Book Your Vehicle",
        sectionReserveSubtitle: "Complete our form to make your reservation quickly and securely",
        sectionTestimonialsTitle: "What Our Customers Say",
        sectionTestimonialsSubtitle: "Real experiences from travelers who have trusted our service",
        sectionContactTitle: "Contact Us",
        sectionContactSubtitle: "We're available to answer your questions and help with your booking",
        footerRights: "All rights reserved"
    }
};

function applyTranslations(lang) {
    // Actualizar botón de idioma
    languageToggle.innerHTML = `<i class="fas fa-globe"></i> ${lang === 'es' ? 'ES' : 'EN'}`;
    
    // Actualizar elementos de navegación
    document.querySelectorAll('.nav-links a').forEach((link, index) => {
        const keys = ['inicio', 'nosotros', 'vehiculos', 'reservas', 'testimonios', 'contacto'];
        if (index < keys.length) {
            link.textContent = translations[lang][keys[index]];
        }
    });
    
    // Actualizar sección hero
    document.querySelector('.hero h1').textContent = translations[lang].heroTitle;
    document.querySelector('.hero p').textContent = translations[lang].heroSubtitle;
    document.querySelector('.hero-buttons a:first-child').innerHTML = `<i class="fas fa-car"></i> ${translations[lang].btnVehicles}`;
    document.querySelector('.hero-buttons a:last-child').innerHTML = `<i class="fas fa-phone-alt"></i> ${translations[lang].btnContact}`;
    
    // Actualizar títulos de secciones
    document.querySelectorAll('.section-title').forEach((title, index) => {
        const keys = [
            'sectionAboutTitle', 
            'sectionVehiclesTitle', 
            'sectionReserveTitle', 
            'sectionTestimonialsTitle', 
            'sectionContactTitle'
        ];
        if (index < keys.length) {
            title.textContent = translations[lang][keys[index]];
        }
    });
    
    // Actualizar subtítulos de secciones
    document.querySelectorAll('.section-subtitle').forEach((subtitle, index) => {
        const keys = [
            'sectionAboutSubtitle', 
            'sectionVehiclesSubtitle', 
            'sectionReserveSubtitle', 
            'sectionTestimonialsSubtitle', 
            'sectionContactSubtitle'
        ];
        if (index < keys.length) {
            subtitle.textContent = translations[lang][keys[index]];
        }
    });
    
    // Actualizar footer
    document.querySelector('.copyright p').innerHTML = `&copy; 2023 Nago Car Rental. ${translations[lang].footerRights}`;
}

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    applyTranslations(currentLanguage);
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(currentLanguage === 'es' ? 
        '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.' : 
        'Thank you for your message! We will contact you soon.');
    contactForm.reset();
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { /* Umbral reducido */
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, /* Ajustado a la altura reducida */
                behavior: 'smooth'
            });
        }
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar testimonios iniciales (solo 5 estrellas)
    renderTestimonials('5');
    
    // Configurar filtros
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
    
    // Add scroll animation to elements
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
    document.querySelectorAll('.about-content, .vehicle-card, .testimonial-card, .stat-card, .step').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});
