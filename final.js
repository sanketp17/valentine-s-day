function moveButton() {
    const noButton = document.getElementById("noButton");
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

function nextPage() {
    document.body.classList.add("fade-out"); // Smooth fade-out transition
    setTimeout(() => {
        window.location.href = "letter.html"; // Redirect after animation
    }, 800);
}

// Function to handle clicking "Yes"
function handleYesClick() {
    document.body.classList.add("fade-out"); // Apply fade-out effect
    setTimeout(() => {
        window.location.href = "last.html"; // Redirect to last.html
    }, 800); // Delay matches fade-out duration
}

// Attach the event listener when the document loads
document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yesButton");
    if (yesButton) {
        yesButton.onclick = handleYesClick;
    }
});
