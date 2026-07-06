# PRD - Proyecto QR Vaquillas 2026

## Visión

Crear una experiencia divertida accesible mediante un único QR impreso
en las camisetas de la peña. Cada escaneo mostrará una carta aleatoria
con una frase y una imagen.

## Objetivos

-   100% gratuito.
-   Sin backend.
-   Compatible con GitHub Pages.
-   Responsive.
-   Fácil de ampliar.

## Stack

-   HTML
-   CSS
-   JavaScript Vanilla
-   LocalStorage

## Estructura

``` text
/
 index.html
 style.css
 script.js
 data.js
 /img
 /gif
 /audio
 README.md
```

## Flujo

1.  Usuario escanea QR.
2.  Se abre la web.
3.  Se carga `data.js`.
4.  Se elige una carta aleatoria evitando repetir la anterior.
5.  Se anima la aparición.
6.  Botón "Otra carta".

## Modelo de carta

``` js
{
 id:1,
 personaje:"Amador",
 categoria:"LQSA",
 frase:"Merengue, merengue.",
 imagen:"img/amador1.jpg",
 rareza:4,
 sonido:null
}
```

## UI

-   Fondo festivo.
-   Tarjeta centrada.
-   Imagen grande.
-   Frase destacada.
-   Personaje.
-   Categoría.
-   Rareza.
-   Botón "Otra carta".

## Funcionalidades MVP

-   Aleatorio.
-   Responsive.
-   Sin repetir inmediata.
-   Animación.
-   Carga rápida.

## Funcionalidades opcionales

-   Favoritos.
-   Compartir.
-   Sonidos.
-   Modo oscuro.
-   Contador de cartas vistas.

## Requisitos técnicos

-   Sin frameworks.
-   Código modular.
-   Datos separados en `data.js`.
-   Lazy loading de imágenes.

## Despliegue GitHub Pages

1.  Crear repositorio.
2.  Subir archivos.
3.  Settings → Pages.
4.  Deploy from branch `main`.
5.  Guardar.
6.  Copiar URL pública.
7.  Generar un QR hacia esa URL.

## Mantenimiento

Para añadir una carta: 1. Copiar imagen a `/img`. 2. Añadir un objeto al
array de `data.js`. 3. Commit y push.

## Lo que debe generar la IA

-   Todo el proyecto.
-   Código comentado.
-   README con instrucciones.
-   Diseño moderno.
-   Animaciones.

## Lo que haré yo

-   Añadir imágenes.
-   Añadir frases.
-   Subir cambios a GitHub.

## Mejoras futuras

-   GIFs.
-   Ruleta.
-   Estadísticas.
-   Modo "reto".
-   Filtros por categoría.
