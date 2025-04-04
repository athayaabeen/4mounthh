document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("h1, .spotify-wrapper, .back-btn");
  
    elements.forEach(el => {
      el.classList.add("fade-in");
    });
  });
  