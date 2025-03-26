const letters = '0123456789ABCDEF';
for (let i = 0; i < 10; i++) {
    // cho chuoi bat dau bang '#'
    let color = '#';
    // them vao 1 vong lap con ---> de tao mau hex
    for (let j = 0; j < 6; j++) {
        // dung bai toan lam tron xuong va random de tao mau sac
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(`%cMàu sắc đã được thay đổi: ${color}`, `color: ${color}; font-weight: bold;`);
}
