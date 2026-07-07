// Configuración global de la aplicación QR Vaquillas 2026
// Aquí se definen todos los ajustes: probabilidades, ataques, URLs, etc.

const appConfig = {
    // ============================================
    // PROBABILIDADES GLOBALES
    // ============================================
    // Probabilidad de mostrar las cartas normales (0.85 = 85%)
    // El resto (0.15 = 15%) se destinará a simulaciones de seguridad
    cardsProbability: 0.85,

    // ============================================
    // MODO DEBUG / EDUCATIVO
    // ============================================
    // Si es true, se muestran mensajes en consola con detalles
    debug: false,

    // ============================================
    // SIMULACIONES DE SEGURIDAD (ataques QR)
    // ============================================
    attacks: {
        // Activar/desactivar simulaciones de seguridad
        enabled: true,

        // Lista de ataques disponibles.
        // Cada ataque tiene:
        //   - enabled: activar/desactivar individualmente
        //   - probability: peso dentro del grupo de ataques (se normaliza automáticamente)
        //   - url: destino del ataque (si aplica)
        //   - title, description, redirectDelay: mensajes para el usuario
        types: {
            redirect: {
                enabled: true,
                probability: 1.0, // Por ahora el único ataque implementado
                url: 'https://www.unizar.es/',
                title: '🚨 Simulación de Seguridad Informática',
                description: 'Este QR ha redirigido tu dispositivo a una web externa.',
                warningText: 'En un caso real, un QR malicioso podría llevarte a:',
                redirectDelay: 3, // segundos antes de redirigir
                buttons: {
                    redirect: '→ Redirigir ahora',
                    close: '✓ Cerrar advertencia'
                }
            }
            // Aquí se pueden añadir más ataques en el futuro:
            // phishing: { ... },
            // call: { ... },
            // clipboard: { ... },
            // geolocation: { ... },
        }
    },

    // ============================================
    // URLs DE REFERENCIA
    // ============================================
    urls: {
        university: 'https://www.unizar.es/',
        securityInfo: 'https://es.wikipedia.org/wiki/C%C3%B3digo_QR#Seguridad'
    },

    // ============================================
    // PARÁMETROS DE URL (query strings)
    // ============================================
    // ?cards=1        -> forzar mostrar cartas
    // ?attack=1       -> forzar un ataque aleatorio
    // ?redirect=1     -> forzar redirección
    // ?security=1     -> forzar modal educativo
    queryParams: {
        forceCards: 'cards',
        forceAttack: 'attack',
        forceRedirect: 'redirect',
        forceSecurity: 'security'
    }
};

// Exportar para entornos de prueba
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { appConfig };
}
