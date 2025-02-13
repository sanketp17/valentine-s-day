document.getElementById("nextBtn").addEventListener("click", function() {
    document.getElementById("nextBtn").style.display = "none"; // Hide button
    document.getElementById("loading").style.display = "block"; // Show loading animation

    setTimeout(function() {
        window.location.href = "letter.html"; // Redirect after loading
    }, 3000); // 3-second delay
});
