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
    // Redirect to homepage or dashboard
    window.location.href = 'home.html'; // or your desired route
  } else {
    alert('Invalid email or password!');
  }
});
