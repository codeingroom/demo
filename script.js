// script.js
const arrow = document.getElementById("arrow");
const labels = document.querySelectorAll(".label");

function handleOrientation(event) {
    const alpha = event.alpha; // Device orientation in degrees

    if (alpha !== null) {
        // Calculate the direction (North, East, South, West) based on the alpha value
        let direction = "North";

        if (alpha >= 45 && alpha < 135) {
            direction = "East";
        } else if (alpha >= 135 && alpha < 225) {
            direction = "South";
        } else if (alpha >= 225 && alpha < 315) {
            direction = "West";
        }

        arrow.style.transform = `translate(-50%, -50%) rotate(${alpha}deg)`;

        // Remove highlight from all labels
        labels.forEach((label) => {
            label.classList.remove("highlight");
        });

        // Highlight the corresponding label
        const labelElement = document.getElementById(direction.toLowerCase());
        labelElement.classList.add("highlight");
    }
}

// Add an event listener for the deviceorientation event
window.addEventListener("deviceorientation", handleOrientation);
