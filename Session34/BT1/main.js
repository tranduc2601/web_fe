// document.getElementById("registerForm").addEventListener("submit", function (e) {
//   e.preventDefault();
  
//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("password").value;
//   const confirmPassword = document.getElementById("confirmPassword").value;
//   const message = document.getElementById("message");

//   message.textContent = "";

//   // Validate email format
//   if (!email || !password || !confirmPassword) {
//     message.textContent = "Vui lòng điền đầy đủ thông tin.";
//     return;
//   }

//   if (password !== confirmPassword) {
//     message.textContent = "Mật khẩu xác nhận không trùng khớp.";
//     return;
//   }

//   const users = JSON.parse(localStorage.getItem("users")) || [];
//   const userExists = users.some(user => user.email === email);

//   if (userExists) {
//     message.textContent = "Email đã được sử dụng.";
//     return;
//   }

//   // Mã hóa mật khẩu bằng bcrypt
//   const saltRounds = 10;
//   bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
//     if (err) {
//       console.error("Error hashing password:", err);
//       message.textContent = "Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.";
//       return;
//     }

//     // Lưu thông tin người dùng với mật khẩu đã mã hóa
//     users.push({ email, password: hashedPassword });
//     localStorage.setItem("users", JSON.stringify(users));
    
//     message.style.color = "green";
//     message.textContent = "Đăng ký thành công!";
    
//     // Reset form
//     document.getElementById("registerForm").reset();
//   });
// });

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  message.textContent = "";

  // Kiểm tra trường trống
  if (!email || !password || !confirmPassword) {
    message.textContent = "Vui lòng điền đầy đủ thông tin.";
    return;
  }

  // Kiểm tra mật khẩu xác nhận
  if (password !== confirmPassword) {
    message.textContent = "Mật khẩu xác nhận không trùng khớp.";
    return;
  }

  // Kiểm tra email đã tồn tại
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.some(user => user.email === email);

  if (userExists) {
    message.textContent = "Email đã được sử dụng.";
    return;
  }

  // Mã hóa mật khẩu
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
    if (err) {
      console.error("Lỗi khi mã hóa mật khẩu:", err);
      message.textContent = "Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.";
      return;
    }

    // Lưu thông tin người dùng
    users.push({ email: email, password: hashedPassword });
    localStorage.setItem("users", JSON.stringify(users));

    // Kiểm tra xem dữ liệu đã được lưu chưa
    console.log("Dữ liệu đã lưu:", JSON.parse(localStorage.getItem("users")));

    message.style.color = "green";
    message.textContent = "Đăng ký thành công!";
    
    // Reset form
    document.getElementById("registerForm").reset();
  });
});
