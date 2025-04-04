const textElement = document.querySelector('.text');
const hideButton = document.querySelector('.hide-button');
const showButton = document.querySelector('.show-button');

// Su kien click cho nut 'Hide text'
hideButton.addEventListener('click', () => {
    // An doan text bang cach thay doi thuoc tinh CSS
    textElement.style.display = 'none';
});

// Su kien click cho nut 'Show text'
showButton.addEventListener('click', () => {
    // Hien doan text tro lai
    textElement.style.display = 'block';
});
function hideText() {
    document.getElementById('text').style.display = 'none';
}
