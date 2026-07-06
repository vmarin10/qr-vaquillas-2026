// Base de datos de cartas para QR Vaquillas 2026 - v2.0
// Cada carta contiene: id, personaje, categoria, frase, imagen, rareza, sonido

console.log('data.js cargado correctamente');
console.log('Definiendo cartas...');

const cartas = [
    {
        id: 1,
        personaje: "Amador",
        categoria: "LQSA",
        frase: "Hacia Maite va un salami, rin, rin,Yo se la arrimaba, yo se la arrimé,Yo me pinchaba, yo me la pinché...¡A restregar cebolleta!",
        imagen: "img/amador_salami.png",
        rareza: 4,
        sonido: null
    },
    {
        id: 2,
        personaje: "Mariano",
        categoria: "Aqui no hay quien viva",
        frase: "Querida cachorrita, te voy a meter todo menos miedo",
        imagen: "img/cachorrita_miedo.png",
        rareza: 3,
        sonido: null
    },
    {
        id: 3,
        personaje: "Amador",
        categoria: "LQSA",
        frase: "El Amor es como un rio que moja y salpica y desembucha en el mar. Navegamos a la deriva y nuestros sentimientos flota entre la sal y las medusas marinas del mar... Oh el mar... Hogar del Calamar.",
        imagen: "img/amador_calamar.png",
        rareza: 4,
        sonido: null
    },
    {
        id: 4,
        personaje: "Amador",
        categoria: "LQSA",
        frase: "¡Oh Maite! oh... tus tetas son como perlas... ¡déjame verlas!",
        imagen: "img/amador_maite.png",
        rareza: 2,
        sonido: null
    },
    {
        id: 5,
        personaje: "Amador",
        categoria: "LQSA",
        frase: "— ¡No hombre! Tiene que ser algo más romántico, algo tipo: \"Oh Maite, tu dulzura...\" — ...¡me la pone dura!",
        imagen: "img/amador_carta_maite.png",
        rareza: 3,
        sonido: null
    },
    {
        id: 6,
        personaje: "XXL",
        categoria: "Torre Infernal",
        frase: "¡Gordas NO!",
        imagen: "img/gordas_no.png",
        rareza: 1,
        sonido: null
    },
    {
        id: 7,
        personaje: "Ajo",
        categoria: "AJO",
        frase: "Te salio la foto del AJO, pues ahora me comes el de ABAJO",
        imagen: "img/ajo.png",
        rareza: 5,
        sonido: null
    },  
    {
        id: 8,
        personaje: "Bladi",
        categoria: "AJO",
        frase: "Si encuentras a este narco colombiano, TE INVITA a un cubata",
        imagen: "img/bladi_fumador.jpeg",
        rareza: 2,
        sonido: null
    },  
    {
        id: 9,
        personaje: "Charo",
        categoria: "Exótica",
        frase: "Si eres pro-palestina, me comes toda la sardina",
        imagen: "img/charo.png",
        rareza: 2,
        sonido: null
    },
    {
        id: 10,
        personaje: "Florin",
        categoria: "AJO",
        frase: "Te toco el Florin mariquita, si le enseñas las tetas se le pone pita",
        imagen: "img/florin_mariquita.jpeg",
        rareza: 2,
        sonido: null
    },
    {
        id: 11,
        personaje: "Saturno",
        categoria: "AJO",
        frase: "TE TOCO EL SATURNO SALVAJE, SI LO VES.. TE PEGARA UN BUEN VIAJE",
        imagen: "img/saturno.jpeg",
        rareza: 3,
        sonido: null
    },
    {
        id: 12,
        personaje: "Mariano",
        categoria: "Aqui no hay quien viva",
        frase: "Si ya lo decían los romanos: Carpe Diem, Tíratela, tíratela",
        imagen: "img/mariano.jpeg",
        rareza: 3,
        sonido: null
    }
];

console.log('Cartas definidas:', cartas.length);
console.log('Asignando cartas a window...');
window.cartas = cartas;
console.log('window.cartas asignado:', window.cartas);

// Configuración de tipo de frase (1-5 niveles)
const configuracionRareza = {
    1: "Cachonda",
    2: "Atrevida", 
    3: "Graciosa",
    4: "Juguetona",
    5: "Legendaria"
};

// Categorías disponibles
const categorias = [
    "LQSA",
    "Aqui no hay quien viva", 
    "Torre Infernal",
    "AJO",
    "Exótica"
];

// Exportar para uso en script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cartas, configuracionRareza, categorias };
}
