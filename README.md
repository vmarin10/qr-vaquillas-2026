# QR Vaquillas 2026 🎯

Proyecto web para mostrar cartas aleatorias con frases e imágenes, accesible mediante QR en las camisetas de la peña.

## 📋 Descripción

Aplicación web estática que muestra cartas aleatorias con:
- Frases características de los miembros de la peña
- Fotos de cada persona
- Sistema de rareza (1-5 estrellas)
- Categorías temáticas
- Animaciones y diseño responsive
- Sin repetición inmediata de cartas

## 🚀 Características

### MVP (Mínimo Viable Producto)
- ✅ Aleatorio de cartas
- ✅ Diseño responsive
- ✅ Sin repetir carta inmediata
- ✅ Animaciones fluidas
- ✅ Carga rápida
- ✅ LocalStorage para persistencia

### Funcionalidades Opcionales
- 🔄 Sistema de favoritos
- 📤 Compartir cartas
- 🔊 Sonidos personalizados
- 🌙 Modo oscuro
- 📊 Contador de cartas vistas

## 🛠️ Stack Tecnológico

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno con animaciones
- **JavaScript Vanilla** - Lógica del juego
- **LocalStorage** - Persistencia de datos
- **GitHub Pages** - Hosting gratuito

## 📁 Estructura del Proyecto

```
QR_Vaquillas/
├── index.html          # Página principal
├── style.css           # Estilos y animaciones
├── script.js           # Lógica de la aplicación
├── data.js             # Base de datos de cartas
├── img/                # Imágenes de las cartas
├── README.md           # Este archivo
└── PRD_QR_Vaquillas_2026.md  # Documento de requisitos
```

## 🎮 Modelo de Datos

Cada carta sigue esta estructura:

```javascript
{
    id: 1,
    personaje: "Nombre del personaje",
    categoria: "LQSA|Clásico|Fiestas",
    frase: "Frase característica",
    imagen: "img/nombre.jpg",
    rareza: 1-5,        // Número de estrellas
    sonido: null        // URL de audio (opcional)
}
```

## 🚀 Despliegue en GitHub Pages

### 1. Crear Repositorio
```bash
git init
git add .
git commit -m "Initial commit - QR Vaquillas 2026"
git branch -M main
git remote add origin https://github.com/tu-usuario/qr-vaquillas-2026.git
git push -u origin main
```

### 2. Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` y `/ (root)`
5. Click Save

### 3. Obtener URL
GitHub te proporcionará una URL como:
`https://tu-usuario.github.io/qr-vaquillas-2026/`

### 4. Generar QR
Usa cualquier generador de QR online con esa URL.

## 📝 Mantenimiento

### Añadir una nueva carta:
1. **Añadir imagen**: Copia la foto a la carpeta `/img/`
2. **Editar datos**: Añade un objeto al array en `data.js`
3. **Subir cambios**: 
   ```bash
   git add .
   git commit -m "Añadir nueva carta: [nombre]"
   git push
   ```

### Editar carta existente:
1. Modifica los datos en `data.js`
2. Actualiza la imagen si es necesario
3. Sube los cambios

## 🎨 Personalización

### Colores y Tema
Edita las variables CSS en `style.css`:
```css
:root {
    --primary-color: #ff6b35;    /* Naranja */
    --secondary-color: #f7931e;  /* Amarillo */
    --dark-color: #2c3e50;       /* Oscuro */
    --light-color: #ecf0f1;      /* Claro */
}
```

### Fuentes
El proyecto usa Google Fonts:
- **Bebas Neue** - Para títulos y frases
- **Roboto** - Para texto general

## 📱 Compatible con

- ✅ Móviles (iOS/Android)
- ✅ Tablets
- ✅ Desktop
- ✅ Todos los navegadores modernos

## 🔧 Configuración Avanzada

### Estadísticas
Puedes ver las estadísticas de uso en la consola:
```javascript
// En la consola del navegador
qrVaquillas.obtenerEstadisticas();
```

### Resetear Progreso
```javascript
// En la consola del navegador
qrVaquillas.resetearProgreso();
```

## 🚨 Solución de Problemas

### Las imágenes no cargan
- Verifica que las rutas en `data.js` sean correctas
- Asegúrate que los archivos existan en `/img/`
- Los nombres deben coincidir exactamente (mayúsculas/minúsculas)

### La web no funciona en GitHub Pages
- Verifica que el repositorio sea público
- Espera unos minutos después del deploy
- Revisa la configuración en Settings → Pages

### El QR no funciona
- Verifica que la URL sea correcta y accesible
- Genera un nuevo QR con la URL correcta
- Prueba la URL en el navegador primero

## 📄 Licencia

Este proyecto es para uso personal de la peña. 
Siéntete libre de modificarlo y adaptarlo.

## 🚀 Despliegue
Activo en GitHub Pages - Julio 2026 - v2.1

## 🤝 Contribuciones

Las contribuciones son bienvenidas:
- Nuevas frases
- Mejoras en el diseño
- Nuevas funcionalidades
- Corrección de errores

---

**Hecho con ❤️ para la peña**  
*QR Vaquillas 2026*
