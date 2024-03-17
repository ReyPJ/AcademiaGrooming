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
        menuItems.style.display = 'block'; // Mostrar el menú
    } else {
        menuItems.style.display = 'none'; // Ocultar el menú
    }
}
