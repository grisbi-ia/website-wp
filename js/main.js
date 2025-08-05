/*-----------------------------------------------
# Wetzel's Pretzels Ecuador - JavaScript Functionality
# Autor: Copilot Design Team
# Fecha: Mayo 2025
-----------------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    // Variables
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const productCards = document.querySelectorAll('.product-card');
    const menuNavItems = document.querySelectorAll('.menu-nav-item');
    const sections = document.querySelectorAll('section[id]');
    const faqItems = document.querySelectorAll('.faq-item');

    // Menú móvil
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Header scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Activar elementos al hacer scroll
        const scrollElements = document.querySelectorAll('.animate-on-scroll');
        scrollElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('show');
            }
        });

        // Actualizar navegación activa en el menú
        updateActiveMenuSection();
    });

    // Función para comprobar si un elemento está visible en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Activar todos los elementos visibles al cargar
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    scrollElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('show');
        }
    });

    // Filtrado de categorías en la página de inicio
    if (categoryTabs.length > 0 && productCards.length > 0) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function () {
                // Remover clase active de todas las pestañas
                categoryTabs.forEach(tab => tab.classList.remove('active'));
                // Añadir clase active a la pestaña clickeada
                this.classList.add('active');

                const category = this.getAttribute('data-category');

                // Filtrar productos
                productCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Navegación en la página de menú
    function updateActiveMenuSection() {
        if (menuNavItems.length === 0 || sections.length === 0) return;

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (sectionId && window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        menuNavItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');
            if (href && href.includes(current) && current !== '') {
                item.classList.add('active');
            }
        });
    }

    // Navegación suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });

                // Cerrar menú móvil si está abierto
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (mobileToggle) {
                        mobileToggle.querySelector('i').classList.remove('fa-times');
                        mobileToggle.querySelector('i').classList.add('fa-bars');
                    }
                }
            }
        });
    });

    // Manejo de FAQ en la página Nosotros
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            if (answer) {
                // Ocultar todas las respuestas inicialmente
                answer.style.display = 'none';
            }

            question.addEventListener('click', function () {
                // Cerrar todos los otros FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.display = 'none';
                        }
                    }
                });

                // Toggle current item
                item.classList.toggle('active');

                // Toggle la respuesta actual
                if (answer) {
                    if (item.classList.contains('active')) {
                        answer.style.display = 'block';
                    } else {
                        answer.style.display = 'none';
                    }
                }
            });
        });

        // Abrir el primer item por defecto
        if (faqItems.length > 0) {
            faqItems[0].classList.add('active');
            const firstAnswer = faqItems[0].querySelector('.faq-answer');
            if (firstAnswer) {
                firstAnswer.style.display = 'block';
            }
        }
    }

    // Manejar envío de formulario de contacto
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Aquí iría la lógica para enviar el formulario por AJAX
            // Por ahora solo mostraremos un mensaje de confirmación

            const formData = new FormData(this);
            console.log('Formulario enviado con los siguientes datos:');
            for (let pair of formData.entries()) {
                console.log(pair[0] + ': ' + pair[1]);
            }

            // Mostrar mensaje de confirmación
            this.innerHTML = `
                <div style="text-align: center; padding: 30px;">
                    <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--primary-color); margin-bottom: 20px;"></i>
                    <h3>¡Mensaje Enviado!</h3>
                    <p>Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
                    <button type="button" class="btn btn-primary mt-4" onclick="location.reload()">Enviar otro mensaje</button>
                </div>
            `;
        });
    }

    // Manejar búsqueda de ubicaciones
    const locationSearch = document.querySelector('.location-search');
    if (locationSearch) {
        const searchButton = locationSearch.querySelector('button');
        if (searchButton) {
            searchButton.addEventListener('click', function (e) {
                e.preventDefault();
                const searchInput = locationSearch.querySelector('input');
                if (searchInput && searchInput.value.trim()) {
                    // Aquí iría la lógica para buscar ubicaciones
                    // Por ahora solo mostraremos un mensaje
                    alert(`Buscando tiendas en: ${searchInput.value.trim()}`);
                }
            });
        }
    }

    // Auto-slider para testimonios (si hay más de 4)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    if (testimonialSlider && testimonialCards.length > 4) {
        let currentSlide = 0;
        const totalSlides = Math.ceil(testimonialCards.length / 4);

        // Crear indicadores de navegación
        const sliderNav = document.createElement('div');
        sliderNav.className = 'slider-nav';

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = i === 0 ? 'slider-dot active' : 'slider-dot';
            dot.setAttribute('data-slide', i);
            sliderNav.appendChild(dot);
        }

        testimonialSlider.parentNode.appendChild(sliderNav);

        // Función para cambiar de slide
        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;

            // Actualizar dots
            document.querySelectorAll('.slider-dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        // Event listeners para los dots
        document.querySelectorAll('.slider-dot').forEach(dot => {
            dot.addEventListener('click', function () {
                goToSlide(parseInt(this.getAttribute('data-slide')));
            });
        });

        // Auto-slider
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }, 5000);
    }
});