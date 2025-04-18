document.addEventListener('DOMContentLoaded', () => {
  // --- DOM References ---
  const registerPage = document.getElementById('register-page');
  const loginPage = document.getElementById('login-page');
  const homePage = document.getElementById('home-page');
  const allPages = document.querySelectorAll('.page'); // Get all page divs

  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');

  const registerUsernameInput = document.getElementById('register-username');
  const registerPasswordInput = document.getElementById('register-password');
  const loginUsernameInput = document.getElementById('login-username');
  const loginPasswordInput = document.getElementById('login-password');
  const rememberMeCheckbox = document.getElementById('remember-me');

  const gotoLoginButton = document.getElementById('goto-login');
  const gotoRegisterButton = document.getElementById('goto-register');
  const logoutButton = document.getElementById('logout-button');

  const loginErrorMsg = document.getElementById('login-error');
  const registerSuccessMsg = document.getElementById('register-success');
  const homeUsernameSpan = document.getElementById('home-username');

  // --- LocalStorage Keys ---
  const CREDENTIALS_KEY = 'userCredentials';
  const REMEMBER_ME_KEY = 'rememberedUser';

  // --- Functions ---

  // Function to show a specific page and hide others
  const showPage = (pageId) => {
      allPages.forEach(page => {
          if (page.id === pageId) {
              page.classList.remove('hidden');
          } else {
              page.classList.add('hidden');
          }
      });
      // Clear messages when switching pages
      loginErrorMsg.classList.add('hidden');
      registerSuccessMsg.classList.add('hidden');
  };

  // Function to get credentials from localStorage
  const getStoredCredentials = () => {
      const storedData = localStorage.getItem(CREDENTIALS_KEY);
      return storedData ? JSON.parse(storedData) : null;
  };

  // --- Event Listeners ---

  // Registration Form Submission
  registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = registerUsernameInput.value.trim();
      const password = registerPasswordInput.value; // Don't trim password

      if (!username || !password) {
          // Basic validation (can add more complex checks)
          alert('Vui lòng nhập tên đăng nhập và mật khẩu.');
          return;
      }

      // Check if username already exists (optional, simple check)
      const existingCredentials = getStoredCredentials();
      if (existingCredentials && existingCredentials.username === username) {
           alert('Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.');
           return;
      }

      // Store credentials
      const credentials = { username, password };
      localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(credentials));

      // Show success message and switch to login
      registerSuccessMsg.classList.remove('hidden');
      registerUsernameInput.value = ''; // Clear fields
      registerPasswordInput.value = '';

      // Optionally switch immediately or after a delay
      setTimeout(() => {
           showPage('login-page');
      }, 1500); // Switch after 1.5 seconds
  });

  // Login Form Submission
  loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = loginUsernameInput.value.trim();
      const password = loginPasswordInput.value;
      const rememberMe = rememberMeCheckbox.checked;

      const storedCredentials = getStoredCredentials();

      // Check credentials
      if (storedCredentials && storedCredentials.username === username && storedCredentials.password === password) {
          // Login successful
          homeUsernameSpan.textContent = username; // Update welcome message
          showPage('home-page');

          // Handle "Remember Me"
          if (rememberMe) {
              localStorage.setItem(REMEMBER_ME_KEY, username); // Store username if remembered
          } else {
              localStorage.removeItem(REMEMBER_ME_KEY); // Remove if not remembered
          }
           loginErrorMsg.classList.add('hidden'); // Hide error message on success
           loginUsernameInput.value = ''; // Clear fields
           loginPasswordInput.value = '';
           rememberMeCheckbox.checked = false;


      } else {
          // Login failed
          loginErrorMsg.classList.remove('hidden'); // Show error message
          localStorage.removeItem(REMEMBER_ME_KEY); // Ensure not remembered on failed login
      }
  });

  // Logout Button
  logoutButton.addEventListener('click', () => {
      localStorage.removeItem(REMEMBER_ME_KEY); // Clear remember me flag
      showPage('login-page'); // Go back to login page
  });

  // Navigation Button: Go to Login
  gotoLoginButton.addEventListener('click', () => {
      showPage('login-page');
  });

  // Navigation Button: Go to Register
  gotoRegisterButton.addEventListener('click', () => {
      showPage('register-page');
  });


  // --- Initial Page Load Logic ---
  const rememberedUser = localStorage.getItem(REMEMBER_ME_KEY);
  const storedCredentials = getStoredCredentials();

  if (rememberedUser && storedCredentials && storedCredentials.username === rememberedUser) {
      // If remembered and credentials match, go to home
      homeUsernameSpan.textContent = rememberedUser;
      showPage('home-page');
  } else if (storedCredentials) {
      // If not remembered but account exists, go to login
      showPage('login-page');
  } else {
      // If no account exists, go to register
      showPage('register-page');
  }

}); // End DOMContentLoaded