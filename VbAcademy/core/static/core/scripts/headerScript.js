function hoverMenuIcon(enter) {
    const menuIcon = document.getElementById('menuIcon');
    if (enter) {
        menuIcon.classList.remove('bi-menu-button-wide');
        menuIcon.classList.add('bi-menu-button-wide-fill');
    } else {
        menuIcon.classList.remove('bi-menu-button-wide-fill');
        menuIcon.classList.add('bi-menu-button-wide');
    }
}

function toggleMenu() {
    var menuItems = document.getElementById('menuItems');

    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'flex'; // Cambia la visualización a flex
        var buttons = document.querySelectorAll('.menu__item');
        buttons.forEach((button, index) => {
            setTimeout(function () {
                button.style.opacity = '2'; // Muestra los botones con retraso
                button.style.transform = 'translateX(0)'; // Mueve los botones a su posición original
            }, index * 150); // Añade un retraso para crear el efecto de desplazamiento secuencial
        });
    } else {
        var buttons = document.querySelectorAll('.menu__item');
        buttons.forEach((button, index) => {
            button.style.opacity = '0'; // Oculta los botones
            button.style.transform = 'translateX(100%)'; // Mueve los botones fuera de la pantalla hacia la derecha
        });
        setTimeout(function () {
            menuItems.style.display = 'none'; // Oculta el menú después de que los botones se desvanezcan
        }, 300 + (buttons.length - 1) * 200); // Calcula el tiempo total de la animación
    }
}