// Select all squares and the container
const squares = document.querySelectorAll('.square');
const container = document.querySelector('.container');

// Add click event listeners to each square
squares.forEach(square => {
    square.addEventListener('click', () => {
        const color = window.getComputedStyle(square).backgroundColor;
        container.style.backgroundColor = color;
    });
});
