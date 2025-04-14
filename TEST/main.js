document.querySelector('.signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  
  const secretKey = 'my-secret-key'; // Phải giống với main.js
  
  // Mã hóa mật khẩu
  const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
  
  // Lấy danh sách người dùng
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Kiểm tra email trùng
  if (users.find((user) => user.email === email)) {
    alert('Email already exists!');
    return;
  }
  
  // Thêm người dùng mới
  users.push({ email, password: encryptedPassword });
  localStorage.setItem('users', JSON.stringify(users));
  
  alert('Sign up successful! Please log in.');
  window.location.href = 'index.htm';
});