function moveButton() {
    let x = Math.random() * window.innerWidth * 0.8;
    let y = Math.random() * window.innerHeight * 0.8;
    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
}

function nextPage() {
    alert("I also know that you will also choose this HAHAHAHAH");
    window.location.href = "page3.html" // Ganti dengan halaman berikutnya
}
