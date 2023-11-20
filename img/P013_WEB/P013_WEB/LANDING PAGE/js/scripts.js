// ... Resto de tu código JS ...

// Agrega animación al texto descriptivo al pasar el mouse sobre las imágenes
const imageItems = document.querySelectorAll('.image-item');
imageItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const description = item.querySelector('.image-description');
        description.style.bottom = '0';
    });

    item.addEventListener('mouseleave', () => {
        const description = item.querySelector('.image-description');
        description.style.bottom = '-100%';
    });
});

// Detecta cuando la página se haya cargado completamente
window.addEventListener('load', () => {
    const imageItems = document.querySelectorAll('.animate-entry');
    imageItems.forEach(item => {
        item.classList.add('animate-on-load');
    });
});

