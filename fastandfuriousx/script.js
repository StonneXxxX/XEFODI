const video = document.querySelector('video');

// Événement lorsque la vidéo se termine
video.addEventListener('ended', () => {
    alert('La vidéo est terminée ! Merci de l\'avoir regardée.');
});
