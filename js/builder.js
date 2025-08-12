// Builder script for dynamically inserting header and footer

class PageBuilder {
  constructor() {
    this.init();
  }

  async init() {
    try {
      await this.loadHeader();
      await this.loadHero();
      await this.loadGame();
      await this.loadFeatures();
      await this.loadHowToPlay();
      await this.loadFieldDescription();
      // Reviews will be loaded dynamically by reviews-loader.js
      await this.loadNewsSection();
      await this.loadAdditionalSection();
      await this.loadFooter();
      this.adjustBodyPadding();
    } catch (error) {
      console.error("Error loading page components:", error);
    }
  }

  async loadHeader() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
      try {
        const response = await fetch("parts/header.html");
        if (response.ok) {
          const headerHtml = await response.text();
          headerPlaceholder.innerHTML = headerHtml;

          // Re-initialize mobile menu after header is loaded
          setTimeout(() => {
            this.initMobileMenu();
          }, 100);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to load header:", error);
        headerPlaceholder.innerHTML = this.getFallbackHeader();
      }
    }
  }

  async loadHero() {
    const heroPlaceholder = document.getElementById("hero-placeholder");
    if (heroPlaceholder) {
      try {
        const response = await fetch("parts/hero.html");
        if (response.ok) {
          const heroHtml = await response.text();
          heroPlaceholder.innerHTML = heroHtml;
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to load hero section:", error);
        heroPlaceholder.innerHTML = this.getFallbackHero();
      }
    }
  }

  async loadGame() {
    const gamePlaceholder = document.getElementById("game-placeholder");
    if (gamePlaceholder) {
      try {
        const response = await fetch("parts/game.html");
        if (response.ok) {
          const gameHtml = await response.text();
          gamePlaceholder.innerHTML = gameHtml;
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to load game section:", error);
        gamePlaceholder.innerHTML = this.getFallbackGame();
      }
    }
  }

  async loadFeatures() {
    const featuresPlaceholder = document.getElementById("features-placeholder");
    if (featuresPlaceholder) {
      try {
        const response = await fetch("parts/features.html");
        if (response.ok) {
          const featuresHtml = await response.text();
          featuresPlaceholder.innerHTML = featuresHtml;
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to load features section:", error);
        featuresPlaceholder.innerHTML = this.getFallbackFeatures();
      }
    }
  }

  async loadHowToPlay() {
    const howToPlayPlaceholder = document.getElementById(
      "how-to-play-placeholder"
    );
    if (howToPlayPlaceholder) {
      try {
        const response = await fetch("parts/how-to-play.html");
        if (response.ok) {
          const howToPlayHtml = await response.text();
          howToPlayPlaceholder.innerHTML = howToPlayHtml;
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to load how-to-play section:", error);
        howToPlayPlaceholder.innerHTML = this.getFallbackHowToPlay();
      }
    }
  }

  async loadFieldDescription() {
    const fieldDescriptionPlaceholder = document.getElementById(
      "field-description-placeholder"
    );
    if (fieldDescriptionPlaceholder) {
      try {
        const response = await fetch("parts/field-description.html");
        if (response.ok) {
          const fieldDescriptionHtml = await response.text();
          fieldDescriptionPlaceholder.innerHTML = fieldDescriptionHtml;
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to load field description section:", error);
        fieldDescriptionPlaceholder.innerHTML =
          this.getFallbackFieldDescription();
      }
    }
  }

  async loadReviews() {
    const reviewsPlaceholder = document.getElementById("reviews-placeholder");
    if (reviewsPlaceholder) {
      try {
        const response = await fetch("parts/reviews.html");
        if (response.ok) {
          const reviewsHtml = await response.text();
          reviewsPlaceholder.innerHTML = reviewsHtml;
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to load reviews section:", error);
        reviewsPlaceholder.innerHTML = this.getFallbackReviews();
      }
    }
  }

  async loadNewsSection() {
    const newsSectionPlaceholder = document.getElementById(
      "news-section-placeholder"
    );
    if (newsSectionPlaceholder) {
      try {
        const response = await fetch("parts/news-section.html");
        if (response.ok) {
          const newsSectionHtml = await response.text();
          newsSectionPlaceholder.innerHTML = newsSectionHtml;
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to load news section:", error);
        newsSectionPlaceholder.innerHTML = this.getFallbackNewsSection();
      }
    }
  }

  async loadAdditionalSection() {
    const additionalSectionPlaceholder = document.getElementById(
      "additional-section-placeholder"
    );
    if (additionalSectionPlaceholder) {
      try {
        const response = await fetch("parts/additional-section.html");
        if (response.ok) {
          const additionalSectionHtml = await response.text();
          additionalSectionPlaceholder.innerHTML = additionalSectionHtml;
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to load additional section:", error);
        additionalSectionPlaceholder.innerHTML =
          this.getFallbackAdditionalSection();
      }
    }
  }

  async loadFooter() {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
      try {
        const response = await fetch("parts/footer.html");
        if (response.ok) {
          const footerHtml = await response.text();
          footerPlaceholder.innerHTML = footerHtml;

          // Set current year after footer is loaded
          setTimeout(() => {
            this.setCurrentYear();
          }, 100);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to load footer:", error);
        footerPlaceholder.innerHTML = this.getFallbackFooter();
      }
    }
  }

  adjustBodyPadding() {
    // Add padding to body to account for fixed header
    const header = document.querySelector(".header");
    if (header) {
      const headerHeight = header.offsetHeight;
      document.body.style.paddingTop = headerHeight + "px";
    }
  }

  initMobileMenu() {
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    let scrollPosition = 0;

    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener("click", function () {
        const isActive = mobileToggle.classList.contains("active");

        if (!isActive) {
          // Opening menu
          mobileToggle.classList.add("active");
          navMenu.classList.add("active");
          disablePageScroll();
        } else {
          // Closing menu
          mobileToggle.classList.remove("active");
          navMenu.classList.remove("active");
          enablePageScroll();
        }
      });

      // Close menu when clicking on a link
      const navLinks = navMenu.querySelectorAll("a");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileToggle.classList.remove("active");
          navMenu.classList.remove("active");
          enablePageScroll();
        });
      });

      // Close menu when clicking outside
      navMenu.addEventListener("click", (e) => {
        if (e.target === navMenu) {
          mobileToggle.classList.remove("active");
          navMenu.classList.remove("active");
          enablePageScroll();
        }
      });
    }

    function disablePageScroll() {
      // Save current scroll position
      scrollPosition = window.scrollY || window.pageYOffset;
      // Set top to avoid "jump" when position:fixed
      document.body.style.top = `-${scrollPosition}px`;
      document.body.classList.add("body-no-scroll");
      document.documentElement.classList.add("body-no-scroll");
    }

    function enablePageScroll() {
      document.body.classList.remove("body-no-scroll");
      document.documentElement.classList.remove("body-no-scroll");
      // Remove inline top style and restore scroll position
      document.body.style.top = "";
      window.scrollTo(0, scrollPosition);
      scrollPosition = 0;
    }
  }

  setCurrentYear() {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  getFallbackHeader() {
    return `
            <header class="header">
                <div class="container">
                    <div class="header-content">
                        <a href="index.html" class="logo">
                            <img src="pict/princess512.jpg" alt="Princess Run 3D Logo">
                            <span>Princess Run 3D</span>
                        </a>
                        <nav>
                            <ul class="nav-menu">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="prin-new.html">News</a></li>
                                <li><a href="prin-contacts.html">Contacts</a></li>
                                <li><a href="prin-privacy.html">Privacy</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        `;
  }

  getFallbackHero() {
    return `
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <h1>Welcome to Princess Run 3D</h1>
                        <p>Experience the ultimate princess adventure in a 3D world!</p>
                        <a href="game.html" class="cta-button">Play Now</a>
                    </div>
                </div>
            </section>
        `;
  }

  getFallbackGame() {
    return `
            <section class="game-section">
                <div class="container">
                    <h2>Game Features</h2>
                    <div class="game-grid">
                        <div class="game-card">
                            <img src="pict/princess-run.jpg" alt="Princess Run">
                            <h3>Princess Run</h3>
                            <p>Run, jump, and dodge obstacles in a beautiful 3D world.</p>
                        </div>
                        <div class="game-card">
                            <img src="pict/princess-dress.jpg" alt="Princess Dress">
                            <h3>Princess Dress</h3>
                            <p>Customize your princess with various outfits and accessories.</p>
                        </div>
                        <div class="game-card">
                            <img src="pict/princess-crown.jpg" alt="Princess Crown">
                            <h3>Princess Crown</h3>
                            <p>Earn crowns and unlock new achievements.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }

  getFallbackFeatures() {
    return `
            <section class="features-section">
                <div class="container">
                    <h2>Game Features</h2>
                    <div class="features-grid">
                        <div class="feature-card">
                            <img src="pict/feature1.jpg" alt="Feature 1">
                            <h3>3D Graphics</h3>
                            <p>Experience stunning 3D graphics and animations.</p>
                        </div>
                        <div class="feature-card">
                            <img src="pict/feature2.jpg" alt="Feature 2">
                            <h3>Smooth Controls</h3>
                            <p>Easy-to-use controls for all ages.</p>
                        </div>
                        <div class="feature-card">
                            <img src="pict/feature3.jpg" alt="Feature 3">
                            <h3>Endless Fun</h3>
                            <p>Play endlessly and enjoy the game.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }

  getFallbackHowToPlay() {
    return `
            <section class="how-to-play-section">
                <div class="container">
                    <h2>How to Play</h2>
                    <div class="how-to-play-grid">
                        <div class="how-to-play-card">
                            <img src="pict/how-to-play1.jpg" alt="How to Play 1">
                            <h3>Run and Jump</h3>
                            <p>Use the arrow keys to run and jump over obstacles.</p>
                        </div>
                        <div class="how-to-play-card">
                            <img src="pict/how-to-play2.jpg" alt="How to Play 2">
                            <h3>Dodge Enemies</h3>
                            <p>Avoid enemies by jumping or dodging.</p>
                        </div>
                        <div class="how-to-play-card">
                            <img src="pict/how-to-play3.jpg" alt="How to Play 3">
                            <h3>Collect Items</h3>
                            <p>Collect coins and power-ups to enhance your princess.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }

  getFallbackFieldDescription() {
    return `
            <section class="field-description-section">
                <div class="container">
                    <h2>Game Field</h2>
                    <p>The game field is a beautiful 3D landscape filled with various obstacles and challenges. Your princess must navigate through this field to reach the end.</p>
                    <p>Along the way, she will encounter enemies, collect items, and overcome obstacles to become the ultimate princess.</p>
                </div>
            </section>
        `;
  }

  getFallbackReviews() {
    return `
            <section class="reviews-section">
                <div class="container">
                    <h2>What Players Say</h2>
                    <div class="reviews-grid">
                        <div class="review-card">
                            <p>"This game is amazing! I love the 3D graphics and smooth controls."</p>
                            <p>- Sarah, 5 stars</p>
                        </div>
                        <div class="review-card">
                            <p>"The princess dress customization is so much fun!"</p>
                            <p>- Alex, 5 stars</p>
                        </div>
                        <div class="review-card">
                            <p>"I can't get enough of this game. It's addictive!"</p>
                            <p>- Emma, 5 stars</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }

  getFallbackNewsSection() {
    return `
            <section class="news-section">
                <div class="container">
                    <h2>Latest News</h2>
                    <div class="news-grid">
                        <div class="news-card">
                            <h3>New Update Available!</h3>
                            <p>We've added a new princess outfit and a new game mode. Check it out!</p>
                            <p>Date: ${new Date().toLocaleDateString()}</p>
                        </div>
                        <div class="news-card">
                            <h3>Game Contest Announced!</h3>
                            <p>Win a free princess dress by participating in our latest contest.</p>
                            <p>Date: ${new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }

  getFallbackFooter() {
    return `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="prin-new.html">News</a></li>
                                <li><a href="prin-contacts.html">Contacts</a></li>
                                <li><a href="prin-privacy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h3>Contact Information</h3>
                            <div class="contact-info">
                                <div class="contact-item">
                                    <span class="contact-icon">📧</span>
                                    <span>contact@virtualherotrek.com</span>
                                </div>
                                <div class="contact-item">
                                    <span class="contact-icon">📞</span>
                                    <span>+44 77 151 1234</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; ${new Date().getFullYear()} <a href="https://virtualherotrek.com">Virtualherotrek.com</a>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
  }

  getFallbackAdditionalSection() {
    return `
            <section class="additional-section">
                <div class="container">
                    <div class="additional-content">
                        <div class="additional-text">
                            <h2>Додаткова інформація</h2>
                            <p>Тут може бути додаткова інформація про гру або особливості.</p>
                            <p>Використовуйте цю секцію для розширення контенту вашої сторінки.</p>
                        </div>
                        <div class="additional-image">
                            <img src="pict/princess-section3.jpg" alt="Princess Section 3" class="princess-img">
                        </div>
                    </div>
                </div>
            </section>
        `;
  }
}

// Initialize page builder when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new PageBuilder();
});
