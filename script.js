// Toggle the mobile menu
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Set the target date and time for the countdown
const targetDate = new Date("Dec 9, 2025 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the results in the respective HTML elements
        document.getElementById("days").textContent = days < 10 ? "0" + days : days;
        document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
    } else {
        // If the countdown is over, display 00 for all units
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

document.addEventListener('touchmove', function(event) {
    // Your code here
}, { passive: true });

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out'); // Add fade-out class if needed
    setTimeout(function() {
        loader.style.display = 'none'; // Hide the loader
    }, 500); // Match this with your animation duration
});
