# Princess Run 3D - Official Website

A modern, responsive website for the Princess Run 3D game, featuring beautiful design, interactive elements, and comprehensive information about the game.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with breakpoints at 360px, 768px, and 1280px
- **Modern UI/UX**: Beautiful gradients, animations, and hover effects
- **Dynamic Content**: Header and footer loaded dynamically using JavaScript
- **Cookie Management**: Cookie consent bar with localStorage
- **Contact Form**: Fully validated contact form with success/error handling
- **News System**: Dynamic news loading with "Load More" functionality
- **Legal Pages**: Complete Privacy Policy, Cookie Policy, and Disclaimer
- **Game Integration**: Embedded iframe for Princess Run 3D game

## 🎮 Game Information

**Princess Run 3D** is an exciting 3D platform arcade game where players:

- Run through colorful 3D worlds as a fearless princess
- Collect beautiful clothes, shoes, hair accessories, and more
- Increase charisma to gain loyal companions
- Avoid obstacles like ugly clothes, bad weather, and enemies
- Experience dynamic gameplay with multiple difficulty levels

## 🏗️ Project Structure

```
virtualherotrek/
├── index.html                 # Main homepage
├── prin-new.html             # News page
├── prin-contacts.html        # Contact page
├── prin-privacy.html         # Privacy Policy
├── prin-cookies.html         # Cookie Policy
├── prin-disclaimer.html      # Disclaimer
├── css/                      # Stylesheets
│   ├── main.css             # Main styles and variables
│   ├── header.css           # Header styles
│   ├── hero.css             # Hero section styles
│   ├── game.css             # Game iframe styles
│   ├── features.css         # Features section styles
│   ├── how-to-play.css      # How to play section styles
│   ├── field-description.css # Field description styles
│   ├── reviews.css          # Reviews section styles
│   ├── news-section.css     # News section styles
│   ├── contacts.css         # Contact page styles
│   ├── legal.css            # Legal pages styles
│   ├── footer.css           # Footer styles
│   └── cookie-bar.css       # Cookie bar styles
├── js/                       # JavaScript files
│   ├── main.js              # Main functionality
│   ├── builder.js           # Dynamic content loader
│   ├── cookie-bar.js        # Cookie management
│   ├── contacts.js          # Contact form handling
│   └── news-loader.js       # News loading system
├── parts/                    # HTML components
│   ├── header.html          # Header component
│   ├── hero.html            # Hero section
│   ├── game.html            # Game section
│   ├── features.html        # Features section
│   ├── how-to-play.html     # How to play section
│   ├── field-description.html # Field description
│   ├── reviews.html         # Reviews section
│   ├── news-section.html    # News section
│   └── footer.html          # Footer component
├── pict/                     # Images
│   ├── princess-hero.jpg    # Hero background
│   ├── princess-section1.jpg # Features image
│   ├── princess-section2.jpg # Field description image
│   ├── princess-section3.jpg # Additional section image
│   ├── princess-new1.jpg    # News image 1
│   ├── princess-new2.jpg    # News image 2
│   └── princess512.jpg      # Favicon
└── data.json                # Content data for dynamic loading
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser with HTML5 support
- Local web server (for development)

### Installation

1. Clone or download the project files
2. Place all files in your web server directory
3. Open `index.html` in your browser

### Development Setup

For local development, you can use:

- Python: `python -m http.server 8000`
- Node.js: `npx serve`
- PHP: `php -S localhost:8000`
- Any local web server of your choice

## 🎨 Design Features

### Color Scheme

- **Primary**: Pink (#ff69b4)
- **Secondary**: Deep Pink (#ff1493)
- **Accent**: Light Pink (#ffb6c1)
- **Background**: White (#fefefe)
- **Text**: Dark Gray (#333)

### Typography

- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Responsive**: Scales from 0.85rem to 2.5rem across breakpoints

### Animations

- Fade-in effects on scroll
- Hover transformations
- Smooth transitions (0.3s ease)
- CSS keyframe animations

## 📱 Responsive Breakpoints

- **Mobile**: 360px and below
- **Tablet**: 768px and below
- **Desktop**: 1280px and above

## 🔧 Technical Features

### CSS

- CSS Custom Properties (variables)
- Flexbox layouts (no CSS Grid)
- Mobile-first responsive design
- Smooth animations and transitions

### JavaScript

- ES6+ syntax
- Async/await for data loading
- Event-driven architecture
- Local storage for cookie preferences

### Performance

- Optimized images
- Minimal external dependencies
- Efficient DOM manipulation
- Lazy loading for news content

## 📄 Page Descriptions

### Homepage (index.html)

- Hero section with game introduction
- Embedded game iframe
- Features showcase
- How to play instructions
- Field descriptions
- Player reviews
- News section

### News (prin-new.html)

- Game updates category
- Trail diaries with images
- Load more functionality
- Dynamic content loading

### Contacts (prin-contacts.html)

- Contact information
- Interactive contact form
- Form validation
- Google Maps integration
- Success/error messages

### Legal Pages

- **Privacy Policy**: Data collection and usage
- **Cookie Policy**: Cookie management details
- **Disclaimer**: Legal disclaimers and terms

## 🍪 Cookie Management

The website includes a cookie consent system that:

- Shows on first visit
- Stores user preferences in localStorage
- Provides clear information about cookie usage
- Allows users to accept or reject cookies

## 📧 Contact Form

Features include:

- Real-time validation
- Input sanitization
- Success/error messaging
- Form field clearing after submission
- Responsive design

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Management

Content is managed through:

- `data.json` file for dynamic content
- HTML components in `parts/` directory
- JavaScript for dynamic loading
- CSS for styling and animations

## 🔒 Security Features

- Form input validation
- XSS prevention
- Secure iframe embedding
- Privacy-focused design

## 📊 SEO Features

- Semantic HTML structure
- Meta descriptions and keywords
- Proper heading hierarchy
- Alt text for images
- Structured content

## 🚀 Deployment

### Production

1. Optimize images for web
2. Minify CSS and JavaScript
3. Enable compression on server
4. Set proper cache headers
5. Use HTTPS

### Hosting

- Compatible with any modern web hosting
- No server-side requirements
- Static file hosting supported

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved by Playuniversemasters.com.

## 📞 Support

For technical support or questions:

- **Email**: contact@playuniversemasters.com
- **Phone**: +1 (204) 555-0123
- **Address**: 450 Broadway, Winnipeg, MB R3C 0V8, Canada

## 🔄 Updates

- **Last Updated**: 2025
- **Version**: 1.0.0
- **Status**: Production Ready

---

**Note**: This website is designed specifically for Princess Run 3D and Playuniversemasters.com. All content, images, and branding are property of Playuniversemasters.com.
