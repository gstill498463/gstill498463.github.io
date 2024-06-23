document.addEventListener("DOMContentLoaded", function () {
    const slideInSections = document.querySelectorAll(".slide-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in-visible");
            }
            else {
                entry.target.classList.remove("slide-in-visible");
            }
        });
    }, {
        threshold: 0.1
    });

    slideInSections.forEach(section => {
        observer.observe(section);
    });
});
