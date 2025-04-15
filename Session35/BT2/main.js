let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function saveToLocalStorage() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function renderBookmarks() {
  const container = document.getElementById("bookmarks");
  container.innerHTML = "";

  bookmarks.forEach((bookmark, index) => {
    const div = document.createElement("div");
    div.className = "bookmark";
    div.innerHTML = `
      <a href="${bookmark.url}" target="_blank">
        <span>🔗 ${bookmark.name}</span>
      </a>
      <button onclick="deleteBookmark(${index})">✖</button>
    `;
    container.appendChild(div);
  });
}

function addBookmark() {
  const nameInput = document.getElementById("website-name");
  const urlInput = document.getElementById("website-url");

  const name = nameInput.value.trim();
  let url = urlInput.value.trim();

  if (!name || !url) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  bookmarks.push({ name, url });
  saveToLocalStorage();
  renderBookmarks();

  nameInput.value = "";
  urlInput.value = "";
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  saveToLocalStorage();
  renderBookmarks();
}

window.onload = renderBookmarks;
