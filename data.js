// Base de datos de cartas para QR Vaquillas 2026 - v2.0
// Cada carta contiene: id, personaje, categoria, frase, imagen

console.log('data.js cargado correctamente');
console.log('Definiendo cartas...');

const cartas = [
    {
        id: 1,
        personaje: "Amador",
        categoria: "LQSA",
        frase: "Hacia Maite va un salami, rin, rin,Yo se la arrimaba, yo se la arrimé,Yo me pinchaba, yo me la pinché...¡A restregar cebolleta!",
        imagen: "img/amador_salami.png",
    },
    {
        id: 2,
        personaje: "Mariano",
        categoria: "Aqui no hay quien viva",
        frase: "Querida cachorrita, te voy a meter todo menos miedo",
        imagen: "img/cachorrita_miedo.png",
    },
    {
        id: 3,
        personaje: "Amador",
        categoria: "LQSA",
        frase: "El Amor es como un rio que moja y salpica y desembucha en el mar. Navegamos a la deriva y nuestros sentimientos flota entre la sal y las medusas marinas del mar... Oh el mar... Hogar del Calamar.",
        imagen: "img/amador_calamar.png",
    },
    {
        id: 4,
        personaje: "Amador",
        categoria: "LQSA",
        frase: "¡Oh Maite! oh... tus tetas son como perlas... ¡déjame verlas!",
        imagen: "img/amador_maite.png",
    },
    {
        id: 5,
        personaje: "Amador",
        categoria: "LQSA",
        frase: "— ¡No hombre! Tiene que ser algo más romántico, algo tipo: \"Oh Maite, tu dulzura...\" — ...¡me la pone dura!",
        imagen: "img/amador_carta_maite.png",
    },
    {
        id: 6,
        personaje: "Charo XXL",
        categoria: "Torre Infernal",
        frase: "¡Gordas NO!",
        imagen: "img/gordas_no.png",
    },
    {
        id: 7,
        personaje: "Ajo",
        categoria: "AJO",
        frase: "Te salio la foto del AJO, pues ahora me comes el de ABAJO",
        imagen: "img/ajo.png",
    },  
    {
        id: 8,
        personaje: "Bladi",
        categoria: "AJO",
        frase: "Si encuentras a este narco colombiano, TE INVITA a un cubata",
        imagen: "img/bladi_fumador.jpeg",
    },  
    {
        id: 9,
        personaje: "Charo",
        categoria: "Exótica",
        frase: "Si eres pro-palestina, me comes toda la sardina",
        imagen: "img/charo.png",
    },
    {
        id: 10,
        personaje: "Florin",
        categoria: "AJO",
        frase: "Te toco el Florin mariquita, si le enseñas las tetas se le pone pita",
        imagen: "img/florin_mariquita.jpeg",
    },
    {
        id: 11,
        personaje: "Saturno",
        categoria: "AJO",
        frase: "TE TOCO EL SATURNO SALVAJE, SI LO VES.. TE PEGARA UN BUEN VIAJE",
        imagen: "img/saturno.jpeg",
    },
    {
        id: 12,
        personaje: "Mariano",
        categoria: "Aqui no hay quien viva",
        frase: "Si ya lo decían los romanos: Carpe Diem, Tíratela, tíratela",
        imagen: "img/mariano.jpg",
    },
    {
        id: 13,
        personaje: "Amador",
        categoria: "LQSA",
        frase: "Central, aquí el detective León. Se confirma presencia de chochetes en la zona",
        imagen: "img/amador_cambio.jpeg",
    },
    {
        id: 14,
        personaje: "Salamanca",
        categoria: "Exótico",
        frase: "¿Tu no serás de Salamanca?",
        imagen: "img/salamanca.png",
    },
    {
        id: 15,
        personaje: "Victor",
        categoria: "AJO",
        frase: "Te ha tocado: Víctor, el que domina el Avespino, te come el chumino y con tremenda broca, no perdona ni un camino",
        imagen: "img/victor.jpeg",
    },
    {
        id: 16,
        personaje: "Unai",
        categoria: "Nazi",
        frase: "Te ha tocado el Unai nazi, si lo ves corre, es peor que una feminazí",
        imagen: "img/unai_nazi.jpeg",
    },
    {
        id: 17,
        personaje: "Amador",
        categoria: "LQSA",
        frase: "yo me enamore de tiii ay! de tus ojos preciosos ay! que me miran golosos golosos de golosina que te voy a poner fiiina que te voy a poneeer fiiina",
        imagen: "img/amador_guitarra.png",
    },
    {
        id: 18,
        personaje: "Charo",
        categoria: "Exótica",
        frase: "Charo usando su pc de sobremesa con su nuevo mousse",
        imagen: "img/charo_mouse.png",
    },
    {
        id: 19,
        personaje: "Israel",
        categoria: "Guerra",
        frase: "Regalo Israeli",
        imagen: "img/israel.jpeg",
    },
    {
        id: 20,
        personaje: "Ricardo",
        categoria: "Exótica",
        frase: "Te ha tocado Ricardo salvaje, le hicieron la pinza con un buen homenaje",
        imagen: "img/ricardo.png",
    }
];

console.log('Cartas definidas:', cartas.length);
console.log('Asignando cartas a window...');
window.cartas = cartas;
console.log('window.cartas asignado:', window.cartas);

// Categorías disponibles
const categorias = [
    "LQSA",
    "Aqui no hay quien viva", 
    "Torre Infernal",
    "AJO",
    "Exótica",
    "Nazi",
    "Guerra"
];

// Exportar para uso en script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cartas, categorias };
}
