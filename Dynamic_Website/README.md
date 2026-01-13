# Software Engineering Mathematics

An interactive learning platform for mathematics essential to software engineering and computer science.

## Overview

This Next.js application provides a comprehensive learning platform covering:

- **Discrete Mathematics**: Sets, logic, relations, graph theory
- **Linear Algebra**: Vectors, matrices, transformations
- **Probability & Statistics**: Distributions, analysis, inference
- **Algorithm Analysis**: Complexity, optimization, paradigms

## Features

- 📚 **Structured Curriculum**: Organized learning paths with modules and lessons
- 🎯 **Interactive Content**: Engaging mathematical content with examples
- 📊 **Progress Tracking**: Monitor learning progress across modules
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- ⚡ **Fast Performance**: Built with Next.js 16 and optimized for speed

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd software-engineering-mathematics
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── page.tsx              # Home page
├── layout.tsx            # Root layout
├── globals.css           # Global styles
└── learn/
    ├── page.tsx          # Learning path overview
    └── [moduleId]/
        ├── page.tsx      # Module overview
        └── [lessonId]/
            └── page.tsx  # Individual lessons
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Learning Modules

### Current Modules

1. **Discrete Mathematics** - Sets, logic, and foundational concepts
2. **Linear Algebra** - Vectors, matrices, and transformations
3. **Probability & Statistics** - Statistical analysis and probability theory
4. **Algorithm Analysis** - Complexity analysis and algorithmic thinking

### Future Modules

- Numerical Methods
- Information Theory
- Cryptography Mathematics
- Graph Theory Applications

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built for the software engineering community
- Mathematics content designed for practical application
- Inspired by the intersection of mathematics and software development
