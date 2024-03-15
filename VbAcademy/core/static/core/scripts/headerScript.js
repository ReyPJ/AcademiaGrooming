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
    var hiddenButtons = document.querySelectorAll('.menu__item.hidden');
    hiddenButtons.forEach((button, index) => {
        setTimeout(function () {
            button.style.display = 'inline-block'; // Mostrar el botón
            animateButton(button, index); // Animar el botón
        }, (index + 1) * 200); // Ajuste para evitar superposiciones
    });
}

function animateButton(button, index) {
    var menuButton = document.getElementById('menuButton');
    var rectMenuButton = menuButton.getBoundingClientRect();

    if (button.id !== 'menuButton') { // Ignorar el botón principal
        var previousButton = document.querySelector('.menu__item.hidden:nth-child(' + index + ')'); // Botón anterior
        var distance = menuButton.offsetWidth + (index * (previousButton.offsetWidth + 20)); // Calcular la distancia de desplazamiento correctamente
        button.style.transition = 'transform 0.5s ease'; // Duración y tipo de la animación
        button.style.transform = 'translateX(-' + distance + 'px)'; // Desplazar el botón hacia la izquierda
    }
}