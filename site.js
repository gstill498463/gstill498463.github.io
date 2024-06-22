document.addEventListener("DOMContentLoaded", function () {
    const fadeInSections = document.querySelectorAll(".fade-in-section");
    console.log("domContentLoaded");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInSections.forEach(section => {
        observer.observe(section);
    });
});
