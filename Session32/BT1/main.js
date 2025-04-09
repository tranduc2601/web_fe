function getRandomColor() {
  //random color
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const buttons = document.querySelectorAll('.changeColorBtn');
buttons.forEach(btn => {
  btn.addEventListener('click', function () {
    const parentBox = this.parentElement; 
    parentBox.style.backgroundColor = getRandomColor();
  });
});
