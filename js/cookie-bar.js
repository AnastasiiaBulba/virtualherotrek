// Cookie bar functionality with localStorage

class CookieBar {
  constructor() {
    this.cookieBar = document.getElementById("cookie-bar");
    this.acceptBtn = document.getElementById("accept-cookies");
    this.customizeBtn = document.getElementById("customize-cookies");
    this.init();
  }

  init() {
    if (this.cookieBar && this.acceptBtn) {
      // Check if cookies were already accepted
      if (!this.cookiesAccepted()) {
        this.showCookieBar();
      }

      // Add event listener to accept button
      this.acceptBtn.addEventListener("click", () => {
        this.acceptCookies();
      });

      // Add event listener to customize button
      if (this.customizeBtn) {
        this.customizeBtn.addEventListener("click", () => {
          this.openCookieSettings();
        });
      }
    }
  }

  cookiesAccepted() {
    return localStorage.getItem("cookiesAccepted") === "true";
  }

  showCookieBar() {
    if (this.cookieBar) {
      // Add a small delay to ensure smooth animation
      setTimeout(() => {
        this.cookieBar.classList.add("show");
      }, 1000);
    }
  }

  acceptCookies() {
    // Store acceptance in localStorage
    localStorage.setItem("cookiesAccepted", "true");

    // Hide cookie bar with animation
    if (this.cookieBar) {
      this.cookieBar.classList.remove("show");

      // Remove from DOM after animation
      setTimeout(() => {
        if (this.cookieBar.parentNode) {
          this.cookieBar.parentNode.removeChild(this.cookieBar);
        }
      }, 500);
    }

    // Show confirmation message
    this.showAcceptanceMessage();
  }

  openCookieSettings() {
    // Open cookie settings page in the same tab
    window.location.href = "prin-cookies.html";
  }

  showAcceptanceMessage() {
    // Create a temporary notification
    const notification = document.createElement("div");
    notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--gradient-primary);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            box-shadow: 0 4px 20px rgba(255, 105, 180, 0.3);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-weight: 500;
        `;
    notification.textContent =
      "Cookies successfully enabled! Enjoy your gaming experience.";

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // Method to manually check cookie status (for other scripts)
  static isAccepted() {
    return localStorage.getItem("cookiesAccepted") === "true";
  }

  // Method to reset cookie acceptance (for testing)
  static reset() {
    localStorage.removeItem("cookiesAccepted");
    location.reload();
  }
}

// Initialize cookie bar when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new CookieBar();
});

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = CookieBar;
}
