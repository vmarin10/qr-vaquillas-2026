// Configuración global de la aplicación QR Vaquillas 2026

const appConfig = {
    // Probabilidad de mostrar cartas normales (0.85 = 85%)
    // El resto (15%) ejecuta un ataque de seguridad
    cardsProbability: 0.85,

    // Tipo de ataque activo: 'redirect' o 'call'
    attackType: 'redirect',

    // === ATAQUE: redirección web ===
    // URL a la que redirige el ataque. Cámbiala aquí fácilmente.
    attackUrl: 'https://theuselessweb.com/',
    redirectDelay: 2,

    // === ATAQUE: llamada telefónica ===
    // Número de teléfono configurable. Puede ser tu móvil de pruebas o 112 (solo demostración).
    phoneNumber: '+34600000000',

    // Parámetros URL para forzar modos:
    // ?cards=1  -> forzar cartas
    // ?attack=1 -> forzar ataque
    queryParams: {
        forceCards: 'cards',
        forceAttack: 'attack'
    }
};

// Exportar para entornos de prueba
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { appConfig };
}
