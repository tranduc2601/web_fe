function login(event) {
    event.preventDefault();
    window.location.href = "dashboard.html";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const studentsTable = document.getElementById("studentsTable");
    const paymentTable = document.getElementById("paymentTable");
  
    if (studentsTable) {
      for (let i = 0; i < 7; i++) {
        studentsTable.innerHTML += `
          <tr>
            <td><img src="avatar.png" style="width:30px;vertical-align:middle;margin-right:10px;">Karthi</td>
            <td>karthi@gmmail.com</td>
            <td>7305477760</td>
            <td>1234567305477760</td>
            <td>08-Dec, 2021</td>
            <td>✏️ 🗑️</td>
          </tr>`;
      }
    }
  
    if (paymentTable) {
      for (let i = 0; i < 4; i++) {
        paymentTable.innerHTML += `
          <tr>
            <td>Karthi</td>
            <td>First</td>
            <td>00012223</td>
            <td>INR 35,000</td>
            <td>INR 55,000</td>
            <td>08-Dec, 2021</td>
            <td>👁️</td>
          </tr>`;
      }
    }
  });
  