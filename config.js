// Configuración global de la aplicación QR Vaquillas 2026

const appConfig = {
    // Probabilidad de mostrar cartas normales (0.85 = 85%)
    // El resto (15%) redirige a attackUrl
    cardsProbability: 0.85,

    // URL a la que redirige cuando toca el "ataque"
    attackUrl: 'https://www.unizar.es/',

    // Segundos de espera antes de redirigir (0 = inmediato)
    redirectDelay: 2,

    // Parámetros URL para forzar modos:
    // ?cards=1  -> forzar cartas
    // ?attack=1 -> forzar redirección
    queryParams: {
        forceCards: 'cards',
        forceAttack: 'attack'
    }
};

// Exportar para entornos de prueba
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { appConfig };
}
