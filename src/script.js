window.onload = function() {
    document.getElementById('mode-switch').addEventListener('change', function(event) {
        document.body.classList.toggle('light-mode', event.target.checked);
    });
}
