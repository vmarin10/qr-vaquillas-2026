// Configuración global de la aplicación QR Vaquillas 2026

const appConfig = {
    // Probabilidad de mostrar cartas normales (0.85 = 85%)
    // El resto (15%) ejecuta un ataque de seguridad
    cardsProbability: 0.85,

    // Tipos de ataque disponibles. Solo uno debe estar enabled: true.
    // Para añadir más ataques en el futuro, se añaden aquí y en script.js.
    attackType: 'call', // 'redirect' o 'call'

    // === ATAQUE: redirección web ===
    attackUrl: 'https://www.unizar.es/',
    redirectDelay: 2,

    // === ATAQUE: llamada telefónica ===
    // Número de teléfono configurable. Se usa el protocolo tel:.
    // Nota: los navegadores/móviles suelen pedir confirmación antes de llamar.
    phoneNumber: '+34600000000', // <-- Cambia aquí tu número

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
