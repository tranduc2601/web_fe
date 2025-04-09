
const overlay = document.getElementById('overlay');
const bigImage = document.getElementById('bigImage');
const thumbnails = document.querySelectorAll('.thumb');
// click ảnh nhỏ ---> hiện ảnh lớn
thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    bigImage.src = thumb.src;
    overlay.style.display = 'flex';
  });
});
//click vùng trống ---> ẩn overlay
overlay.addEventListener('click', (e) => {
  if (e.target !== bigImage) {
    overlay.style.display = 'none';
  }
});
