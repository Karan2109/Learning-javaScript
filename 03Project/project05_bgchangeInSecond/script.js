const randomColor = function () {
    const hex = "0123456789ABCDEF"; // Hexadecimal characters
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]; // Randomly pick a character from the hex string
    }
    return color;
};

let intervalId; // To store the interval ID for global access

const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000); // Change the background color every second
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor(); // Set the background color
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId); // Stop the interval
    intervalId = null; // Reset intervalId to allow restarting
};

// Add event listeners to the buttons
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);