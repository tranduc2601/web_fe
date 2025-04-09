const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
const icon = togglePassword.querySelector('i');

togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type');

  if (type === 'password') {
    passwordInput.setAttribute('type', 'text');
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  } else {
    passwordInput.setAttribute('type', 'password');
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  }
});