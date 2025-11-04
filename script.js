/**
 * ========================================
 * SCRIPT DEL PORTAFOLIO TALENTO TECH
 * ========================================
 * Este archivo maneja la interacción del usuario,
 * especialmente el envío del formulario de contacto.
 */

// Esperar a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * ========================================
     * MANEJO DEL FORMULARIO DE CONTACTO
     * ========================================
     */
    
    // Obtener el formulario por su ID
    const contactForm = document.getElementById('contact-form');
    
    // Agregar un evento para cuando se envíe el formulario
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevenir el comportamiento por defecto del formulario
            // (evita que la página se recargue)
            event.preventDefault();
            
            // Obtener los valores de los campos del formulario
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Validar que todos los campos estén completos
            if (nombre && correo && mensaje) {
                // Mostrar mensaje en la consola del navegador
                console.log('Formulario enviado correctamente');
                
                // Limpiar el formulario después del envío
                contactForm.reset();
            } else {
                // Si faltan campos, mostrar un mensaje de error
                alert('Por favor, completa todos los campos del formulario.');
            }
        });
    }
    
    /**
     * ========================================
     * EFECTO SUAVE AL HACER SCROLL EN NAVEGACIÓN
     * ========================================
     */
    
    // Obtener todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Agregar evento de click a cada enlace
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Obtener el destino del enlace (ej: #inicio, #experiencia, etc.)
            const href = this.getAttribute('href');
            
            // Si el enlace apunta a una sección dentro de la página
            if (href.startsWith('#')) {
                event.preventDefault(); // Prevenir comportamiento por defecto
                
                // Obtener el elemento de destino
                const targetSection = document.querySelector(href);
                
                // Si el elemento existe, hacer scroll suave hacia él
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth', // Scroll suave
                        block: 'start' // Alinear al inicio de la sección
                    });
                }
            }
        });
    });
    
    /**
     * ========================================
     * EFECTO DE NAVEGACIÓN AL HACER SCROLL
     * ========================================
     */
    
    // Función que se ejecuta cuando el usuario hace scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        // Si el scroll es mayor a 50px, cambiar el estilo de la navegación
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(26, 26, 46, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(160, 32, 240, 0.3)';
        } else {
            // Volver al estilo original
            navbar.style.backgroundColor = 'rgba(26, 26, 46, 0.95)';
            navbar.style.boxShadow = '0 2px 15px rgba(10, 10, 30, 0.5)';
        }
    });
    
    /**
     * ========================================
     * ANIMACIÓN DE APARICIÓN AL HACER SCROLL
     * ========================================
     */
    
    // Función para detectar cuando un elemento entra en la vista
    const observerOptions = {
        threshold: 0.1, // Activar cuando el 10% del elemento sea visible
        rootMargin: '0px 0px -50px 0px' // Margen adicional
    };
    
    // Crear un observador
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            // Si el elemento es visible
            if (entry.isIntersecting) {
                // Agregar clase para animación
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar las tarjetas de experiencia, habilidades y proyectos
    const cards = document.querySelectorAll('.experience-card, .skill-item, .project-card');
    cards.forEach(function(card) {
        // Establecer estado inicial
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Comenzar a observar
        observer.observe(card);
    });
    
    /**
     * ========================================
     * MENSAJE DE BIENVENIDA EN CONSOLA
     * ========================================
     */
    
    console.log('%c¡Bienvenido a TALENTO TECH!', 
                'color: #DDA0DD; font-size: 16px; font-weight: bold;');
    console.log('%cPrograma de formación en habilidades digitales.', 
                'color: #A020F0; font-size: 12px;');
});

