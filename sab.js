let passwordInput = document.getElementById("passwordInput");
let correctPassword = "051224"; // Ganti dengan password yang diinginkan

// Fungsi untuk menambahkan angka ke input
function addNumber(num) {
    passwordInput.value += num;
}

// Fungsi untuk menghapus input
function clearInput() {
    passwordInput.value = "";
}

// Fungsi untuk memeriksa password
function checkPassword() {
    if (passwordInput.value === correctPassword) {
        window.location.href = "page1.html"; // Redirect ke halaman berikutnya
    } else {
        alert("LU BUKAN RAZZA JIR");
        clearInput(); // Kosongkan input kalau salah
    }
}

// Event listener untuk ENTER di keyboard
passwordInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});

