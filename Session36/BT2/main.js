document.addEventListener('DOMContentLoaded', () => {
  // --- Data ---
  const dishes = [
      {
          id: 'bun-bo',
          name: 'Bún bò Huế',
          imageSrc: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' // Replace with your actual image URL
      },
      {
          id: 'pho-bo',
          name: 'Phở bò Hà Nội',
          imageSrc: 'https://static.vinwonders.com/production/pho-bo-ha-noi.jpeg' // Replace with your actual image URL
      },
      {
          id: 'com-tam',
          name: 'Cơm tấm Sài Gòn',
          imageSrc: 'https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg' // Replace with your actual image URL
      }
      // Add more dishes here if needed
  ];

  const LIKES_STORAGE_KEY = 'dishLikes';

  // --- DOM Elements ---
  const dishesListContainer = document.getElementById('dishes-list');

  // --- Functions ---

  // Load likes from localStorage
  function loadLikes() {
      const likesJson = localStorage.getItem(LIKES_STORAGE_KEY);
      try {
          // Parse JSON, default to empty object if null or invalid
          return likesJson ? JSON.parse(likesJson) : {};
      } catch (e) {
          console.error("Error parsing likes from localStorage:", e);
          return {}; // Return empty object on error
      }
  }

  // Save likes to localStorage
  function saveLikes(likes) {
      localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(likes));
  }

  // Render all dishes
  function renderDishes() {
      // Clear previous list
      dishesListContainer.innerHTML = '';
      const currentLikes = loadLikes();

      dishes.forEach(dish => {
          const likeCount = currentLikes[dish.id] || 0; // Get count or default to 0

          const dishCard = document.createElement('div');
          dishCard.classList.add('dish-card');
          dishCard.innerHTML = `
              <img src="${dish.imageSrc}" alt="${dish.name}" class="dish-image">
              <div class="dish-info">
                  <h3 class="dish-name">${dish.name}</h3>
                  <p class="dish-likes">
                      <i class="fas fa-heart"></i> <span class="like-count" data-dish-id="${dish.id}">${likeCount}</span> lượt thích
                  </p>
                  <button class="like-button" data-dish-id="${dish.id}">Thích +1</button>
              </div>
          `;
          dishesListContainer.appendChild(dishCard);
      });
  }

  // Handle like button click
  function handleLikeClick(event) {
      // Check if the clicked element is a like button
      if (event.target.classList.contains('like-button')) {
          const dishId = event.target.dataset.dishId;
          if (dishId) {
              const currentLikes = loadLikes();
              // Increment like count for the specific dish
              currentLikes[dishId] = (currentLikes[dishId] || 0) + 1;
              saveLikes(currentLikes); // Save updated counts

              // Update the displayed count on the page
              const countSpan = dishesListContainer.querySelector(`.like-count[data-dish-id="${dishId}"]`);
              if (countSpan) {
                  countSpan.textContent = currentLikes[dishId];
              } else {
                   console.error(`Could not find count span for dish ID: ${dishId}`);
              }
          }
      }
  }

  // --- Initialization ---
  renderDishes(); // Initial render of the dishes

  // --- Event Listeners ---
  // Use event delegation on the container for like buttons
  dishesListContainer.addEventListener('click', handleLikeClick);

}); // End DOMContentLoaded