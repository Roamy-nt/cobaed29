document.addEventListener('DOMContentLoaded', function() {
    // Efecto de carga inicial
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
    
    // Efecto hover mejorado para botones
    const buttons = document.querySelectorAll('.btn-hover-effect');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.background = `linear-gradient(135deg, ${getRandomColor()}, ${getRandomColor()})`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.background = `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`;
        });
    });
    
    // Botón de volver
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    
    // Efecto de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Animación de elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar
    
    // Función auxiliar para colores aleatorios
    function getRandomColor() {
        const colors = ['#1a5d1a', '#4CAF50', '#8BC34A', '#689F38', '#33691E'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});