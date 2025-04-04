const toggleButton = document.querySelector('button');
const body = document.body;
// them su kien click cho nut
toggleButton.addEventListener('click', () => {
    // kiem tra xem body co class dark-mode khong
    if (body.classList.contains('dark-mode')) {
        // neu co, bo dark-mode va them light-mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        // neu khong co, bo light-mode va them dark-mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
});
