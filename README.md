# Ahmed El-Baghdady - Portfolio

A high-performance, responsive portfolio website showcasing graphic design and art direction work. Built with Next.js 15, TypeScript, and Framer Motion.

![Portfolio Preview](./public/portfolio-preview.jpg)

## 🚀 Features

- **High Performance**: Optimized for Core Web Vitals with 191kB first load
- **Responsive Design**: Mobile-first approach with seamless device adaptation
- **Smooth Animations**: Framer Motion powered interactions and transitions
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **SEO Optimized**: Complete metadata and social media optimization
- **Progressive Loading**: Smart lazy loading and code splitting
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Framer Motion with performance optimizations
- **Images**: Next.js Image optimization with WebP/AVIF
- **Deployment**: Optimized for Vercel/Netlify

## 📱 Responsive Design

- **Mobile**: Optimized touch interactions and layout
- **Tablet**: Adaptive design with proper breakpoints
- **Desktop**: Full-featured experience with advanced animations
- **Smart Intro**: Desktop-only fullscreen intro, mobile users go directly to content

## 🎨 Project Sections

1. **Hero Section**: Animated introduction with professional branding
2. **Social Media Designs**: Showcase of social media design work
3. **Zakuza Cinematic Gallery**: 3D carousel gallery for branding project
4. **Brand Projects**: Zambo, Mondy, Skyforce, Alpha showcases
5. **Brezel Journey**: Interactive brand story presentation
6. **Palm Collections**: Product design showcase
7. **Client Marquee**: Animated client logos display
8. **About Section**: Professional background and contact

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmed-elbaghdady/designer-portfolio-nextjs-proper.git
   cd designer-portfolio-nextjs-proper
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm run start
```

### Bundle Analysis

```bash
npm run analyze
```

### Type Checking

```bash
npm run type-check
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (optional)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
```

### Customization

1. **Update Personal Information**
   - Edit `src/data/personalInfo.ts`
   - Replace images in `public/` directory
   - Update metadata in `src/app/layout.tsx`

2. **Modify Projects**
   - Update project data in `src/data/projects.ts`
   - Add project images to `public/` folders
   - Customize project components in `src/components/`

3. **Styling**
   - Modify `tailwind.config.js` for design system
   - Update global styles in `src/app/globals.css`
   - Customize animations in component files

## 📊 Performance

### Core Web Vitals
- **FCP**: ~1.2s (Excellent)
- **LCP**: ~1.8s (Good)
- **CLS**: 0.00 (Excellent)
- **INP**: <200ms (Good)

### Bundle Size
- **First Load JS**: 191 kB
- **Main Bundle**: 49.7 kB
- **Shared Chunks**: 141 kB

### Optimizations
- Image optimization with Next.js Image
- Code splitting with dynamic imports
- Lazy loading for non-critical components
- Service worker for caching
- Optimized fonts and assets

## 🎯 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: ES2017+, CSS Grid, Flexbox, WebP images

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── common/           # Reusable components
│   ├── enhanced/         # Complex feature components
│   └── social-media-panels/ # Project showcases
├── data/                 # Static data and configurations
├── hooks/                # Custom React hooks
├── services/             # Business logic and APIs
├── styles/               # Additional stylesheets
└── utils/                # Utility functions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ahmed El-Baghdady**
- Portfolio: [ahmed-elbaghdady.com](https://ahmed-elbaghdady.com)
- LinkedIn: [Ahmed El-Baghdady](https://linkedin.com/in/ahmed-elbaghdady)
- Email: contact@ahmed-elbaghdady.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Performance optimizations based on Core Web Vitals
- Accessibility guidelines from WCAG 2.1
- Animation patterns from Framer Motion community

## 📈 Roadmap

- [ ] Add dark/light theme toggle
- [ ] Implement contact form with EmailJS
- [ ] Add blog section with MDX
- [ ] Integrate CMS for easy content management
- [ ] Add more interactive animations
- [ ] Implement PWA features

---

**Built with ❤️ using Next.js and modern web technologies**