// Main JavaScript file for Princess Run 3D website

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initMobileMenu();
  initScrollAnimations();
  initCurrentYear();
  initGameControls();

  console.log("Princess Run 3D website loaded successfully!");
});

// Mobile menu functionality - now handled by builder.js
function initMobileMenu() {
  // Mobile menu is initialized in builder.js after header loads
  console.log("Mobile menu initialization delegated to builder.js");
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  const animatedElements = document.querySelectorAll(
    ".section, .feature-card, .instruction-card, .review-card, .news-card"
  );
  animatedElements.forEach((el) => observer.observe(el));
}

// Set current year in footer
function initCurrentYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Game controls functionality
function initGameControls() {
  const controlBtns = document.querySelectorAll(".control-btn");

  controlBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const action = this.textContent.toLowerCase();

      switch (action) {
        case "fullscreen":
          toggleFullscreen();
          break;
        case "instructions":
          showInstructions();
          break;
        case "high scores":
          showHighScores();
          break;
      }
    });
  });
}

// Toggle fullscreen for game iframe
function toggleFullscreen() {
  const gameFrame = document.querySelector(".game-frame iframe");
  if (gameFrame) {
    if (gameFrame.requestFullscreen) {
      gameFrame.requestFullscreen();
    } else if (gameFrame.webkitRequestFullscreen) {
      gameFrame.webkitRequestFullscreen();
    } else if (gameFrame.msRequestFullscreen) {
      gameFrame.msRequestFullscreen();
    }
  }
}

// Show game instructions
function showInstructions() {
  alert(
    "Game Instructions:\n\n" +
      "• Use Arrow Keys or WASD to move\n" +
      "• Press Spacebar to jump\n" +
      "• Collect beautiful items to increase charisma\n" +
      "• Avoid ugly clothes and obstacles\n" +
      "• Gain companions to help you progress"
  );
}

// Show high scores (placeholder)
function showHighScores() {
  alert(
    "High Scores:\n\n" +
      "🏆 Princess Emma: 15,420 points\n" +
      "🥈 Gaming Queen: 14,890 points\n" +
      "🥉 Adventure Lover: 14,230 points\n\n" +
      "Can you beat these scores?"
  );
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.background = "var(--white)";
      header.style.backdropFilter = "none";
    }
  }
});
