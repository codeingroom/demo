// script.js
const arrow = document.getElementById("arrow");

function handleOrientation(event) {
    const alpha = event.alpha; // Device orientation in degrees

    if (alpha !== null) {
        // Calculate the direction (North, South, East, West) based on the alpha value
        let direction = "North";

        if (alpha >= 45 && alpha < 135) {
            direction = "East";
        } else if (alpha >= 135 && alpha < 225) {
            direction = "South";
        } else if (alpha >= 225 && alpha < 315) {
            direction = "West";
        }

        arrow.style.transform = `translate(-50%, -50%) rotate(${alpha}deg)`;
        arrow.innerText = direction;
    }
}

// Add an event listener for the deviceorientation event
window.addEventListener("deviceorientation", handleOrientation);
