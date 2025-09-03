#!/bin/bash

# Script para crear nueva página con template
# Uso: ./create-page.sh nombre-pagina "Título de la Página" "Descripción"

if [ $# -lt 2 ]; then
    echo "Uso: $0 nombre-pagina 'Título de la Página' 'Descripción'"
    echo "Ejemplo: $0 servicios 'Nuestros Servicios' 'Conoce todos los servicios que ofrecemos'"
    exit 1
fi

PAGE_NAME=$1
PAGE_TITLE=$2
PAGE_DESCRIPTION=${3:-"Página de $PAGE_TITLE"}

cat > "${PAGE_NAME}.html" << EOF
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$PAGE_TITLE | Wetzel's Pretzels Ecuador</title>
    <meta name="description" content="$PAGE_DESCRIPTION">

    <!-- Favicon -->
    <link rel="shortcut icon" href="images/favicon.png">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- CSS -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/utilities.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="nav-container">
                <div class="logo">
                    <a href="index.html">
                        <img src="images/logo_header.png" alt="Wetzel's Pretzels Logo">
                    </a>
                </div>

                <div class="mobile-toggle">
                    <i class="fas fa-bars"></i>
                </div>

                <ul class="nav-menu">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="menu.html">Menú</a></li>
                    <li><a href="about.html">Nosotros</a></li>
                    <li><a href="find-a-location.html">Ubicaciones</a></li>
                    <li><a href="gallery.html">Galería</a></li>
                    <li><a href="faq.html">Preguntas Frecuentes</a></li>
                    <li><a href="contact.html">Contacto</a></li>
                </ul>
            </div>
        </div>
    </header>

    <!-- Page Banner -->
    <section class="page-banner menu-banner">
        <div class="container">
            <div class="banner-content">
                <h1 class="animate-on-scroll">$(echo $PAGE_TITLE | tr '[:lower:]' '[:upper:]')</h1>
                <p class="animate-on-scroll">$PAGE_DESCRIPTION</p>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <section class="section">
        <div class="container">
            <h2 class="section-title animate-on-scroll">$PAGE_TITLE</h2>
            <div class="animate-on-scroll">
                <!-- Agrega tu contenido aquí -->
                <p>Contenido de la página $PAGE_TITLE</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <p>Hand Held Happiness desde 1994</p>

                    <div class="social-icons">
                        <a href="https://www.facebook.com/WetzelsPretzelsEcuador" class="social-icon" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/wetzelspretzelsec/" class="social-icon" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.tiktok.com/@wetzelspretzelsec" class="social-icon" target="_blank"><i class="fab fa-tiktok"></i></a>
                    </div>
                </div>

                <div class="footer-links">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="menu.html">Menú</a></li>
                        <li><a href="about.html">Nosotros</a></li>
                        <li><a href="find-a-location.html">Ubicaciones</a></li>
                        <li><a href="gallery.html">Galería</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Información</h4>
                    <ul>
                        <li><a href="faq.html">Preguntas Frecuentes</a></li>
                        <li><a href="contact.html">Contacto</a></li>
                        <li><a href="privacy-policy.html">Política de Privacidad</a></li>
                        <li><a href="terms-conditions.html">Términos y Condiciones</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Contacto</h4>
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i> Quito, Ecuador</li>
                        <li><i class="fas fa-phone"></i> +593 (0) 999 999 999</li>
                        <li><i class="fas fa-envelope"></i> info@wetzelspretzels.ec</li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2025 Wetzel's Pretzels Ecuador. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="js/main.js"></script>
</body>
</html>
EOF

echo "✅ Página $PAGE_NAME.html creada exitosamente"
echo "📝 Título: $PAGE_TITLE"
echo "📄 Descripción: $PAGE_DESCRIPTION"
echo ""
echo "Para usarla, edita el contenido en la sección 'Main Content'"
