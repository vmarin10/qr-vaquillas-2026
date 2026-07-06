// Base de datos de cartas para QR Vaquillas 2026
// Cada carta contiene: id, personaje, categoria, frase, imagen, rareza, sonido

const cartas = [
    {
        id: 1,
        personaje: "Amador",
        categoria: "LQSA",
        frase: "Merengue, merengue.",
        imagen: "img/amador1.jpg",
        rareza: 4,
        sonido: null
    },
    {
        id: 2,
        personaje: "Tío Paco",
        categoria: "Clásico",
        frase: "¡Vamos que se puede!",
        imagen: "img/tiopaco1.jpg",
        rareza: 3,
        sonido: null
    },
    {
        id: 3,
        personaje: "Manolo",
        categoria: "Fiestas",
        frase: "¿Y qué tal el verano?",
        imagen: "img/manolo1.jpg",
        rareza: 2,
        sonido: null
    },
    {
        id: 4,
        personaje: "Pepe",
        categoria: "LQSA",
        frase: "¡A por la octava!",
        imagen: "img/pepe1.jpg",
        rareza: 5,
        sonido: null
    },
    {
        id: 5,
        personaje: "Juan",
        categoria: "Clásico",
        frase: "Se hace camino al andar.",
        imagen: "img/juan1.jpg",
        rareza: 3,
        sonido: null
    },
    {
        id: 6,
        personaje: "Antonio",
        categoria: "Fiestas",
        frase: "¡Qué noche tan memorable!",
        imagen: "img/antonio1.jpg",
        rareza: 2,
        sonido: null
    },
    {
        id: 7,
        personaje: "Luis",
        categoria: "LQSA",
        frase: "La suerte del campeón.",
        imagen: "img/luis1.jpg",
        rareza: 4,
        sonido: null
    },
    {
        id: 8,
        personaje: "Miguel",
        categoria: "Clásico",
        frase: "El esfuerzo siempre vale la pena.",
        imagen: "img/miguel1.jpg",
        rareza: 3,
        sonido: null
    },
    {
        id: 9,
        personaje: "Carlos",
        categoria: "Fiestas",
        frase: "¡Hoy se celebra como no hay mañana!",
        imagen: "img/carlos1.jpg",
        rareza: 2,
        sonido: null
    },
    {
        id: 10,
        personaje: "Javier",
        categoria: "LQSA",
        frase: "Concentration, concentration.",
        imagen: "img/javier1.jpg",
        rareza: 5,
        sonido: null
    },
    {
        id: 11,
        personaje: "Roberto",
        categoria: "Clásico",
        frase: "La unión hace la fuerza.",
        imagen: "img/roberto1.jpg",
        rareza: 3,
        sonido: null
    },
    {
        id: 12,
        personaje: "Fernando",
        categoria: "Fiestas",
        frase: "¡Brindemos por los buenos momentos!",
        imagen: "img/fernando1.jpg",
        rareza: 2,
        sonido: null
    },
    {
        id: 13,
        personaje: "Santiago",
        categoria: "LQSA",
        frase: "El campeón nunca se rinde.",
        imagen: "img/santiago1.jpg",
        rareza: 4,
        sonido: null
    },
    {
        id: 14,
        personaje: "David",
        categoria: "Clásico",
        frase: "Cada día es una nueva oportunidad.",
        imagen: "img/david1.jpg",
        rareza: 3,
        sonido: null
    },
    {
        id: 15,
        personaje: "Pablo",
        categoria: "Fiestas",
        frase: "¡La fiesta recién empieza!",
        imagen: "img/pablo1.jpg",
        rareza: 2,
        sonido: null
    }
];

// Configuración de rareza (1-5 estrellas)
const configuracionRareza = {
    1: "Común",
    2: "Poco común", 
    3: "Rara",
    4: "Épica",
    5: "Legendaria"
};

// Categorías disponibles
const categorias = [
    "LQSA",
    "Clásico", 
    "Fiestas"
];

// Exportar para uso en script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cartas, configuracionRareza, categorias };
}
