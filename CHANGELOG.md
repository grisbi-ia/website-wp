# 📝 Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).


## [1.2.9] - 2026-03-09

### ✨ Nuevas Características

- **Nueva página de aplicación móvil**:
  - `mobile-app.html`: Página completa dedicada al aplicativo móvil de Wetzel's
  - Sección de descarga con información "Próximamente disponible"
  - 12 funcionalidades destacadas del aplicativo (registro, puntos, billetera, etc.)
  - Sección de soporte con información de contacto específica
  - Links legales elegantes con diseño card sutil

- **Nueva página de eliminación de cuenta**:
  - `delete-account.html`: Página dedicada para solicitudes de eliminación de datos personales
  - Formulario completo con validaciones del lado cliente
  - Información legal sobre retención de datos fiscales (SRI Ecuador)
  - Proceso paso a paso desde la aplicación móvil
  
- **Formulario de eliminación de cuenta**:
  - Validación de campos obligatorios (email, confirmación)
  - Captura de datos con FormData
  - Mensaje de confirmación detallado con timeline del proceso
  - Navegación posterior al envío
  - Logging para debugging en consola  

### 🔧 Mejoras

- **Navegación actualizada**:
  - Enlaces de "Eliminar Cuenta" agregados al footer de todas las páginas
  - Enlace "Descargar App" agregado en footer bajo nueva sección "Aplicación Móvil"
  - Navegación consistente mantenida en todas las páginas

- **Formularios mejorados**:
  - Formulario de eliminación de cuenta con funcionalidad JavaScript completa
  - Validaciones del lado cliente para campos obligatorios
  - Mensajes de confirmación profesionales y detallados
  - Integración con el mismo sistema que el formulario de contacto

### 🎨 Estilos CSS Nuevos

- **Mobile App Page**:
  - `.download-grid`: Sistema de descarga con información y preview
  - `.app-preview-image`: Imagen del aplicativo con efectos hover
  - `.steps-list` y `.step`: Lista numerada mejorada con alineación perfecta
  - `.legal-grid` y `.legal-card`: Cards elegantes para información legal
  - `.app-features`: Grid responsive para características del aplicativo
  - `.screenshots-gallery`: Galería de capturas con placeholders

- **Delete Account Page**:
  - `.delete-form`: Formulario estilizado consistente con el sitio
  - `.methods-grid`: Grid para métodos de eliminación (app vs web)
  - `.info-boxes`: Cajas informativas sobre el proceso de eliminación


## [1.2.7] - 2026-01-26

### ✨ Nuevas Características

- **Nueva ubicación agregada**:
  - Centro Comercial Iñaquito - CCI
  - Dirección: Av. Amazonas N36-152 y Naciones Unidas
  - Horario: Lun - Vie: 10:00 - 20:00 | Sáb - Dom: 10:00 - 21:00
  - Teléfono: +593 99 460 0545
  - Badge "Nueva Tienda" para destacar la sucursal
  - Integración con Google Maps

### 🔧 Mejoras

- **Enlaces de WhatsApp**:
  - Todos los números +593 99 460 0545 ahora son enlaces directos a WhatsApp
  - Formato: https://wa.me/593994600545
  - Mantiene el estilo visual original
  - Se abre en nueva pestaña
  - Implementado en 15 instancias en 9 archivos HTML

- **Actualización de título**:
  - Cambio de "Nuestra Ubicación Actual" a "Nuestras Ubicaciones"
  - Refleja correctamente las múltiples tiendas disponibles

### 📁 Archivos Modificados

- `find-a-location.html`: Nueva ubicación CCI, enlaces WhatsApp
- `contact.html`: Enlaces WhatsApp
- `index.html`: Enlaces WhatsApp en footer
- `menu.html`: Enlaces WhatsApp en footer
- `about.html`: Enlaces WhatsApp en footer
- `gallery.html`: Enlaces WhatsApp en footer, reorganización de imágenes
- `faq.html`: Enlaces WhatsApp en footer
- `privacy-policy.html`: Enlaces WhatsApp
- `terms-conditions.html`: Enlaces WhatsApp

---

## [1.2.6] - 2025-10-03

### 🛠️ Cambios y Correcciones

- **Actualización de información de contacto en todo el sitio**:
  - Números telefónicos actualizados a teléfonos reales de Ecuador
  - Oficina Administrativa: `+593 99 460 0545`
  - Paseo San Francisco: `+593 99 881 0252`
  - Eliminación de números de teléfono placeholder/ficticios

- **Corrección de correos electrónicos**:
  - Servicio al Cliente: `servicio@wetzelspretzels.ec` → `atc@wetzelspretzels.ec`
  - Soporte al Cliente: `soporte@wetzelspretzels.ec` → `atc@wetzelspretzels.ec`
  - Unificación de atención al cliente bajo dominio `atc@`

- **Archivos actualizados**:
  - `README.md`: Teléfono de contacto principal
  - `about.html`, `contact.html`, `faq.html`, `find-a-location.html`: Números telefónicos
  - `gallery.html`, `index.html`, `menu.html`: Información de contacto en footer
  - `privacy-policy.html`, `terms-conditions.html`: Emails de soporte y contacto

---

## [1.2.5] - 2025-10-03

### 🛠️ Cambios y Correcciones

- Menú (`menu.html`):
  - Corrección de acentos: "Jalapeno" → "Jalapeño" en Cheese Melt
  - Mejora en descripción de Pepperoni Twist (texto más conciso)
  - Actualización descripción Jalaroni: mejor formateo del texto con saltos de línea
  - Dog Bites: "Versión mini" → "La versión en bocadillos" para mayor claridad
  - Cheesy Dog Bites: descripción mejorada "para no dejar a nadie sin probar"
  - Fresh Lemonade: capitalización consistente "frambuesa roja" → "Frambuesa Roja"
  - Frozen Granita: especificación más precisa "2 sabores" y "Frambuesa Azul y Fresa"

- Página Principal (`index.html`):
  - Fresh Lemonade: descripción actualizada mencionando sabores "Original o Frambuesa Roja"

- Limpieza de archivos:
  - Eliminados archivos de desarrollo no necesarios: `DEPLOYMENT-GUIDE.md`, `DESARROLLO_LOG.md`, `create-page.sh`

- Assets:
  - Imagen `fresh_lemonade.jpg` actualizada

---

## [1.2.4] - 2025-09-22

### 🛠️ Cambios y Correcciones

- Menú (`menu.html`)**:
  - Actualización de información de menu

- Galería (`gallery.html`)**:
  - Agregado video `wetzel_in_action.mp4` en sección "Vídeo Destacado"
  - Implementado reproductor de video responsivo con controles nativos
  - Optimizado para visualización de video vertical
- Assets:
  - Modificada: `images/fresh_lemonade.jpg`
  - Agregado: `video/wetzel_in_action.mp4`

---

## [1.2.2] - 2025-09-12

### 🛠️ Cambios y Correcciones

- Menú (`menu.html`):
  - Precios ocultos temporalmente con comentarios HTML en múltiples productos (Pretzels, Wetzel Bitz, Wetzel Dogs, Dips y Bebidas, incluyendo Café)
  - Renombrados para mayor claridad: "Jalapeño Cheese" → "Jalapeño Cheddar Cheese"; "Cheese Dog Bites" → "Cheesy Dog Bites"
  - Alt text de imágenes actualizado acorde a los nuevos nombres
  - Imagen de Fresh Lemonade actualizada
- Ubicaciones (`find-a-location.html`):
  - Imagen de la tienda insignia actualizada a una nueva ruta en subcarpeta (`images/paseo_san_francisco/...`)
  - Secciones desactivadas temporalmente (comentadas) mientras se actualiza la información: Mapa de Google, Tour Virtual y Entrega a domicilio
- Galería (`gallery.html`):
  - Sección "Galería de Locales" deshabilitada temporalmente
  - Galería tipo Masonry actualizada con nuevas fotos del local Paseo San Francisco (1–6) y dos imágenes adicionales (equipo y pretzels)
  - Nuevas rutas usando subcarpetas `images/paseo_san_francisco/` e `images/masonry/`
- Assets:
  - Agregadas imágenes: `images/paseo_san_francisco/{paseo_san_francisco.jpeg,_1.jpeg,_2.jpeg,_3.jpeg,_4.jpeg,_5.jpeg,_6.jpeg}` y `images/masonry/{m1_paseo_san_francisco_team.jpeg,m2_pretzels.jpeg}`
  - Eliminada imagen antigua: `images/paseo_san_francisco.jpeg`
  - Modificada: `images/fresh_lemonade.jpg`

---

## [1.2.3] - 2025-09-12

### 🛠️ Cambios y Correcciones

- about.html
  - Sección "Preguntas Frecuentes" ahora con fondo amarillo de marca y títulos en azul para mejor contraste
  - CTA actualizado a estilo reutilizable: botón azul con texto blanco y hover blanco/azul (`btn-blue-on-yellow`)
  - Sección "Nuestro Equipo" comentada para ocultarla temporalmente
- find-a-location.html
  - "Próximas Ubicaciones" ahora con fondo amarillo y textos en azul
- index.html
  - Ocultadas temporalmente (comentadas) las cajas de precio en productos destacados del carrusel
- contact.html
  - Sección de mapa comentada temporalmente mientras se actualiza

---

## [1.2.1] - 2025-09-03

### 🛠️ Cambios y Correcciones

- Actualización de enlaces de redes sociales en todas las páginas y footer:
  - Facebook: ahora apunta a la cuenta oficial de Ecuador
  - Instagram y TikTok: nuevos enlaces oficiales
  - Twitter eliminado de todos los footers y secciones
- Corrección de todos los correos electrónicos a dominio oficial `@wetzelspretzels.ec` en todas las páginas, formularios y documentos legales
- Actualización de información de contacto y ubicaciones:
  - Paseo San Francisco como local principal
  - Teléfonos y horarios actualizados
- Mejoras menores en textos de productos y descripciones en el menú
  - Corrección de nombres e imágenes en productos del menú
- Actualización de enlaces y textos en FAQ, gallery, privacy-policy y terms-conditions
- README actualizado con email oficial
- Limpieza y corrección de detalles menores en todos los archivos HTML y scripts

---

## [1.2.0] - 2025-08-06

### 🎨 Mejoras de Diseño y Experiencia

#### ✨ Agregado
- **Nuevas Páginas Legales**
  - `privacy-policy.html`: Política de privacidad completa con 13 secciones
  - `terms-conditions.html`: Términos y condiciones con 19 secciones
  - Cumplimiento con normativas ecuatorianas y GDPR
  - Información específica de Ecuador (RUC, jurisdicción, apps de delivery)

- **Herramientas de Desarrollo**
  - `create-page.sh`: Script bash para crear páginas nuevas automáticamente
  - `css/utilities.css`: Sistema de clases utilitarias CSS
  - `DEPLOYMENT-GUIDE.md`: Guía completa para despliegue en hosting compartido
  - `DESARROLLO_LOG.md`: Log detallado del proceso de desarrollo

- **Nuevos Assets**
  - `images/coffee.jpg`: Nueva imagen para producto café
  - `images/favicon.png`: Favicon localizado
  - `images/logo_header.png`: Logo del header localizado
  - `images/footer_background.jpg`: Fondo mejorado para footer

#### 🔄 Mejorado
- **Sistema de Botones Refinado**
  - Botones del banner principal (`index.html`): Fondo azul → hover blanco
  - Botones "VER MÁS" del carrusel: Fondo amarillo → hover azul
  - Botón "VER UBICACIONES": Cambiado a clase `btn-yellow` para mejor contraste
  - Consistencia visual mejorada en todos los botones

- **Página de Contacto Rediseñada**
  - Layout de información de contacto en grid 2x2
  - Sección amarilla de ancho completo para mejor UX
  - Tipografía consistente aplicada a formularios

- **Sistema de Colores Corregido**
  - Alternancia sistemática azul/amarillo en secciones
  - `about.html`: "Nuestros Valores" (amarillo) y "Momentos Wetzel's" (azul)
  - `gallery.html`: Patrón de colores alternos implementado
  - Variables CSS correctamente aplicadas sin conflictos

- **Assets Localizados**
  - Eliminación de dependencias CDN externas para favicon y logos
  - Mejora en tiempos de carga y confiabilidad
  - Todos los assets críticos ahora son locales

#### 🍕 Nuevo Producto
- **Café agregado al menú**
  - Precio: $1.00
  - Imagen: `coffee.jpg`
  - Descripción llamativa: "Delicioso café recién preparado, complemento perfecto"
  - Ubicado en sección de bebidas de `menu.html`

#### 🧹 Limpieza y Optimización
- **Archivos CSS Optimizados**
  - Eliminación de variables CSS conflictivas en `utilities.css`
  - Corrección de clases duplicadas de padding
  - Sistema de variables consolidado y limpio

- **Estructura de Proyecto**
  - Eliminación de archivos de ejemplo PHP y SSI
  - Limpieza de templates no utilizados
  - Estructura de directorios optimizada

#### 🔧 Cambios Técnicos
- **Navegación Unificada**
  - Banner y footer estandarizados en todas las páginas
  - Links de navegación actualizados para incluir páginas legales
  - Comportamiento de enlaces unificado (misma ventana)

- **Sistema de Componentes**
  - Clases CSS utilitarias para reutilización
  - Sistema de grid responsive mejorado
  - Animaciones y transiciones optimizadas

### 🎯 Páginas Actualizadas

#### 📄 `index.html`
- Botones del banner principal rediseñados (azul → hover blanco)
- Botones carrusel "VER MÁS" (amarillo → hover azul)
- Botón "VER UBICACIONES" con mejor contraste (clase `btn-yellow`)

#### 👥 `about.html`
- Sección "Nuestros Valores" con fondo amarillo
- Archivo `utilities.css` agregado para clases utilitarias
- Navegación legal agregada al footer

#### 📞 `contact.html`
- Rediseño completo del layout de información
- Grid 2x2 para información de contacto
- Sección amarilla de ancho completo
- Tipografía del sitio aplicada consistentemente

#### 🍽️ `menu.html`
- Nuevo producto "Café" agregado ($1.00)
- Imagen `coffee.jpg` integrada
- Descripción optimizada para SEO y conversión

#### 🏢 Todas las páginas
- Assets localizados (favicon, logo del header)
- Enlaces a páginas legales en el footer
- Navegación unificada y consistente

### 🛠️ Herramientas de Desarrollo

#### 📜 `create-page.sh`
- Script automatizado para crear páginas nuevas
- Template con header/footer unificado
- Variables para título y descripción personalizados

#### 🎨 `css/utilities.css`
- Clases utilitarias para espaciado (mt-1 a mt-5, mb-1 a mb-5, p-1 a p-5)
- Sistema de grid responsivo (.grid-2, .grid-3, .grid-4)
- Clases de colores y texto (.bg-primary, .text-primary, etc.)
- Botones reutilizables (.btn-primary, .btn-secondary)
- Tarjetas y animaciones (.card, .fade-in, .slide-up)

#### 📚 `DEPLOYMENT-GUIDE.md`
- Guía completa para hosting compartido
- Instrucciones paso a paso para cPanel
- Optimizaciones opcionales (.htaccess, compresión)
- Lista de verificación para despliegue

### 📋 Cumplimiento Legal
- **Ecuador-específico**: RUC, jurisdicción, normativas locales
- **Apps de delivery**: Uber Eats, Rappi, PedidosYa mencionadas
- **GDPR-style**: Derechos de usuarios, protección de datos
- **Términos completos**: 19 secciones cubriendo todos los aspectos legales

### 🔧 Optimizaciones Técnicas
- Eliminación de archivos PHP/SSI de ejemplo
- Corrección de conflictos en variables CSS  
- Sistema de clases utilitarias para mejor mantenibilidad
- Assets localizados para mejor performance

## [1.1.0] - 2025-08-05

### 🎨 Mejoras de Diseño y UX

#### ✨ Agregado
- **Sistema de Botones Mejorado**
  - Nueva clase `.btn-blue-on-yellow` para botones sobre fondos amarillos
  - Nueva clase `.btn-yellow-on-light` para botones sobre fondos claros
  - Efectos hover mejorados con transiciones suaves
  - Mejor contraste y accesibilidad visual

- **Sistema de Tabs Renovado**
  - Tabs con fondo amarillo y texto/iconos azules (estado normal)
  - Hover y estado activo con fondo azul y texto/iconos blancos
  - Aplicado consistentemente en todas las páginas

#### 🔧 Mejorado
- **Navegación FAQ**
  - Arreglado sistema de navegación por pestañas
  - Sincronización perfecta entre scroll y pestañas activas
  - JavaScript mejorado para manejo de estados activos

- **Colores de Marca**
  - Implementación completa de colores oficiales Wetzel's
  - Actualización de variables CSS con colores verificados
  - Consistencia visual en todos los componentes

#### 🎯 Botones Actualizados por Página
- **index.html**
  - "EXPLORAR MENÚ" y "ENCUENTRA TU TIENDA": Ahora azul con hover blanco
  - "VER MENÚ COMPLETO", "Conoce Más", "VER TODAS LAS UBICACIONES": Amarillo con hover azul

- **about.html**
  - "Ver Todas las Preguntas Frecuentes": Amarillo con hover azul

- **find-a-location.html**
  - "Cómo llegar", "Ver Menú", "Ordenar Ahora": Amarillo con hover azul

- **contact.html**
  - "Enviar Mensaje": Amarillo con hover azul
  - "Encuentra tu tienda", "Ver Menú": Mantienen estilo amarillo existente

- **faq.html**
  - "Contactar Ahora": Mantiene estilo amarillo con hover blanco

#### 🏷️ Tabs Renovados
- **index.html**: Todos, Pretzels, Wetzel Bitz, Wetzel Dogs, Bebidas
- **menu.html**: Pretzels, Wetzel Bitz, Wetzel Dogs, Dips, Bebidas  
- **faq.html**: General, Productos, Ingredientes, Ubicaciones

#### 🔧 Cambios Técnicos
- Actualización de `main.js` para mejorar funcionalidad de pestañas FAQ
- Nuevas clases CSS para diferentes contextos de botones
- Mejoras en transiciones y efectos hover
- Optimización del sistema de navegación

## [1.0.0] - 2025-08-05

### 🎉 Lanzamiento Inicial

Primera versión completa del sitio web oficial de Wetzel's Pretzels Ecuador.

### ✨ Agregado

#### 🏗️ Estructura Base
- Configuración inicial del proyecto con HTML5, CSS3 y JavaScript vanilla
- Estructura de carpetas organizada (`css/`, `js/`, `images/`)
- Configuración de variables CSS para colores de marca y tipografías
- Sistema de diseño responsivo mobile-first

#### 📄 Páginas Principales
- **Página Principal** (`index.html`)
  - Hero section con llamada a la acción
  - Sección de productos destacados con filtrado por categorías
  - Grid de características de la marca
  - Sección "Nuestra Historia" con imagen y texto
  - Footer completo con enlaces y redes sociales

- **Menú** (`menu.html`)
  - Navegación sticky por categorías con iconos
  - Sección de Pretzels (Original, Sinful Cinnamon, Jalapeño Cheese)
  - Sección de Wetzel Bitz (Original, Cin-A-Bitz, Pizza Bitz)
  - Sección de Wetzel Dogs (Original, Jalapeño Cheese, Cheese Meltdown)
  - Sección de Dips y Salsas (Cheese, Caramel, Pizza Sauce)
  - Sección de Bebidas (Fresh Lemonade, Frozen Granita, Fountain Drinks)

- **Nosotros** (`about.html`)
  - Historia detallada de la marca desde 1994
  - Misión, visión y valores corporativos
  - Grid de valores con iconografía
  - Sección específica sobre Wetzel's en Ecuador

- **Ubicaciones** (`find-a-location.html`)
  - Información de tiendas actuales en Ecuador
  - Integración con Google Maps
  - Sección de franquicias y oportunidades de negocio
  - Lista de ciudades para próximas aperturas

- **Galería** (`gallery.html`)
  - Grid responsivo de imágenes de productos
  - Filtros por categorías (Productos, Tiendas, Eventos, Ingredientes)
  - Imágenes optimizadas de alta calidad

- **FAQ** (`faq.html`)
  - Preguntas frecuentes organizadas por categorías
  - Sistema de acordeón interactivo
  - Navegación por pestañas (Productos, Tiendas, Pedidos, Franquicias)

- **Contacto** (`contact.html`)
  - Formulario de contacto funcional
  - Información de contacto con iconografía
  - Grid de información de oficinas
  - Integración con redes sociales

#### 🎨 Sistema de Diseño
- **Colores de Marca**:
  - Azul primario: `#004594`
  - Amarillo secundario: `#fec33a`
  - Azul terciario: `#0072CE`
- **Tipografías**:
  - Londrina Solid para títulos y elementos destacados
  - Roboto para texto general
- **Variables CSS** para espaciado, colores, sombras y transiciones
- **Sistema de Grid** responsivo con CSS Grid y Flexbox

#### 🚀 Funcionalidades JavaScript
- **Navegación móvil** con menú hamburguesa
- **Filtrado de productos** por categorías en página principal
- **Navegación smooth scroll** entre secciones
- **Sistema de acordeón** para FAQ
- **Animaciones on scroll** con reveal effects
- **Navegación sticky** en página de menú
- **Header con efecto scroll** (cambio de estilo al hacer scroll)

#### 📱 Responsive Design
- Diseño mobile-first optimizado para todos los dispositivos
- Breakpoints para móvil (320px+), tablet (768px+) y desktop (1024px+)
- Imágenes optimizadas y adaptativas
- Menú de navegación adaptativo

#### 🔧 Optimizaciones
- **SEO**: Meta tags, títulos descriptivos y estructura semántica
- **Performance**: CSS y JavaScript optimizados, imágenes comprimidas
- **Accesibilidad**: Contraste adecuado, navegación por teclado, alt tags
- **Cross-browser**: Compatibilidad con navegadores modernos

#### 🌐 Integración Externa
- **Font Awesome 6.4.0** para iconografía
- **Google Fonts** para tipografías Londrina Solid y Roboto
- **Google Maps** integrado en página de ubicaciones
- **Redes Sociales** enlaces a Facebook, Instagram y TikTok

### 🎯 Características Especiales

#### 🍞 Catálogo de Productos
- **6 categorías principales**: Pretzels, Wetzel Bitz, Dogs, Dips, Bebidas
- **Información detallada** de cada producto con precios
- **Badges especiales**: Bestseller, Picante, Refrescante, etc.
- **Imágenes de alta calidad** para todos los productos

#### 📍 Sistema de Ubicaciones
- **Información completa** de tiendas con horarios y contacto
- **Mapas interactivos** con Google Maps embebido
- **Sección de franquicias** con información para inversionistas
- **Expansión planificada** a otras ciudades del Ecuador

#### 🎨 Experiencia Visual
- **Animaciones suaves** con CSS transitions
- **Efectos hover** en botones y tarjetas
- **Loading animations** para elementos que aparecen al hacer scroll
- **Gradientes y sombras** para profundidad visual

### 📋 Contenido

#### 🏪 Información de Tiendas
- Quito - Centro Comercial Iñaquito (CCI)
- Quito - Scala Shopping
- Información de horarios de atención
- Datos de contacto por ubicación

#### 🥨 Productos Destacados
- **Original Pretzel**: El clásico enrollado a mano ($3.99)
- **Sinful Cinnamon**: Pretzel dulce con canela ($4.49)
- **Jalapeño Cheese**: Combinación picante y cremosa ($5.49)
- **Wetzel Dog**: Hot dog en masa de pretzel ($5.49)
- **Fresh Lemonade**: Limonada fresca del día ($3.49)

### 🔧 Configuración Técnica
- **Estructura HTML5** semántica y accesible
- **CSS3** con variables personalizadas y metodología BEM
- **JavaScript ES6+** con DOM manipulation moderna
- **Imágenes optimizadas** en formatos web (.jpg, .png)
- **Fonts loading** optimizado con preconnect

---

## 📊 Estadísticas de la Versión 1.0

- **Páginas**: 7 páginas principales
- **Líneas de CSS**: 2,349 líneas
- **Líneas de JavaScript**: 275 líneas
- **Productos catalogados**: 20+ productos
- **Categorías**: 5 categorías principales
- **Ubicaciones**: 2 tiendas activas
- **Responsive breakpoints**: 3 tamaños principales

---

## 🎯 Próximas Versiones (Roadmap)

### [1.1.0] - Planificado
- [ ] Sistema de pedidos en línea
- [ ] Integración con delivery apps
- [ ] Testimonios de clientes
- [ ] Blog de noticias y promociones

### [1.2.0] - Planificado
- [ ] Programa de lealtad
- [ ] Calculadora nutricional
- [ ] Sistema de reservas
- [ ] Chat bot de atención al cliente

### [2.0.0] - Futuro
- [ ] E-commerce completo
- [ ] Panel de administración
- [ ] Sistema de franquicias online
- [ ] Aplicación móvil PWA
