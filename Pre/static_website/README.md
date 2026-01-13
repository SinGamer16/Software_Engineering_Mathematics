# Software Engineering Mathematics - Static Website

A modern, iOS-inspired static website for the Software Engineering Mathematics curriculum, built with Puppertino framework and designed for external hosting.

## 🚀 Features

- **Modern iOS Design**: Clean, intuitive interface inspired by macOS design principles
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark Mode Support**: Automatic theme switching with system preference detection
- **Mathematical Notation**: Full MathJax support for complex mathematical expressions
- **Interactive Elements**: Smooth animations, hover effects, and engaging user interactions
- **Static Hosting Ready**: No server-side dependencies, perfect for GitHub Pages, Netlify, or any static host

## 📁 Project Structure

```
static_website/
├── index.html              # Homepage with curriculum overview
├── css/
│   └── custom.css          # Enhanced styling with iOS aesthetics
├── js/
│   └── main.js             # Interactive functionality
├── pages/
│   ├── discrete-math.html      # Discrete Mathematics course page
│   ├── linear-algebra.html     # Linear Algebra course page
│   ├── probability.html        # Probability & Statistics course page
│   └── algorithms.html         # Algorithms & Complexity course page
└── assets/                 # Images, icons, and other assets
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom properties, animations, and responsive design
- **JavaScript**: Interactive features and theme management
- **Puppertino Framework**: macOS-inspired CSS components
- **MathJax**: Mathematical notation rendering
- **Inter Font**: Modern typography

## 🌐 Hosting Instructions

### Option 1: GitHub Pages
1. Upload the `static_website` folder to a GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/static_website` folder
5. Your site will be available at `https://username.github.io/repository/static_website/`

### Option 2: Netlify
1. Drag and drop the `static_website` folder to [Netlify](https://netlify.com)
2. Site will be live instantly with HTTPS
3. Custom domain support available

### Option 3: Any Static Host
1. Upload all files in `static_website` folder to your web server
2. Ensure the folder structure is maintained
3. No special server configuration required

## 🎨 Customization

### Colors and Themes
Edit the CSS custom properties in `css/custom.css`:

```css
:root {
  --primary-color: #007aff;    /* Main accent color */
  --text-primary: #1d1d1f;     /* Primary text color */
  --bg-primary: #ffffff;       /* Background color */
  /* ... more variables */
}
```

### Adding New Pages
1. Create new HTML file in `pages/` directory
2. Use the existing page templates as reference
3. Update navigation in `index.html` if needed
4. Add links in the curriculum section

### Content Updates
- Edit mathematical content directly in HTML files
- MathJax expressions use LaTeX syntax: `$expression$` for inline, `$$expression$$` for display
- Update course descriptions and learning objectives as needed

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is part of the Software Engineering Mathematics curriculum and is available under the same license as the main project.

## 🤝 Contributing

To contribute to the website:
1. Make changes to the static files
2. Test locally (open `index.html` in a browser)
3. Ensure responsive design works on mobile
4. Verify MathJax rendering
5. Submit changes for review

## 📞 Support

For questions about the mathematics curriculum, visit the main repository. For website-specific issues, check the static hosting documentation or create an issue.