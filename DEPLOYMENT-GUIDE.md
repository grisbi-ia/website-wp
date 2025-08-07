# Lista de verificación para subir al hosting

## Archivos que debes subir a cPanel:

### 📁 Estructura de directorios:
```
public_html/
├── index.html
├── about.html
├── menu.html
├── contact.html
├── find-a-location.html
├── gallery.html
├── faq.html
├── privacy-policy.html
├── terms-conditions.html
├── css/
│   ├── styles.css
│   └── utilities.css
├── images/
│   ├── favicon.png
│   ├── logo_header.png
│   ├── logo_footer.jpg
│   └── [todas las demás imágenes]
└── js/
    └── main.js
```

### 🚀 Pasos para subir:

1. **Comprimir archivos locales:**
   - Selecciona todos los archivos HTML, carpetas css/, images/, js/
   - Créa un archivo ZIP con todo el contenido

2. **Subir vía cPanel:**
   - Entra a tu cPanel
   - Ve a "Administrador de archivos" (File Manager)
   - Navega a `public_html/`
   - Sube el archivo ZIP
   - Extrae el contenido

3. **Configurar permisos:**
   - Archivos HTML: 644
   - Carpetas: 755
   - Archivos CSS/JS: 644
   - Imágenes: 644

4. **Verificar:**
   - Visita tu dominio
   - Prueba todas las páginas
   - Verifica que las imágenes cargen
   - Prueba el menú en móvil

### ⚡ Optimizaciones opcionales:

1. **Activar compresión GZIP** (en cPanel -> "Optimize Website")
2. **Configurar cache** (si está disponible)
3. **Optimizar imágenes** (comprimir JPG/PNG antes de subir)
4. **Minificar CSS/JS** (opcional, usando herramientas online)

### 🔧 Configuración .htaccess opcional:

```apache
# Compresión GZIP
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache Headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```
