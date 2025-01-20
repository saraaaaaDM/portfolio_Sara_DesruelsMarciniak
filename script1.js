<script>
    // Ajout de l'événement de clic sur les images de la grille
    document.querySelectorAll('.photo-grid img').forEach(image => {
        image.addEventListener('click', function() {
            // Toggle de l'état "clicked" sur l'image
            image.classList.toggle('clicked');
        });
    });
</script>
