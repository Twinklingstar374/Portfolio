// document.addEventListener("DOMContentLoaded", function() {
//     let nameText = "Bulbul Agarwalla";
//     let index = 0;
//     let typingElement = document.getElementById("typing-name");

//     function typeEffect() {
//         if (index < nameText.length) {
//             typingElement.innerHTML += nameText.charAt(index);
//             index++;
//             setTimeout(typeEffect, 100);
//         }
//     }

//     typeEffect();
// });

// Typing Effect for Introduction

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent instant page load
            const href = this.href; // Get the link URL

            // Add fade-out effect
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = href; // Navigate to the new page after fade-out
            }, 500); // Match CSS transition duration
        });
    });
});

