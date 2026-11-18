
// Return to previous page
function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "/";
    }
}

// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Live clock
function updateClock() {
    const now = new Date();

    document.getElementById("current-time").textContent =
        now.toLocaleTimeString("en-US", {
            hour12: false
        });
}

updateClock();
setInterval(updateClock, 1000);

// Interactive background particles
const particleContainer = document.getElementById("particles");

for (let i = 0; i < 35; i++) {
    const particle = document.createElement("span");

    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        background: #c084fc;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5 + 0.1};
        box-shadow: 0 0 10px #9333ea;
        animation: particleFloat ${Math.random() * 8 + 5}s ease-in-out infinite alternate;
    `;

    particleContainer.appendChild(particle);
}

// Particle animation
const style = document.createElement("style");

style.textContent = `
    @keyframes particleFloat {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-35px);
        }
    }
`;

document.head.appendChild(style);
