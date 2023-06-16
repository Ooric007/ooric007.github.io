// Get all tile elements
const tiles = document.querySelectorAll('.tile');

// Find the tallest tile
let tallestHeight = 0;
tiles.forEach(tile => {
  const tileHeight = tile.offsetHeight;
  if (tileHeight > tallestHeight) {
    tallestHeight = tileHeight;
  }
});

// Set the same height for all tiles
tiles.forEach(tile => {
  tile.style.height = `${tallestHeight}px`;
});