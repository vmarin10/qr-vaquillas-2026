// Configuración global de la aplicación QR Vaquillas 2026

const appConfig = {
    // Probabilidad temporal para pruebas: 0% cartas, 100% ataques
    // Después de probar, volver a 0.85
    cardsProbability: 0,

    // SOLO redirect activo para la prueba
    attackTypes: {
        redirect: {
            probability: 1,
            url: 'https://theuselessweb.com/',
            delay: 0
        }
    },

    // Parámetros URL para forzar modos:
    // ?cards=1     -> forzar cartas
    // ?attack=1    -> forzar ataque aleatorio
    // ?redirect=1  -> forzar redirección
    // ?call=1      -> forzar llamada
    queryParams: {
        forceCards: 'cards',
        forceAttack: 'attack',
        forceRedirect: 'redirect',
        forceCall: 'call'
    }
};

// Exportar para entornos de prueba
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { appConfig };
}
