// Base de datos de cartas para QR Vaquillas 2026 - v2.0
// Cada carta contiene: id, personaje, categoria, frase, imagen, rareza, sonido

console.log('data.js cargado correctamente');
console.log('Definiendo cartas...');

const cartas = [
    {
        id: 1,
        personaje: "Amador",
        categoria: "LQSA",
        frase: "Merengue, merengue.",
        imagen: "img/amador_carta_maite.png",
        rareza: 4,
        sonido: null
    },
    {
        id: 2,
        personaje: "Tío Paco",
        categoria: "Clásico",
        frase: "Querida cachorrita, te voy a meter todo menos miedo",
        imagen: "img/cachorrita_miedo.png",
        rareza: 3,
        sonido: null
    }
];

console.log('Cartas definidas:', cartas.length);
console.log('Asignando cartas a window...');
window.cartas = cartas;
console.log('window.cartas asignado:', window.cartas);

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
