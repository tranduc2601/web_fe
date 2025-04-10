const weatherData = {
  "hồ chí minh": {
    temperature: 32,
    humidity: 75,
    windSpeed: 7,
    condition: "Nắng"
  },
  "hà nội": {
    temperature: 25,
    humidity: 82,
    windSpeed: 5,
    condition: "Âm u"
  },
  "đà nẵng": {
    temperature: 28,
    humidity: 70,
    windSpeed: 6,
    condition: "Trời mây"
  }
};

function showWeather() {
  const input = document.getElementById("cityInput").value.toLowerCase().trim();
  const data = weatherData[input];
  const display = document.getElementById("weatherCard");

  if (!data) {
    display.innerHTML = `<div class="alert alert-danger">Không tìm thấy dữ liệu cho thành phố "${input}".</div>`;
    return;
  }

  display.innerHTML = `
    <div class="card weather text-center">
      <h4 class="mb-3 text-capitalize">${input}</h4>
      <div class="weather-icon mb-2">☀️</div>
      <h3>${data.temperature}°C</h3>
      <p>${data.condition}</p>
      <p>Độ ẩm: ${data.humidity}%</p>
      <p>Tốc độ gió: ${data.windSpeed} km/h</p>
    </div>
  `;
}
