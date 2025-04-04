let puzzleBoard = document.getElementById("puzzleBoard");
let message = document.getElementById("message");

let imagePath = "love.jpeg"; // Gambar puzzle
let pieces = [...Array(9).keys()]; // Array angka 0-8 (untuk posisi)
pieces.sort(() => Math.random() - 0.5); // Acak posisi

// Fungsi untuk menampilkan puzzle
function renderPuzzle() {
    puzzleBoard.innerHTML = "";
    pieces.forEach((num, index) => {
        let piece = document.createElement("div");
        piece.className = "puzzle-piece";
        piece.style.backgroundImage = `url(${imagePath})`;
        piece.style.backgroundPosition = `-${(num % 3) * 100}px -${Math.floor(num / 3) * 100}px`;
        piece.setAttribute("data-index", index);
        piece.draggable = true;
        
        // Event untuk drag & drop
        piece.addEventListener("dragstart", dragStart);
        piece.addEventListener("dragover", dragOver);
        piece.addEventListener("drop", drop);

        puzzleBoard.appendChild(piece);
    });
}

// Fungsi ketika mulai drag
let draggedIndex = null;

function dragStart(event) {
    draggedIndex = event.target.getAttribute("data-index");
}

// Fungsi saat dragging di atas elemen lain
function dragOver(event) {
    event.preventDefault();
}

// Fungsi untuk menukar posisi ketika drop
function drop(event) {
    let targetIndex = event.target.getAttribute("data-index");
    [pieces[draggedIndex], pieces[targetIndex]] = [pieces[targetIndex], pieces[draggedIndex]];
    renderPuzzle();
}

// Fungsi untuk cek apakah puzzle benar dan pindah halaman
function checkPuzzle() {
    if (pieces.every((val, i) => val === i)) {
        message.innerText = "ciee, jago banget si cowo gue arghhh";

        // Simpan status lagu di localStorage biar tetep main di next page
        localStorage.setItem("keepMusicPlaying", "true");

        // Redirect ke halaman berikutnya setelah 2 detik
        setTimeout(() => {
            window.location.href = "page6.html"; // Ganti dengan halaman surat digital
        }, 2000);
    } else {
        message.innerText = "SALAH SAYANGG!!!!";
    }
}

renderPuzzle();



