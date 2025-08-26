/**
 * SISTEMA VETERINARIA - ETAPA 1 DE 3
 * Archivo: script.js
 * Descripción: Funcionalidades básicas del proyecto base
 * Rama: main/master
 */

// Configuración global de la aplicación
const AppConfig = {
    version: '1.0',
    stage: 'Etapa 1 de 3',
    projectName: 'Sistema Veterinaria',
    currentBranch: 'main/master',
    branches: {
        base: 'main/master',
        mascotas: 'formulario-registro-mascota',
        productos: 'productos-mascotas'
    },
    developer: 'Tu Nombre Aquí'
};

/**
 * Función principal para mostrar secciones
 * @param {string} sectionId - ID de la sección a mostrar
 */
function showSection(sectionId, event = null) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Quitar clase active de todos los botones
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Mostrar la sección seleccionada
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
    }

    // Activar botón correspondiente si viene de un click
    if (event && event.target) {
        event.target.classList.add('active');
    }
}


/**
 * Función para mostrar la fecha actual
 */
function displayCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        };
        dateElement.textContent = now.toLocaleDateString('es-ES', options);
    }
}

/**
 * Función para validar la estructura del DOM
 */
function validateDOMStructure() {
    const requiredElements = [
        'inicio',
        'mascotas', 
        'productos',
        'currentDate'
    ];

    let allValid = true;
    
    requiredElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            console.log(`✓ Elemento '${id}' encontrado`);
        } else {
            console.error(`✗ Elemento '${id}' NO encontrado`);
            allValid = false;
        }
    });

    return allValid;
}

/**
 * Función para mostrar información del proyecto en consola
 */
function showProjectInfo() {
    console.log('='.repeat(50));
    console.log('📋 INFORMACIÓN DEL PROYECTO');
    console.log('='.repeat(50));
    console.table(AppConfig);
    console.log('='.repeat(50));
    
    console.log('🏗️ ESTRUCTURA DE RAMAS:');
    Object.entries(AppConfig.branches).forEach(([key, branch]) => {
        const status = key === 'base' ? '✅ COMPLETADA' : '⏳ PENDIENTE';
        console.log(`   ${branch} - ${status}`);
    });
    
    console.log('='.repeat(50));
}

/**
 * Función para inicializar la aplicación
 */
function initApp() {
    console.log('🚀 Inicializando Sistema Veterinaria...');
    
    try {
        // Mostrar fecha actual
        displayCurrentDate();
        
        // Validar estructura del DOM
        const isValid = validateDOMStructure();
        
        if (isValid) {
            console.log('✅ Aplicación inicializada correctamente');
            
            // Mostrar información del proyecto
            showProjectInfo();
            
            // Mensaje de bienvenida
            console.log(`🎯 ${AppConfig.stage}: ${AppConfig.projectName} v${AppConfig.version}`);
            console.log(`📂 Rama actual: ${AppConfig.currentBranch}`);
            console.log('📁 Archivos cargados: HTML ✓, CSS ✓, JS ✓');
            
        } else {
            console.error('❌ Error en la estructura del DOM');
        }
        
    } catch (error) {
        console.error('❌ Error al inicializar la aplicación:', error);
    }
}

/**
 * Función para agregar eventos de teclado
 */
function addKeyboardEvents() {
    document.addEventListener('keydown', function(event) {
        // Navegación con teclas numéricas
        switch(event.key) {
            case '1':
                showSection('inicio');
                document.querySelector('.nav-btn').classList.add('active');
                break;
            case '2':
                showSection('mascotas');
                break;
            case '3':
                showSection('productos');
                break;
        }
    });
}

/**
 * Función para mostrar mensaje de funcionalidad pendiente
 * @param {string} featureName - Nombre de la funcionalidad
 * @param {string} branchName - Nombre de la rama donde se desarrollará
 */
function showPendingFeature(featureName, branchName) {
    alert(`🚧 Funcionalidad "${featureName}" estará disponible en la ${branchName}`);
    console.log(`⏳ Funcionalidad pendiente: ${featureName} (${branchName})`);
}

/**
 * Event listener principal - Se ejecuta cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM cargado, iniciando aplicación...');
    
    // Inicializar aplicación
    initApp();
    
    // Agregar eventos de teclado
    addKeyboardEvents();
    
    // Mensaje final
    console.log('🎉 Sistema Veterinaria - Etapa 1 cargada exitosamente!');
    console.log('💡 Presiona F12 para ver más información en la consola');
    console.log('⌨️  Usa las teclas 1, 2, 3 para navegar entre secciones');
});

/**
 * Funciones de utilidad adicionales
 */

// Función para detectar el navegador
function detectBrowser() {
    const userAgent = navigator.userAgent;
    let browser = 'Desconocido';
    
    if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Safari')) browser = 'Safari';
    else if (userAgent.includes('Edge')) browser = 'Edge';
    
    console.log(`🌐 Navegador detectado: ${browser}`);
    return browser;
}

// Función para mostrar estadísticas del proyecto
function showProjectStats() {
    const stats = {
        'Total de Secciones': document.querySelectorAll('.section').length,
        'Botones de Navegación': document.querySelectorAll('.nav-btn').length,
        'Cajas de Información': document.querySelectorAll('.info-box').length,
        'Líneas de CSS (aprox.)': '~200',
        'Líneas de JS': '~150',
        'Funciones JS': 'showSection, initApp, validateDOMStructure, etc.',
        'Responsive': 'Sí (768px, 480px breakpoints)'
    };
    
    console.log('📊 ESTADÍSTICAS DEL PROYECTO:');
    console.table(stats);
}

// Función para validar la integridad de los archivos
function validateFileIntegrity() {
    const checks = {
        'CSS Cargado': !!document.querySelector('link[href*="style.css"]'),
        'JavaScript Ejecutado': typeof showSection === 'function',
        'Elementos de Navegación': document.querySelectorAll('.nav-btn').length === 3,
        'Secciones Principales': document.querySelectorAll('.section').length === 3,
        'Fecha Mostrada': !!document.getElementById('currentDate').textContent
    };
    
    console.log('🔍 VALIDACIÓN DE ARCHIVOS:');
    Object.entries(checks).forEach(([check, passed]) => {
        const status = passed ? '✅' : '❌';
        console.log(`${status} ${check}: ${passed ? 'OK' : 'FALLO'}`);
    });
    
    return Object.values(checks).every(check => check);
}

// Exponer funciones globalmente para debug
window.VetSystem = {
    config: AppConfig,
    showSection: showSection,
    showProjectInfo: showProjectInfo,
    showProjectStats: showProjectStats,
    validateFileIntegrity: validateFileIntegrity,
    detectBrowser: detectBrowser
};

// Ejecutar validaciones adicionales después de la carga
setTimeout(() => {
    detectBrowser();
    showProjectStats();
    validateFileIntegrity();
    
    console.log('🔧 Funciones disponibles globalmente:');
    console.log('   window.VetSystem.showProjectInfo()');
    console.log('   window.VetSystem.showProjectStats()');
    console.log('   window.VetSystem.validateFileIntegrity()');
    console.log('📝 Proyecto listo para la siguiente etapa!');
}, 1000);// Función para mostrar secciones
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Quitar clase active de todos los botones
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Mostrar sección seleccionada
    document.getElementById(sectionId).classList.add('active');
    
    // Activar botón correspondiente
    event.target.classList.add('active');
}

// Función para inicializar la aplicación
function initApp() {
    // Mostrar fecha actual
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString('es-ES');
    }
    
    // Mensaje en consola
    console.log('Sistema Veterinaria - Proyecto Base v1.0');
    console.log('Rama actual: main/master');
    console.log('Archivos cargados: HTML, CSS, JS separados');
    
    // Verificar que todas las secciones están disponibles
    const sections = ['inicio', 'mascotas', 'productos'];
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            console.log(`✓ Sección ${section} cargada correctamente`);
        } else {
            console.error(`✗ Error: Sección ${section} no encontrada`);
        }
    });
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initApp);


// Función de utilidad para mostrar información del proyecto
function showProjectInfo() {
    console.table(AppConfig);
}