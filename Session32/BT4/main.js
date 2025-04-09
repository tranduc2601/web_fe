const input = document.getElementById("emailInput");
const result = document.getElementById("result");
const btn = document.getElementById("checkBtn");

btn.addEventListener("click", () => {
  const email = input.value.trim();
  const regex = /^[\w-\.]+@([\w-]+\.)+(com|vn)$/;

  if (regex.test(email)) {
    result.textContent = "email hợp lệ!";
    result.className = "valid";
  } else {
    result.textContent = "email không hợp lệ!";
    result.className = "invalid";
  }
});
