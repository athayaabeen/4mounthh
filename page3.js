document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".journey-item, .section-title");

    function fadeInOnScroll() {
        items.forEach(item => {
            let itemPosition = item.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;

            if (itemPosition < screenHeight - 100) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run once to check initial position
});


