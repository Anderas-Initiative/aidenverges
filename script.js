(() => {
  "use strict";

  const yearElement = document.getElementById("year");
  const timeElement = document.getElementById("current-time");
  const backButton = document.getElementById("go-back");
  const particleContainer = document.getElementById("particles");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  const updateClock = () => {
    if (!timeElement) return;
    const now = new Date();
    timeElement.dateTime = now.toISOString();
    timeElement.textContent = now.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
  };

  updateClock();
  window.setInterval(updateClock, 1000);

  if (backButton) {
    backButton.addEventListener("click", () => {
      // Avoid sending visitors back to the same missing URL.
      if (window.history.length > 1 && document.referrer &&
          new URL(document.referrer).origin === window.location.origin) {
        window.history.back();
      } else {
        window.location.assign("/");
      }
    });
  }

  const reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (particleContainer && !reduceMotion) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 28; i += 1) {
      const particle = document.createElement("span");
      const size = Math.random() * 2 + 1;
      particle.className = "particle";
      particle.style.cssText = [
        "position:absolute",
        `width:${size}px`,
        `height:${size}px`,
        `left:${Math.random() * 100}%`,
        `top:${Math.random() * 100}%`,
        `opacity:${Math.random() * 0.45 + 0.1}`,
        "border-radius:50%",
        "background:#c084fc",
        "box-shadow:0 0 10px #9333ea",
        `animation:particleFloat ${Math.random() * 8 + 5}s ease-in-out infinite alternate`
      ].join(";");
      fragment.appendChild(particle);
    }

    particleContainer.appendChild(fragment);

    const animationStyle = document.createElement("style");
    animationStyle.textContent = `
      @keyframes particleFloat {
        from { transform: translateY(0); }
        to { transform: translateY(-35px); }
      }
    `;
    document.head.appendChild(animationStyle);
  }
})();
