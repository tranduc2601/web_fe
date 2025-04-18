document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const colorButtonsContainer = document.querySelector('.color-buttons');
  const BG_COLOR_KEY = 'preferredBackgroundColor'; // Key for localStorage

  // Function to apply background color
  function applyBackgroundColor(color) {
      if (color) { // Only apply if a color value is provided
           body.style.backgroundColor = color;
      }
  }

  // Function to save background color
  function saveBackgroundColor(color) {
      localStorage.setItem(BG_COLOR_KEY, color);
  }

  // --- Event Listener for Button Clicks ---
  colorButtonsContainer.addEventListener('click', (event) => {
      // Check if the clicked element is a button with a data-color attribute
      if (event.target.tagName === 'BUTTON' && event.target.dataset.color) {
          const selectedColor = event.target.dataset.color; // Get color from data-color attribute

          applyBackgroundColor(selectedColor); // Apply the color to the body
          saveBackgroundColor(selectedColor);  // Save the chosen color
      }
  });

  // --- Initialization on Page Load ---
  const savedColor = localStorage.getItem(BG_COLOR_KEY);
  if (savedColor) {
      applyBackgroundColor(savedColor); // Apply saved color if it exists
  }

}); // End DOMContentLoaded