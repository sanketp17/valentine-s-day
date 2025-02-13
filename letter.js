function openEnvelope() {
    document.getElementById("flap").style.transform = "rotateX(180deg)";
    document.getElementById("letter").style.bottom = "10px"; // Slide letter up
    createFloatingHearts();
}

function closeEnvelope() {
    document.getElementById("flap").style.transform = "rotateX(0deg)";
    document.getElementById("letter").style.bottom = "-100%"; // Slide letter back inside
}

/* Floating hearts effect */
function createFloatingHearts() {
    const heartContainer = document.getElementById("hearts-container");

    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart-float");

        let randomX = Math.random() * window.innerWidth - window.innerWidth / 2;
        let randomDuration = Math.random() * 2 + 2;

        heart.style.left = `50%`;
        heart.style.marginLeft = `${randomX}px`;
        heart.style.animationDuration = `${randomDuration}s`;

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, randomDuration * 1000);
    }
}

/* Next Page Button Animation */
function goToNextPage() {
    let button = document.getElementById("nextPage");
    let loading = button.querySelector(".loading");

    button.style.pointerEvents = "none";
    loading.style.display = "inline-block";

    setTimeout(() => {
        window.location.href = "card.html";  // Replace with your next page URL
    }, 2000);
}
function goToNextPage() {
    document.body.classList.add("fade-out"); // Add fade-out effect
    setTimeout(() => {
        window.location.href = "card.html"; // Redirect after animation
    }, 800); // Delay matches the fade-out transition duration
}

document.getElementById("nextPage").addEventListener("click", goToNextPage);
