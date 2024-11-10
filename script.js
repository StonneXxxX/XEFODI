// Fonction de recherche de films
const searchInput = document.getElementById('searchInput');
const films = document.querySelectorAll('.film');

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();

    films.forEach(film => {
        const filmTitle = film.getAttribute('data-title').toLowerCase();
        if (filmTitle.includes(searchValue)) {
            film.style.display = 'block';
            film.style.opacity = '1';
            film.style.transform = 'scale(1)';
        } else {
            film.style.opacity = '0';
            film.style.transform = 'scale(0.8)';
            setTimeout(() => film.style.display = 'none', 300); // Petite transition avant de cacher
        }
    });
});
