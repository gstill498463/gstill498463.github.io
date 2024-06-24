document.addEventListener("DOMContentLoaded", function () {
    console.log("v3")
    var theme = '';
    if (localStorage.getItem('theme') != null) {
        if (localStorage.getItem('theme') === 'dark') {
            theme = 'dark';
            ColorModeLightBulb(theme);
            ColorModeMoon(theme);
            ColorModeHeaderButtons(theme);

        }
        else {
            theme = 'light';
            ColorModeLightBulb(theme);
            ColorModeMoon(theme);
            ColorModeHeaderButtons(theme);
        }
    }
    
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

    window.addEventListener('scroll', handleScroll);

    
});
let lastScroll = 0;

// Select all sections with class 'scroll-section'
const sections = document.querySelectorAll('.slide-in');

// Function to handle scroll event
function handleScroll() {
    // Loop through each section
    sections.forEach(section => {
        // Calculate scroll direction (down or up)
        //const scrollDirection = window.scrollY > this.lastScroll ? 'down' : 'up';
        const scrollDirection = window.scrollY > lastScroll ? 'down' : 'up';
        this.lastScroll = window.scrollY;
        //console.log("scroll direction:", scrollDirection);
        // Apply transform based on scroll direction
        if (scrollDirection === 'down') {
            section.style.transform = 'translateY(-100px)';
            //console.log("-section", section);
        } else if (scrollDirection === 'up') {
            section.style.transform = 'translateY(100px)';
            //console.log("+section", section);
        }
    });
    lastScroll = window.scrollY;
}

// Listen for scroll events and call handleScroll function


function toggleDarkMode(darkOrLight) {
    const elements = document.querySelectorAll('.colorMode');
    
    
    ColorModeMoon(darkOrLight);
    ColorModeLightBulb(darkOrLight);
    ColorModeHeaderButtons(darkOrLight);
    
    elements.forEach(element => {
        if (darkOrLight === 'dark') {
            element.classList.add('dark-mode');
        } else if (darkOrLight === 'light') {
            element.classList.remove('dark-mode');
        }
    });

    // Store the user preference in localStorage
    const body = document.body;
    if (body.classList.contains('dark-mode') && !(body.classList.contains('light-Bulb-On'))) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function ColorModeHeaderButtons(darkOrLight) {
    const topMenuButtons = document.querySelectorAll('.topMenuButtons');
    topMenuButtons.forEach(button => {
        if (darkOrLight === 'dark') {
            button.classList.add('topMenuButtonsWhite');
        } else if (darkOrLight === 'light') {
            button.classList.remove('topMenuButtonsWhite');
        }
    });
}

function ColorModeMoon(darkOrLight) {
    const moonLightModes = document.querySelectorAll('.moonLightMode');
    moonLightModes.forEach(moon => {
        if (darkOrLight === 'dark') {
            moon.classList.remove('fa-regular');
            moon.classList.add('fa-solid');


        } else if (darkOrLight === 'light') {
            moon.classList.remove('fa-solid');
            moon.classList.add('fa-regular');
        }
    });
}

function ColorModeLightBulb(darkOrLight) {
    const colorModeLightBulbs = document.querySelectorAll('.colorModeLightBulb');
    colorModeLightBulbs.forEach(ligthBulb => {
        if (darkOrLight === 'dark') {
            ligthBulb.classList.remove('light-Bulb-On');
            ligthBulb.classList.remove('fa-solid');
            ligthBulb.classList.add('fa-regular');
        } else if (darkOrLight === 'light') {
            ligthBulb.classList.remove('fa-regular');
            ligthBulb.classList.add('light-Bulb-On');
            ligthBulb.classList.add('fa-solid');
        }
    });
}

// Check the user's preferred theme from localStorage on page load
document.addEventListener('DOMContentLoaded', function () {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        document.body.classList.add('dark-mode'); // Apply dark mode on page load
    }
});

function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

