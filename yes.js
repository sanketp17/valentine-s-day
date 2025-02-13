document.getElementById("nextButton").addEventListener("click", function () {
    document.body.classList.add("fade-out"); // Apply fade-out effect
    setTimeout(() => {
        window.location.href = "final.html"; // Redirect to the final page
    }, 800); // Delay matches fade-out duration
});

// Ensure fade-in effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});
