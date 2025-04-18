// main.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.dark-mode-toggle');
  const modeIcon = document.getElementById('mode-icon');
  const body = document.body;
  const THEME_KEY = 'userPreferredTheme'; // Key for localStorage

  // URLs for the icons
  const sunIconUrl = 'https://img.icons8.com/ios-filled/50/sun.png';
  const moonIconUrl = 'https://img.icons8.com/ios-filled/50/moon-symbol.png'; // Moon icon URL

  // Function to apply the theme
  const applyTheme = (theme) => {
      if (theme === 'dark') {
          body.classList.add('dark-mode');
          modeIcon.src = moonIconUrl; // Show moon icon in dark mode
          modeIcon.alt = 'Light Mode'; // Alt text indicates action
      } else {
          body.classList.remove('dark-mode');
          modeIcon.src = sunIconUrl; // Show sun icon in light mode
          modeIcon.alt = 'Dark Mode'; // Alt text indicates action
      }
  };

  // Function to save the theme preference
  const saveThemePreference = (theme) => {
      localStorage.setItem(THEME_KEY, theme);
  };

  // Event listener for the toggle button
  toggleButton.addEventListener('click', () => {
      // Check if the body *currently* has the dark-mode class
      const isDarkMode = body.classList.contains('dark-mode');
      // Determine the new theme (the opposite)
      const newTheme = isDarkMode ? 'light' : 'dark';

      // Apply the new theme
      applyTheme(newTheme);
      // Save the preference
      saveThemePreference(newTheme);
  });

  // --- Initialization on Page Load ---

  // Get the saved theme preference from localStorage
  const savedTheme = localStorage.getItem(THEME_KEY);

  // Apply the saved theme, or default to light mode if nothing is saved
  if (savedTheme) {
      applyTheme(savedTheme);
  } else {
      // Default to light mode if no preference is found
      applyTheme('light');
      // Optionally save the default preference
      // saveThemePreference('light');
  }
}); // End DOMContentLoaded