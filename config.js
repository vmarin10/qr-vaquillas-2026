// Configuración global de la aplicación QR Vaquillas 2026

const appConfig = {
    // Probabilidad de mostrar cartas normales (0.85 = 85%)
    // El resto (15%) ejecuta un ataque de seguridad
    cardsProbability: 0.85,

    // Tipo de ataque activo: 'redirect', 'call' o 'emergency'
    attackType: 'redirect',

    // === ATAQUE: redirección web ===
    // Web "graciosa" de ejemplo. Puedes cambiarla por cualquier otra URL segura.
    attackUrl: 'https://theuselessweb.com/',
    redirectDelay: 2,

    // === ATAQUE: llamada telefónica ===
    // Número de teléfono configurable para la práctica (tu móvil de pruebas)
    phoneNumber: '+34600000000', // <-- Cambia aquí tu número

    // === ATAQUE: emergencia ===
    // Número de emergencia configurable (ej. 112). SÓLO para demostración educativa.
    // Nunca se llama automáticamente: el navegador/móvil pide confirmación.
    emergencyNumber: '112',

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
