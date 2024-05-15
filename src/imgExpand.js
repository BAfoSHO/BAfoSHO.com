document.addEventListener('DOMContentLoaded', function() {
    const catImage = document.getElementById('catImage');
    const imageContainer = catImage.parentNode;

    catImage.addEventListener('click', function() {
        imageContainer.classList.toggle('expanded');

        // Optional: Close on click outside
        document.addEventListener('click', function handleClickOutside(event) {
            if (!imageContainer.contains(event.target)) {
                imageContainer.classList.remove('expanded');
                document.removeEventListener('click', handleClickOutside);
            }
        });
    });
});
