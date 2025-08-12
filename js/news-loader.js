// News loader functionality for Princess Run 3D website

class NewsLoader {
  constructor() {
    this.newsData = null;
    this.currentPage = {
      updates: 1,
      diaries: 1,
    };
    this.itemsPerPage = 2;
    this.init();
  }

  async init() {
    try {
      await this.loadNewsData();
      this.renderInitialNews();
      this.setupEventListeners();
    } catch (error) {
      console.error("Failed to initialize news loader:", error);
      this.showFallbackContent();
    }
  }

  async loadNewsData() {
    try {
      const response = await fetch("data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.newsData = await response.json();
    } catch (error) {
      console.error("Failed to load news data:", error);
      // Use fallback data if JSON loading fails
      this.newsData = this.getFallbackData();
    }
  }

  renderInitialNews() {
    if (!this.newsData) return;

    this.renderNewsCategory(
      "updates",
      this.newsData.news.updates.slice(0, this.itemsPerPage)
    );
    this.renderNewsCategory(
      "diaries",
      this.newsData.news.diaries.slice(0, this.itemsPerPage)
    );
  }

  renderNewsCategory(category, items) {
    const gridElement = document.getElementById(`${category}-grid`);
    if (!gridElement) return;

    gridElement.innerHTML = "";

    items.forEach((item, index) => {
      const newsCard = this.createNewsCard(item, category, index);
      gridElement.appendChild(newsCard);
    });
  }

  createNewsCard(item, category, index) {
    const card = document.createElement("div");
    card.className = "news-card";

    if (category === "diaries" && item.image && index < 2) {
      card.classList.add("with-image");
      card.innerHTML = `
                <div class="news-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="news-content">
                    <h4 class="news-title">${item.title}</h4>
                    <p class="news-excerpt">${item.excerpt}</p>
                    <div class="news-meta">
                        <span class="news-date">${item.date}</span>
                        <a href="#" class="read-more-btn">Read More</a>
                    </div>
                </div>
            `;
    } else {
      card.innerHTML = `
                <h4 class="news-title">${item.title}</h4>
                <p class="news-excerpt">${item.excerpt}</p>
                <div class="news-meta">
                    <span class="news-date">${item.date}</span>
                    <a href="#" class="read-more-btn">Read More</a>
                </div>
            `;
    }

    return card;
  }

  setupEventListeners() {
    const loadMoreBtns = document.querySelectorAll(".load-more-btn");

    loadMoreBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.target.dataset.category;
        this.loadMoreNews(category);
      });
    });

    // Add event listeners for Read More buttons
    this.setupReadMoreButtons();
  }

  setupReadMoreButtons() {
    // Use event delegation for dynamically created Read More buttons
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("read-more-btn")) {
        e.preventDefault();
        this.handleReadMore(e.target);
      }
    });
  }

  handleReadMore(button) {
    const newsCard = button.closest(".news-card");
    if (!newsCard) return;

    const title = newsCard.querySelector(".news-title")?.textContent;
    const excerpt = newsCard.querySelector(".news-excerpt")?.textContent;
    const date = newsCard.querySelector(".news-date")?.textContent;

    // Show detailed view (you can customize this)
    this.showNewsDetail(title, excerpt, date);
  }

  showNewsDetail(title, excerpt, date) {
    // Create a modal or expand the card to show more content
    const modal = document.createElement("div");
    modal.className = "news-modal";
    modal.innerHTML = `
      <div class="news-modal-content">
        <div class="news-modal-header">
          <h3>${title}</h3>
          <button class="close-modal">&times;</button>
        </div>
        <div class="news-modal-body">
          <p class="news-date">${date}</p>
          <p class="news-excerpt">${excerpt}</p>
          <div class="news-full-content">
            <p>This is the full content for "${title}". In a real application, this would contain the complete article text, images, and additional details.</p>
            <p>You can customize this section to show the actual full content from your data source.</p>
          </div>
        </div>
      </div>
    `;

    // Add close functionality
    const closeBtn = modal.querySelector(".close-modal");
    closeBtn.addEventListener("click", () => {
      document.body.removeChild(modal);
    });

    // Close on outside click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });

    // Add modal styles
    this.addModalStyles();

    // Show modal
    document.body.appendChild(modal);
  }

  addModalStyles() {
    if (document.getElementById("news-modal-styles")) return;

    const styles = document.createElement("style");
    styles.id = "news-modal-styles";
    styles.textContent = `
      .news-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      }
      
      .news-modal-content {
        background: white;
        border-radius: 15px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }
      
      .news-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid #eee;
      }
      
      .news-modal-header h3 {
        margin: 0;
        color: var(--primary-color);
        font-size: 1.5rem;
      }
      
      .close-modal {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #999;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .close-modal:hover {
        color: var(--primary-color);
      }
      
      .news-modal-body {
        padding: 20px;
      }
      
      .news-modal-body .news-date {
        color: #999;
        font-size: 0.9rem;
        margin-bottom: 15px;
      }
      
      .news-modal-body .news-excerpt {
        font-weight: 600;
        color: var(--text-color);
        margin-bottom: 20px;
        line-height: 1.6;
      }
      
      .news-full-content {
        color: var(--light-text);
        line-height: 1.7;
      }
      
      .news-full-content p {
        margin-bottom: 15px;
      }
    `;

    document.head.appendChild(styles);
  }

  loadMoreNews(category) {
    console.log(`Loading more news for category: ${category}`);

    if (!this.newsData) {
      console.error("No news data available");
      return;
    }

    const currentItems = this.currentPage[category] * this.itemsPerPage;
    const allItems = this.newsData.news[category];
    const nextItems = allItems.slice(
      currentItems,
      currentItems + this.itemsPerPage
    );

    console.log(
      `Current page: ${this.currentPage[category]}, Items per page: ${this.itemsPerPage}`
    );
    console.log(
      `Total items: ${allItems.length}, Current items: ${currentItems}, Next items: ${nextItems.length}`
    );

    if (nextItems.length === 0) {
      console.log("No more items to load");
      this.showNoMoreItems(category);
      return;
    }

    const gridElement = document.getElementById(`${category}-grid`);
    if (!gridElement) {
      console.error(`Grid element not found for category: ${category}`);
      return;
    }

    // Add new items to existing grid
    nextItems.forEach((item, index) => {
      const actualIndex = currentItems + index;
      const newsCard = this.createNewsCard(item, category, actualIndex);
      gridElement.appendChild(newsCard);
    });

    this.currentPage[category]++;
    console.log(`Page updated to: ${this.currentPage[category]}`);

    // Check if we've reached the end
    if (currentItems + this.itemsPerPage >= allItems.length) {
      console.log("Reached the end, showing no more items");
      this.showNoMoreItems(category);
    }
  }

  showNoMoreItems(category) {
    const loadMoreBtn = document.querySelector(`[data-category="${category}"]`);
    if (loadMoreBtn) {
      loadMoreBtn.textContent = "No More Items";
      loadMoreBtn.disabled = true;
      loadMoreBtn.style.opacity = "0.6";
    }
  }

  getFallbackData() {
    return {
      news: {
        updates: [
          {
            title: "Game Maintenance",
            excerpt:
              "Scheduled maintenance to improve server performance and game stability.",
            date: "December 22, 2024",
          },
          {
            title: "Bug Fixes",
            excerpt:
              "Fixed several minor bugs reported by our community players.",
            date: "December 21, 2024",
          },
        ],
        diaries: [
          {
            title: "Adventure in the Crystal Caves",
            excerpt:
              "Explore the mysterious depths of the Crystal Caves and discover hidden treasures.",
            date: "December 20, 2024",
            image: "pict/princess-new1.jpg",
          },
          {
            title: "Royal Palace Secrets",
            excerpt:
              "Uncover the ancient secrets hidden within the walls of the Royal Palace.",
            date: "December 19, 2024",
            image: "pict/princess-new2.jpg",
          },
        ],
      },
    };
  }

  showFallbackContent() {
    const updatesGrid = document.getElementById("updates-grid");
    const diariesGrid = document.getElementById("diaries-grid");

    if (updatesGrid) {
      updatesGrid.innerHTML = `
                <div class="news-card">
                    <h4 class="news-title">News Loading Error</h4>
                    <p class="news-excerpt">We're experiencing technical difficulties. Please try refreshing the page.</p>
                </div>
            `;
    }

    if (diariesGrid) {
      diariesGrid.innerHTML = `
                <div class="news-card">
                    <h4 class="news-title">Content Unavailable</h4>
                    <p class="news-excerpt">We're working to restore this content. Please check back later.</p>
                </div>
            `;
    }
  }
}

// Initialize news loader when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new NewsLoader();
});

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = NewsLoader;
}
