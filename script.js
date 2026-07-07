// QR Vaquillas 2026 - Script principal
// Sistema de cartas aleatorias con animaciones y LocalStorage

class QRVaquillas {
    constructor() {
        this.cartas = window.cartas || [];
        this.ultimaCartaId = null;
        this.contadorCartasVistas = 0;
        this.cartasVistas = new Set();
        
        this.init();
    }

    init() {
        // Cargar estado desde LocalStorage
        this.cargarEstado();
        
        // Obtener elementos del DOM
        this.cardContainer = document.getElementById('cardContainer');
        this.btnOtraCarta = document.getElementById('btnOtraCarta');
        
        // Event listeners
        this.btnOtraCarta.addEventListener('click', () => this.mostrarCartaAleatoria());
        
        // Mostrar primera carta
        this.mostrarCartaAleatoria();
        
        // Lazy loading de imágenes
        this.setupLazyLoading();
    }

    cargarEstado() {
        try {
            const estadoGuardado = localStorage.getItem('qrVaquillas_estado');
            if (estadoGuardado) {
                const estado = JSON.parse(estadoGuardado);
                this.ultimaCartaId = estado.ultimaCartaId || null;
                this.contadorCartasVistas = estado.contadorCartasVistas || 0;
                this.cartasVistas = new Set(estado.cartasVistas || []);
            }
        } catch (error) {
            console.warn('Error cargando estado desde LocalStorage:', error);
        }
    }

    guardarEstado() {
        try {
            const estado = {
                ultimaCartaId: this.ultimaCartaId,
                contadorCartasVistas: this.contadorCartasVistas,
                cartasVistas: Array.from(this.cartasVistas),
                fechaUltimaVisita: new Date().toISOString()
            };
            localStorage.setItem('qrVaquillas_estado', JSON.stringify(estado));
        } catch (error) {
            console.warn('Error guardando estado en LocalStorage:', error);
        }
    }

    obtenerCartaAleatoria() {
        if (this.cartas.length === 0) {
            console.warn('No hay cartas disponibles');
            return null;
        }

        // Filtrar para evitar repetir la última carta inmediatamente
        let cartasDisponibles = this.cartas.filter(carta => carta.id !== this.ultimaCartaId);
        
        // Si solo queda una carta y es la última, permitir repetir
        if (cartasDisponibles.length === 0) {
            cartasDisponibles = [...this.cartas];
        }

        // Elegir carta aleatoria
        const indiceAleatorio = Math.floor(Math.random() * cartasDisponibles.length);
        return cartasDisponibles[indiceAleatorio];
    }

    crearHTMLCarta(carta) {
        // Determinar clase CSS según longitud de frase
        let fraseClass = 'card-frase';
        if (carta.frase.length > 100) {
            fraseClass += ' muy-larga';
        } else if (carta.frase.length > 60) {
            fraseClass += ' larga';
        }
        
        // Lazy loading para la imagen
        const imagenHTML = carta.imagen 
            ? `<img class="card-image" data-src="${carta.imagen}" alt="${carta.personaje}" loading="lazy">`
            : `<div class="card-image-placeholder">🎯</div>`;

        return `
            <div class="card" data-carta-id="${carta.id}">
                ${imagenHTML}
                <div class="card-info">
                    <div class="${fraseClass}">"${carta.frase}"</div>
                    <div class="card-personaje">👤 ${carta.personaje}</div>
                    <div class="card-categoria">🏷️ ${carta.categoria}</div>
                </div>
            </div>
        `;
    }

    async mostrarCartaAleatoria() {
        // Animación de salida
        const cartaActual = this.cardContainer.querySelector('.card');
        if (cartaActual) {
            cartaActual.classList.remove('show');
            
            // Esperar a que termine la animación de salida
            await this.esperar(300);
        }

        // Mostrar loading
        this.cardContainer.innerHTML = '<div class="loading">🎲 Buscando carta...</div>';

        // Simular pequeña demora para efecto dramático
        await this.esperar(500);

        // Obtener carta aleatoria
        const carta = this.obtenerCartaAleatoria();
        if (!carta) {
            this.cardContainer.innerHTML = '<div class="error">No hay cartas disponibles</div>';
            return;
        }

        // Actualizar estado
        this.ultimaCartaId = carta.id;
        this.contadorCartasVistas++;
        this.cartasVistas.add(carta.id);
        this.guardarEstado();

        // Crear y mostrar carta
        this.cardContainer.innerHTML = this.crearHTMLCarta(carta);
        
        // Lazy loading de la imagen
        const img = this.cardContainer.querySelector('img[data-src]');
        if (img) {
            img.src = img.dataset.src;
            img.onload = () => img.classList.add('loaded');
        }

        // Animación de entrada
        setTimeout(() => {
            const nuevaCarta = this.cardContainer.querySelector('.card');
            if (nuevaCarta) {
                nuevaCarta.classList.add('show');
            }
        }, 50);

        // Reproducir sonido si existe
        if (carta.sonido) {
            this.reproducirSonido(carta.sonido);
        }
    }

    setupLazyLoading() {
        // Intersection Observer para lazy loading
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.onload = () => img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            // Observar imágenes con data-src
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    async reproducirSonido(sonidoUrl) {
        try {
            const audio = new Audio(sonidoUrl);
            audio.volume = 0.5;
            await audio.play();
        } catch (error) {
            console.warn('Error reproduciendo sonido:', error);
        }
    }

    esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Métodos para funcionalidades futuras
    obtenerEstadisticas() {
        return {
            cartasVistas: this.contadorCartasVistas,
            cartasUnicasVistas: this.cartasVistas.size,
            totalCartas: this.cartas.length,
            porcentajeCompletado: Math.round((this.cartasVistas.size / this.cartas.length) * 100)
        };
    }

    resetearProgreso() {
        this.ultimaCartaId = null;
        this.contadorCartasVistas = 0;
        this.cartasVistas.clear();
        localStorage.removeItem('qrVaquillas_estado');
        this.mostrarCartaAleatoria();
    }
}

// Funciones utilitarias
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Esperar un poco y verificar que hay datos disponibles
    setTimeout(() => {
        console.log('Verificando datos de cartas...');
        console.log('window.cartas:', window.cartas);
        console.log('typeof cartas:', typeof window.cartas);
        console.log('cartas.length:', window.cartas ? window.cartas.length : 'undefined');
        
        if (!window.cartas || window.cartas.length === 0) {
            console.error('No se encontraron datos de cartas');
            document.getElementById('cardContainer').innerHTML = 
                '<div class="error">Error: No se encontraron las cartas. Verifica que data.js se cargue correctamente.</div>';
            return;
        }

        // Inicializar la aplicación
        window.qrVaquillas = new QRVaquillas();
        
        console.log('QR Vaquillas 2026 iniciado correctamente');
        console.log(`Cartas disponibles: ${window.cartas.length}`);
    }, 100);
});

// Simulación de seguridad: sistema de ataques QR configurable
class SecuritySimulator {
    constructor() {
        this.config = window.appConfig || {};
        this.ataquesConfig = this.config.attacks || { enabled: false, types: {} };
        this.debug = this.config.debug || false;
        
        this.init();
    }

    init() {
        const urlParams = new URLSearchParams(window.location.search);
        const params = this.config.queryParams || {};
        
        const forzarCartas = urlParams.has(params.forceCards);
        const forzarAtaque = urlParams.has(params.forceAttack);
        const forzarRedireccion = urlParams.has(params.forceRedirect);
        const forzarSeguridad = urlParams.has(params.forceSecurity);
        
        // Log de debug
        this.log('Inicializando SecuritySimulator');
        this.log('cardsProbability:', this.config.cardsProbability);
        
        // 1. Forzar mostrar cartas
        if (forzarCartas) {
            this.log('Modo forzado: cartas');
            return;
        }
        
        // 2. Forzar un ataque específico
        if (forzarRedireccion) {
            this.log('Modo forzado: redirección');
            this.ejecutarAtaque('redirect');
            return;
        }
        
        if (forzarAtaque) {
            this.log('Modo forzado: ataque aleatorio');
            this.ejecutarAtaqueAleatorio();
            return;
        }
        
        // 3. Modo educativo: mostrar modal explicativo
        if (forzarSeguridad) {
            this.log('Modo forzado: educativo');
            const ataque = this.getAtaque('redirect');
            if (ataque) this.mostrarModal(ataque);
            return;
        }
        
        // 4. Comportamiento aleatorio configurable
        // 85% cartas, 15% ataques (por defecto en appConfig)
        const random = Math.random();
        this.log('Random generado:', random);
        
        if (random < this.config.cardsProbability) {
            this.log('Resultado: mostrando cartas normales');
            return;
        }
        
        this.log('Resultado: ejecutando ataque');
        this.ejecutarAtaqueAleatorio();
    }

    // Obtener un ataque por su nombre
    getAtaque(tipo) {
        const ataque = this.ataquesConfig.types[tipo];
        if (!ataque || !ataque.enabled) return null;
        return { tipo, ...ataque };
    }

    // Seleccionar un ataque aleatorio entre los habilitados, respetando probabilidades
    seleccionarAtaqueAleatorio() {
        const ataques = Object.entries(this.ataquesConfig.types)
            .filter(([_, ataque]) => ataque.enabled)
            .map(([tipo, ataque]) => ({ tipo, ...ataque }));
        
        if (ataques.length === 0) return null;
        
        // Calcular peso total
        const pesoTotal = ataques.reduce((sum, ataque) => sum + (ataque.probability || 1), 0);
        let random = Math.random() * pesoTotal;
        
        for (const ataque of ataques) {
            random -= (ataque.probability || 1);
            if (random <= 0) return ataque;
        }
        
        return ataques[ataques.length - 1];
    }

    ejecutarAtaqueAleatorio() {
        if (!this.ataquesConfig.enabled) {
            this.log('Ataques deshabilitados, mostrando cartas');
            return;
        }
        
        const ataque = this.seleccionarAtaqueAleatorio();
        if (!ataque) {
            this.log('No hay ataques habilitados, mostrando cartas');
            return;
        }
        
        this.ejecutarAtaque(ataque.tipo);
    }

    ejecutarAtaque(tipo) {
        const ataque = this.getAtaque(tipo);
        if (!ataque) {
            this.log('Ataque no encontrado o deshabilitado:', tipo);
            return;
        }
        
        this.log('Ejecutando ataque:', tipo);
        
        switch (tipo) {
            case 'redirect':
                this.redirigir(ataque);
                break;
            // Aquí se pueden añadir más tipos de ataque en el futuro:
            // case 'phishing': this.phishing(ataque); break;
            // case 'call': this.call(ataque); break;
            // case 'clipboard': this.clipboard(ataque); break;
            default:
                this.log('Tipo de ataque no implementado:', tipo);
        }
    }

    // ===== ATAQUE: REDIRECCIÓN =====
    redirigir(ataque) {
        const url = ataque.url;
        const delayMs = (ataque.redirectDelay || 3) * 1000;
        
        this.mostrarPantallaRedireccion(ataque);
        
        setTimeout(() => {
            this.log('Redirigiendo a:', url);
            window.location.href = url;
        }, delayMs);
    }

    mostrarPantallaRedireccion(ataque) {
        const container = document.querySelector('.container');
        if (container) {
            container.style.display = 'none';
        }
        
        const redirectScreen = document.createElement('div');
        redirectScreen.className = 'security-modal';
        redirectScreen.style.display = 'flex';
        redirectScreen.id = 'redirectScreen';
        redirectScreen.innerHTML = `
            <div class="security-modal-content">
                <h2>${ataque.title}</h2>
                <p class="security-warning">${ataque.description}</p>
                <p class="security-url">${ataque.url}</p>
                <p>${ataque.warningText}</p>
                <ul>
                    <li>Páginas de phishing</li>
                    <li>Descargas de malware</li>
                    <li>Sitios de suplantación de identidad</li>
                </ul>
                <p class="security-note">Redirigiendo en ${ataque.redirectDelay || 3} segundos... (práctica educativa Unizar)</p>
            </div>
        `;
        
        document.body.appendChild(redirectScreen);
    }

    mostrarModal(ataque) {
        const modal = document.getElementById('securityModal');
        const urlElement = document.getElementById('maliciousUrl');
        const btnRedirect = document.getElementById('btnRedirect');
        const btnClose = document.getElementById('btnCloseModal');
        
        if (!modal || !urlElement || !btnRedirect || !btnClose) {
            console.warn('No se encontraron elementos del modal de seguridad');
            return;
        }
        
        urlElement.textContent = ataque.url;
        btnRedirect.textContent = ataque.buttons?.redirect || '→ Redirigir ahora';
        btnClose.textContent = ataque.buttons?.close || '✓ Cerrar advertencia';
        
        modal.style.display = 'flex';
        
        btnRedirect.addEventListener('click', () => {
            this.log('Redirigiendo desde modal a:', ataque.url);
            window.location.href = ataque.url;
        });
        
        btnClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    log(...args) {
        if (this.debug) {
            console.log('[SecuritySimulator]', ...args);
        }
    }
}

// Inicializar simulador de seguridad
document.addEventListener('DOMContentLoaded', () => {
    window.securitySimulator = new SecuritySimulator();
});

// Manejo de errores globales
window.addEventListener('error', (event) => {
    console.error('Error en la aplicación:', event.error);
});

// Service Worker para PWA (opcional, para futuro)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registrado'))
        //     .catch(error => console.log('Error en SW:', error));
    });
}
