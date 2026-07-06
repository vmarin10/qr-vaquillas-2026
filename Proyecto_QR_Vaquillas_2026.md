# Proyecto QR Vaquillas 2026

## Objetivo

Crear una web estática, gratuita y responsive a la que accederá un código QR impreso en las camisetas de la peña.

Cada vez que un usuario escanee el QR deberá aparecer una **carta aleatoria** con:

- Una imagen (GIF o JPG).
- Una frase graciosa.
- El nombre del personaje o categoría.
- Una rareza (opcional).
- Un botón **"Otra carta"** para obtener otra aleatoria sin recargar la página.

La experiencia debe ser muy visual, rápida y divertida.

---

# Tecnologías

Utilizar únicamente:

- HTML5
- CSS3
- JavaScript (Vanilla)

No utilizar:

- React
- Angular
- Vue
- Node
- Backend
- Base de datos

Debe poder alojarse directamente en **GitHub Pages**.

---

# Estructura del proyecto

```text
qr-vaquillas/
│
├── index.html
├── style.css
├── script.js
├── data.js
├── img/
├── gifs/
├── sounds/
└── README.md
```

---

# Funcionamiento

1. Cargar todas las cartas desde `data.js`.
2. Elegir una carta aleatoria.
3. Mostrar:
   - Imagen
   - Nombre
   - Frase
   - Categoría
   - Rareza
4. Animar la aparición.
5. Permitir cambiar pulsando **"Otra carta"**.
6. Evitar repetir inmediatamente la carta anterior.

---

# Modelo de datos

```javascript
{
  id: 1,
  personaje: "Amador",
  categoria: "LQSA",
  frase: "Merengue, merengue.",
  imagen: "img/amador/amador01.jpg",
  rareza: "⭐⭐⭐⭐",
  color: "#ffcc00"
}
```

Todas las cartas estarán en un array dentro de `data.js`.

---

# Diseño

- Estética tipo cartas coleccionables.
- Responsive para móvil.
- Animaciones suaves (fade, zoom o giro).
- Colores vivos.
- Muy rápido de cargar.

---

# Funcionalidades

## Obligatorias

- Carta aleatoria.
- Botón "Otra carta".
- Responsive.
- Código limpio y comentado.
- Sin frameworks.
- Compatible con GitHub Pages.

## Opcionales

- Rarezas.
- Favoritos (LocalStorage).
- Contador de cartas descubiertas.
- Compartir carta.
- Sonidos activables/desactivables.
- Modo oscuro.

---

# Contenido

Toda la información debe leerse desde `data.js`.

Añadir una carta nueva solo debe requerir:

1. Añadir la imagen.
2. Añadir un objeto al array.

---

# Archivos que debe generar la IA

- index.html
- style.css
- script.js
- data.js
- README.md
- Estructura de carpetas
- Diseño responsive
- Animaciones
- Lógica aleatoria

---

# Lo que haré yo

- Añadir imágenes.
- Añadir GIFs.
- Añadir frases nuevas.
- Cambiar colores si quiero.

---

# Despliegue

La IA debe explicar paso a paso:

1. Crear un repositorio en GitHub.
2. Subir el proyecto.
3. Activar GitHub Pages.
4. Obtener la URL pública.
5. Generar un QR apuntando a esa URL.
6. Probar el QR desde un móvil.

---

# Mantenimiento

La IA debe explicar cómo:

1. Añadir nuevas imágenes.
2. Añadir nuevas cartas.
3. Publicar cambios.
4. Mantener el proyecto.

---

# Objetivo final

Obtener un proyecto gratuito, fácil de mantener, completamente funcional y listo para GitHub Pages, donde cada escaneo del QR muestre una carta aleatoria divertida con imágenes y frases.
