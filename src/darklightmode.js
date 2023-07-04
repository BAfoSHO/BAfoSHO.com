// Toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };
  
  // Add event listener to button
  const button = document.querySelector('#dark-mode-button');
  button.addEventListener('click', toggleDarkMode);
  