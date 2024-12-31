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

// Ajoute un gestionnaire d'événement pour les clics sur les articles de film
films.forEach(film => {
    film.addEventListener('click', () => {
        let url = film.getAttribute('data-url');
        
        // Ajoute "https://" si l'URL ne l'a pas déjà
        if (url && !url.startsWith('http')) {
            url = 'https://' + url;
        }

        if (url) {
            // Ouvre la vidéo dans un nouvel onglet
            window.open(url, '_blank');
        } else {
            alert("URL non disponible pour ce film.");
        }
    });
});
