document.addEventListener('DOMContentLoaded', () => {
    const copaVino = document.getElementById('copaVino');
    const carouselContainer = document.getElementById('carouselContainer');
    const spotifyPlayer = document.getElementById('spotifyPlayer');

    let isVisible = false;

    // Mostrar Spotify compacto al cargar
    spotifyPlayer.classList.add('visible');

    // Ocultar Spotify después de 10 segundos (ajustable)
    setTimeout(() => {
        spotifyPlayer.classList.remove('visible');
    }, 10000);

    // Toggle solo carrusel al hacer click en texto
    copaVino.addEventListener('click', () => {
        if (isVisible) {
            carouselContainer.style.display = 'none';
        } else {
            carouselContainer.style.display = 'flex';
        }
        isVisible = !isVisible;
    });
});

