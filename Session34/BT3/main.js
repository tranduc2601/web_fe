document.querySelector('.login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const isValidUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (isValidUser) {
    alert('Login successful!');
    window.location.href = 'home.html';
  } else {
    alert('Invalid email or password!');
  }
});
