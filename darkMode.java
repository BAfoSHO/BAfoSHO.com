/* Switch between dark mode and light mode */
const modeSwitch = document.getElementById('mode-switch');
const body = document.body;

modeSwitch.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});

/* Add sports-related class to body */
body.classList.add('sports-theme');
