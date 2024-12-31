// Sélectionne le menu déroulant et la grille de films
const seasonFilter = document.getElementById('seasonFilter');
const films = document.querySelectorAll('.film');

// Ajoute un gestionnaire d'événement au filtre
seasonFilter.addEventListener('change', () => {
    const selectedSeason = seasonFilter.value;

    films.forEach(film => {
        const filmSeason = film.getAttribute('data-season');
        
        // Affiche ou masque selon la saison sélectionnée
        if (selectedSeason === 'all' || filmSeason === selectedSeason) {
            film.style.display = 'block'; // Afficher
        } else {
            film.style.display = 'none'; // Masquer
        }
    });
});
