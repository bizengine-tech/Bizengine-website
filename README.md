# Bizengine - Portfolio Website

A modern, responsive portfolio website for Bizengine built with React, Vite, and Tailwind CSS.

## Overview

This is the official portfolio website for Bizengine, showcasing our work, services, and expertise. The site is built with cutting-edge web technologies to deliver a fast, engaging user experience.

## Tech Stack

- **Frontend Framework:** [React 19](https://react.dev) - A JavaScript library for building user interfaces
- **Build Tool:** [Vite 8](https://vitejs.dev) - Next generation frontend tooling
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **Animations:** [Framer Motion](https://www.framer.com/motion) - Production-ready animation library
- **Icons:** 
  - [Lucide React](https://lucide.dev) - Beautiful icon library
  - [React Icons](https://react-icons.github.io/react-icons) - Icon set collections
- **Smooth Scrolling:** [React Scroll](https://www.npmjs.com/package/react-scroll) - Navigation and smooth scrolling
- **Email Service:** [EmailJS](https://www.emailjs.com) - Send emails from the browser
- **Linting:** ESLint - Code quality and consistency

## Project Structure

```
bizengine-website/
├── src/              # Source code directory
├── public/           # Static assets
├── index.html        # Entry HTML file
├── vite.config.js    # Vite configuration
├── package.json      # Dependencies and scripts
└── eslint.config.js  # ESLint configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bizengine-tech/Bizengine-website.git
cd Bizengine-website
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality and consistency:

```bash
npm run lint
```

## Features

- ⚡ **Fast Development** - Vite provides instant server start and blazingly fast HMR
- 🎨 **Modern Styling** - Tailwind CSS for utility-first, responsive design
- 🎬 **Smooth Animations** - Framer Motion for engaging interactions
- 📧 **Email Integration** - EmailJS for contact forms without backend
- 📱 **Responsive Design** - Mobile-first, works on all devices
- ♿ **Accessibility** - Built with accessibility best practices
- 🔍 **SEO Friendly** - Optimized for search engines

## Environment Variables

If you need to configure environment variables (e.g., for EmailJS), create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is part of the Bizengine portfolio. All rights reserved.

## Contact

For more information about Bizengine, visit our website or contact us through the portfolio site.

---

**Built with ❤️ by Bizengine Team**
