// Set tanggal awal pacaran
const startDate = new Date("December 5, 2024 08:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const elapsedTime = now - startDate;

    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Update setiap detik
setInterval(updateCountdown, 1000);

// Panggil pertama kali biar nggak delay 1 detik
updateCountdown();
