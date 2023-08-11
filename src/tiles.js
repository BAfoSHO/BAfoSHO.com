// Get the grid container element
const gridContainer = document.getElementById('gridContainer');

// Function to create a tile element
function createTile() {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  
  const dismissBtn = document.createElement('span');
  dismissBtn.classList.add('dismiss-btn');
  dismissBtn.innerHTML = 'X';
  
  dismissBtn.addEventListener('click', () => {
    gridContainer.removeChild(tile);
  });
  
  tile.appendChild(dismissBtn);
  
  return tile;
}

// Add tiles to the grid container
for (let i = 0; i < 12; i++) { // You can adjust the number of initial tiles
  const tile = createTile();
  gridContainer.appendChild(tile);
}

