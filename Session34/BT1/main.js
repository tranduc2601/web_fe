
  document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  message.textContent = "";
  // validate email format
  if (!email || !password || !confirmPassword) {
    message.textContent = "Vui lòng điền đầy đủ thông tin.";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Mật khẩu xác nhận không trùng khớp.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.some(user => user.email === email);

  if (userExists) {
    message.textContent = "Email đã được sử dụng.";
    return;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  message.style.color = "green";
  message.textContent = "Đăng ký thành công!";
  
  // Reset form
  this.reset();
});
