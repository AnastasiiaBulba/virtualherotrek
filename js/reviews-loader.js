// Reviews loader for dynamically loading reviews from JSON data

class ReviewsLoader {
  constructor() {
    this.init();
  }

  async init() {
    try {
      await this.loadReviewsFromJSON();
    } catch (error) {
      console.error("Error loading reviews:", error);
    }
  }

  async loadReviewsFromJSON() {
    try {
      console.log('Loading reviews from JSON...');
      const response = await fetch('data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('JSON data loaded successfully:', data);
      this.renderReviews(data.reviews, data.review_stats);
    } catch (error) {
      console.error("Failed to load reviews data:", error);
      // Fallback to static content if JSON loading fails
      this.loadStaticReviews();
    }
  }

  renderReviews(reviews, stats) {
    const reviewsGrid = document.querySelector('.reviews-grid');
    const reviewsStats = document.querySelector('.reviews-stats');
    
    console.log('Reviews grid found:', reviewsGrid);
    console.log('Reviews stats found:', reviewsStats);
    console.log('Reviews data:', reviews);
    console.log('Stats data:', stats);
    
    if (reviewsGrid) {
      reviewsGrid.innerHTML = '';
      
      reviews.forEach((review, index) => {
        console.log(`Creating review card ${index + 1}:`, review);
        const reviewCard = this.createReviewCard(review, index + 1);
        reviewsGrid.appendChild(reviewCard);
      });
    } else {
      console.error('Reviews grid not found!');
    }

    if (reviewsStats && stats) {
      reviewsStats.innerHTML = `
        <div class="review-stat">
          <div class="stat-icon">⭐</div>
          <div class="stat-value">${stats.average_rating}</div>
          <div class="stat-label">Average Rating</div>
        </div>
        <div class="review-stat">
          <div class="stat-icon">👥</div>
          <div class="stat-value">${stats.active_players}</div>
          <div class="stat-label">Active Players</div>
        </div>
        <div class="review-stat">
          <div class="stat-icon">🎮</div>
          <div class="stat-value">${stats.games_played}</div>
          <div class="stat-label">Games Played</div>
        </div>
      `;
    } else {
      console.error('Reviews stats not found or stats data missing!');
    }
  }

  createReviewCard(review, avatarIndex) {
    const card = document.createElement('div');
    card.className = 'review-card';
    
    const stars = '⭐'.repeat(review.rating);
    
    card.innerHTML = `
      <div class="review-header">
        <div class="review-avatar avatar-${avatarIndex}">
          <svg viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
        </div>
        <div class="review-info">
          <h4>${review.name}</h4>
          <div class="review-rating">
            ${stars.split('').map(star => `<span class="star">${star}</span>`).join('')}
          </div>
        </div>
      </div>
      <p class="review-text">"${review.text}"</p>
      <div class="review-date">${review.date}</div>
    `;
    
    return card;
  }

  loadStaticReviews() {
    // Fallback to static content if JSON loading fails
    console.log("Loading static reviews as fallback");
  }
}

// Initialize reviews loader when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Wait a bit for the reviews section to be loaded by the builder
  setTimeout(() => {
    if (document.querySelector('.reviews-grid')) {
      console.log('Reviews section found, initializing loader...');
      new ReviewsLoader();
    } else {
      console.log('Reviews section not found, waiting longer...');
      // Try again after a longer delay
      setTimeout(() => {
        if (document.querySelector('.reviews-grid')) {
          console.log('Reviews section found on second attempt, initializing loader...');
          new ReviewsLoader();
        } else {
          console.error('Reviews section still not found after delay!');
        }
      }, 1000);
    }
  }, 1000);
});
