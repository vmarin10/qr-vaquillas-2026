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

// Simulación de seguridad: redirección maliciosa por QR
class SecuritySimulator {
    constructor() {
        this.urlsPeligrosas = [
            'https://banco-falso-secure.com/login',
            'https://instagram-verify-account.net/confirm',
            'https://premio-ganador.es/recibir',
            'https://update-android-required.com/download',
            'https://factura-agencia-tributaria.es/pagar'
        ];
        this.urlSegura = 'https://es.wikipedia.org/wiki/C%C3%B3digo_QR#Seguridad';
        
        this.init();
    }

    init() {
        // Mostrar modal si hay parámetro ?security=1 o ?redirect=1, o con 30% de probabilidad
        const urlParams = new URLSearchParams(window.location.search);
        const forzarSeguridad = urlParams.has('security') || urlParams.has('redirect');
        const probabilidad = Math.random() < 0.30;
        
        if (forzarSeguridad || probabilidad) {
            this.mostrarModal();
        }
    }

    mostrarModal() {
        const modal = document.getElementById('securityModal');
        const urlElement = document.getElementById('maliciousUrl');
        const btnRedirect = document.getElementById('btnRedirect');
        const btnClose = document.getElementById('btnCloseModal');
        
        if (!modal || !urlElement || !btnRedirect || !btnClose) {
            console.warn('No se encontraron elementos del modal de seguridad');
            return;
        }
        
        // Elegir URL peligrosa aleatoria
        const urlPeligrosa = this.urlsPeligrosas[Math.floor(Math.random() * this.urlsPeligrosas.length)];
        urlElement.textContent = urlPeligrosa;
        
        // Mostrar modal
        modal.style.display = 'flex';
        
        // Botón redirigir (simulado - va a URL segura educativa)
        btnRedirect.addEventListener('click', () => {
            console.log('Simulación: redirigiendo a URL segura educativa');
            window.location.href = this.urlSegura;
        });
        
        // Botón cerrar
        btnClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
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
