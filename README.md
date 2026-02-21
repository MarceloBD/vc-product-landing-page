# Super Cimed — Product Landing Page

A promotional landing page for the **Super Cimed** deodorant line, built with Next.js, React, Tailwind CSS, and Framer Motion. Features smooth scroll-triggered animations, responsive design, and a modern visual identity.

> **Live demo:** [vc-product-landing-page.vercel.app](https://vc-product-landing-page.vercel.app/)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Animated Hero** — floating product cans, geometric shapes, gradient text, and parallax mist blobs
- **Product Showcase** — interactive cards for each variant (Energy, Citrus, Wood, Acqua) with hover effects
- **Benefits Section** — feature grid with scroll-reveal animations
- **Ambassador Section** — influencer highlight with key stats
- **How to Use** — step-by-step usage guide
- **Marquee Banner** — infinite scrolling text banner
- **Responsive** — fully optimized for mobile, tablet, and desktop
- **Smooth Scroll** — anchor navigation with smooth scrolling
- **SEO Ready** — proper metadata, semantic HTML, and Open Graph tags

---

## Tech Stack

| Category       | Technology                                                  |
| -------------- | ----------------------------------------------------------- |
| **Framework**  | [Next.js 16](https://nextjs.org/) (App Router)             |
| **UI Library** | [React 19](https://react.dev/)                              |
| **Styling**    | [Tailwind CSS v4](https://tailwindcss.com/)                 |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/)          |
| **Language**   | [TypeScript 5](https://www.typescriptlang.org/)             |
| **Font**       | [Montserrat](https://fonts.google.com/specimen/Montserrat)  |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/vc-product-landing-page.git
cd vc-product-landing-page

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, animations, theme variables
│   ├── layout.tsx           # Root layout with metadata and fonts
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── Ambassador.tsx       # Influencer showcase section
│   ├── Banner.tsx           # Scrolling marquee banner
│   ├── Features.tsx         # Product feature grid
│   ├── Footer.tsx           # Site footer with links
│   ├── Header.tsx           # Sticky navigation header
│   ├── Hero.tsx             # Hero with floating products and effects
│   ├── HowToUse.tsx         # Step-by-step usage guide
│   ├── ProductVariants.tsx  # Product variant cards
│   ├── SprayDots.tsx        # Decorative spray dot pattern
│   └── WhyDeodorant.tsx     # Why use deodorant benefits section
├── data/
│   └── products.ts          # Product catalog (names, images, prices, links)
├── enums/
│   └── VariantType.ts       # Product variant enum
└── types/
    └── Product.ts           # Product type definition
```

---

## Customization

### Changing Products

Edit `src/data/products.ts` to modify product names, descriptions, images, prices, and purchase links. Each product follows the `Product` interface defined in `src/types/Product.ts`.

### Changing Colors

Each product variant has its own color scheme (`colorPrimary`, `colorSecondary`, `colorLight`) defined in the product data. Global theme colors and animations are in `src/app/globals.css`.

### Adding a New Variant

1. Add a new entry to the `VariantType` enum in `src/enums/VariantType.ts`
2. Add the product data to the `products` array in `src/data/products.ts`
3. The UI will automatically render the new variant

---

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

It also works with any platform that supports Next.js (Netlify, AWS Amplify, Docker, etc.).

---

## Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "Add my feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

Please make sure your code follows the existing patterns and passes linting:

```bash
npm run lint
```

---

## License

This project is licensed under the [MIT License](LICENSE).
