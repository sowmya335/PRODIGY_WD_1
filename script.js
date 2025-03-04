// Typing effect
const textArray = [
    "Empowering Your Digital Presence...",
    "Innovative Web Solutions for You...",
    "Transforming Ideas into Reality..."
];
let textIndex = 0;
let charIndex = 0;
let typingText = document.getElementById("typing-text");

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingText.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

// Start animation on page load
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(typeEffect, 1000);
});
