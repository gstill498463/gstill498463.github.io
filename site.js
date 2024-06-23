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

function toggleDarkMode() {
    const elements = document.querySelectorAll('.colorMode');
    console.log("color mode changed!")
    elements.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    // Additional logic to store user preference in localStorage
}

//function toggleDarkMode() {
//    const elements = document.querySelectorAll('.colorMode');
//    console.log("color mode changed!");
//    elements.forEach(element => {
//        element.classList.toggle('dark-mode');
//    });

//    //// Store the user preference in localStorage
//    //const body = document.body;
//    //if (body.classList.contains('dark-mode')) {
//    //    localStorage.setItem('theme', 'dark');
//    //} else {
//    //    localStorage.setItem('theme', 'light');
//    //}
//}
