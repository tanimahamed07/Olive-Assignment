# Olive - Food Scanner App Landing Page

A modern, responsive landing page for the Olive Food Scanner App built with Next.js 16, React 19, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean and intuitive design with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Components**:
  - Animated product carousel in the hero section
  - Smooth transitions and hover effects
  - Dynamic product showcase
- **Performance Optimized**:
  - Next.js Image optimization
  - Framer Motion animations
  - Turbopack for faster builds
- **Accessibility**: WCAG compliant with proper alt texts and semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.2.4](https://nextjs.org/)
- **React**: 19.2.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: pnpm

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/tanimahamed07/Olive-Assignment.git
cd Olive-Assignment
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
olive-assessment/
├── public/
│   ├── fonts/          # Custom fonts directory
│   ├── image3.png      # Olive logo
│   ├── image4.png      # Scan animation
│   ├── navlogo.svg     # Navigation logo
│   └── product-*.png   # Product images
├── src/
│   ├── app/
│   │   ├── layout.jsx  # Root layout
│   │   ├── page.jsx    # Home page
│   │   └── globals.css # Global styles
│   └── components/
│       ├── Navbar.jsx      # Navigation component
│       ├── Banner.jsx      # Hero section with carousel
│       └── HowItWork.jsx   # How it works section
├── package.json
└── README.md
```

## 🎨 Components

### Navbar

- Responsive navigation bar
- Logo and navigation links
- Call-to-action button
- Mobile menu support

### Banner

- Hero section with animated product carousel
- Trust badges with user avatars
- Download CTA button
- Interactive phone mockup with product details
- Side preview cards with smooth transitions

### HowItWork

- Three-card layout explaining the app features
- Scan & Detect section
- Data Analysis with product carousel
- Actionable Insights with stacked product cards

## 🚀 Build & Deploy

### Build for production:

```bash
pnpm build
```

### Start production server:

```bash
pnpm start
```

### Deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tanimahamed07/Olive-Assignment)

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Key Features Implemented

1. **Product Carousel**: Smooth auto-rotating product showcase
2. **Framer Motion Animations**: Fluid transitions and micro-interactions
3. **Image Optimization**: Next.js Image component for optimal loading
4. **Mobile-First Design**: Responsive layout that works on all devices
5. **Performance**: Fast page loads with Turbopack

## 🔧 Configuration

### Tailwind CSS

Custom configuration in `tailwind.config.js` with extended colors and utilities.

### Next.js

- App Router (Next.js 16)
- Turbopack for development
- Image optimization enabled

## 📄 License

This project is created for assessment purposes.

## 👨‍💻 Developer

**Tanim Ahamed**

- GitHub: [@tanimahamed07](https://github.com/tanimahamed07)

## 🙏 Acknowledgments

- Design inspiration from [Olive App](https://www.oliveapp.com)
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ using Next.js and Tailwind CSS
