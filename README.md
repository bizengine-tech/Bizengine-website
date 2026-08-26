# BizEngine - Complete Online Business Solutions

![BizEngine](https://img.shields.io/badge/BizEngine-Portfolio%20Website-blue)

A modern, fully responsive portfolio website for BizEngine showcasing our expertise in Website Development, Digital Marketing, E-Commerce Setup, B2B Business Solutions, and Business Consulting.

## 🌐 Live Site

**BizEngine | Complete Online Business Solutions** - Website Development | Digital Marketing | E-Commerce Setup

## 📋 Overview

BizEngine is a professional portfolio website built to showcase comprehensive business solutions. The site features smooth navigation, engaging animations, contact forms, and a modern UI designed to convert visitors into clients.

### Key Features

- 🎨 **Modern & Responsive Design** - Mobile-first approach, works seamlessly on all devices
- ⚡ **High Performance** - Optimized with Vite for blazingly fast load times
- 🎬 **Smooth Animations** - Engaging interactions with Framer Motion
- 📧 **Contact Integration** - EmailJS integration for direct client communication
- 🔝 **Scroll-to-Top** - Smooth navigation with scroll-to-top button
- 💬 **WhatsApp Integration** - Direct WhatsApp contact button
- 🔐 **Privacy Policy** - Dedicated privacy policy page
- ♿ **Accessible** - Built with accessibility best practices

## 🛠 Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | 19.2.8 |
| **Vite** | Build Tool & Dev Server | 8.2.0 |
| **Tailwind CSS** | Styling Framework | 4.3.3 |
| **Framer Motion** | Animations | 12.43.0 |
| **EmailJS** | Email Service | 4.4.1 |
| **React Scroll** | Smooth Scrolling | 1.9.3 |
| **Lucide React** | Icon Library | 1.28.0 |
| **React Icons** | Additional Icons | 5.7.0 |
| **ESLint** | Code Quality | 10.8.0 |

## 📁 Project Structure

```
bizengine-website/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.jsx                 # Navigation bar
│   │   ├── home/
│   │   │   ├── Hero.jsx                   # Hero section
│   │   │   ├── About.jsx                  # About us section
│   │   │   ├── Services.jsx               # Services showcase
│   │   │   ├── WhyChoose.jsx              # Why choose us section
│   │   │   ├── Process.jsx                # Our process section
│   │   │   ├── Contact.jsx                # Contact form
│   │   │   └── Footer.jsx                 # Footer component
│   │   ├── PrivacyPolicy.jsx              # Privacy policy page
│   │   ├── ScrollToTopButton.jsx          # Scroll to top button
│   │   └── WhatsAppButton.jsx             # WhatsApp contact button
│   ├── constants/
│   │   └── company.js                     # Company information
│   ├── styles/
│   │   └── theme.js                       # Theme configuration
│   ├── assets/                            # Images and media
│   ├── App.jsx                            # Main app component
│   ├── main.jsx                           # Entry point
│   └── index.css                          # Global styles
├── public/
│   ├── favicon.svg                        # Favicon
│   └── icons.svg                          # SVG icons
├── index.html                             # HTML entry point
├── vite.config.js                         # Vite configuration
├── eslint.config.js                       # ESLint rules
├── package.json                           # Dependencies
└── README.md                              # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** - v16 or higher
- **npm** - v7 or higher (or yarn)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bizengine-tech/Bizengine-website.git
   cd Bizengine-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional):
   ```bash
   cp .env.example .env
   # Edit .env with your EmailJS credentials
   ```

### Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Create an optimized production build:

```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally before deployment:

```bash
npm run preview
```

### Code Quality

Run ESLint to check code quality:

```bash
npm run lint
```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎯 Page Sections

The website includes the following main sections:

- **Home (Hero)** - Eye-catching landing section with call-to-action
- **About** - Company information and mission
- **Services** - Showcase of services (Website Development, Digital Marketing, E-Commerce, B2B Solutions, Consulting)
- **Why Choose Us** - Key benefits and differentiators
- **Process** - Our methodology and workflow
- **Contact** - Contact form with EmailJS integration
- **Footer** - Links and social information
- **Privacy Policy** - Dedicated privacy page (`/privacy-policy`)

## 📧 Email Configuration

To enable the contact form, configure EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com)
2. Get your Service ID, Template ID, and Public Key
3. Add to your environment or contact form component

Example:
```javascript
import emailjs from '@emailjs/browser';

emailjs.init(VITE_EMAILJS_PUBLIC_KEY);

const response = await emailjs.send(
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  templateParams
);
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling with a responsive, utility-first approach. Custom styles are minimal and focused on animations and component-specific styling.

### Colors
- Primary Blue: Used for branding and CTAs
- Neutral Grays: For text and backgrounds
- Custom gradients: For visual interest

## 🔄 Component Architecture

- **Layout Components** - Reusable structural components (Navbar)
- **Page Components** - Full-page sections (Hero, About, Services, etc.)
- **Utility Components** - Helper components (ScrollToTopButton, WhatsAppButton)

## 🚢 Deployment

The site can be deployed to various platforms:

- **Vercel** - Recommended for Vite projects
- **Netlify** - Drop-in deployment with build optimization
- **GitHub Pages** - Static site hosting
- **AWS S3 + CloudFront** - Enterprise solution

### Deployment Steps (Vercel):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### EmailJS Not Working
- Verify API keys are correct
- Check template ID matches
- Ensure service is activated on EmailJS dashboard

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. Make your changes and commit:
   ```bash
   git commit -m 'Add amazing feature'
   ```

3. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```

4. Open a Pull Request with a clear description of changes

### Code Standards
- Follow ESLint rules
- Use meaningful variable names
- Comment complex logic
- Test responsive design on mobile

## 📄 License

All rights reserved. This project is proprietary to BizEngine.

## 📞 Support & Contact

- **Website:** https://github.com/bizengine-tech/Bizengine-website
- **Issues:** Report bugs on [GitHub Issues](https://github.com/bizengine-tech/Bizengine-website/issues)
- **Email:** [Contact via website form]
- **WhatsApp:** [Available on website]

## 👥 Team

**BizEngine Team** - Business Solutions & Web Development Experts

---

<div align="center">

**Built with ❤️ by BizEngine**

*Complete Online Business Solutions*

[![Website Development](https://img.shields.io/badge/Website%20Development-✓-brightgreen)](/)
[![Digital Marketing](https://img.shields.io/badge/Digital%20Marketing-✓-brightgreen)](/)
[![E--Commerce Setup](https://img.shields.io/badge/E--Commerce%20Setup-✓-brightgreen)](/)
[![B2B Solutions](https://img.shields.io/badge/B2B%20Solutions-✓-brightgreen)](/)
[![Business Consulting](https://img.shields.io/badge/Business%20Consulting-✓-brightgreen)](/)

</div>
