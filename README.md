# Satish Marathe - Principal Software Architect Portfolio

A high-performance, interactive portfolio designed specifically for Software Architects, Principal Engineers, and Technical Leaders. This repository serves as a digital architectural ledger, showcasing 15+ years of systems design, professional experience, and Gen AI research.

## 🏗️ Architectural Overview

This portfolio is built with a focus on **Developer Experience (DX)** and **clean architectural patterns**, utilizing a tech stack that reflects a modern frontend engineering mindset:

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) for sub-second hot module replacement.
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) for utility-first responsive design.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for polished, high-density micro-interactions.
- **Icons**: [Lucide React](https://lucide.dev/) for a consistent, professional design language.
- **Markdown**: [React Markdown](https://github.com/remarkjs/react-markdown) for dynamic ledger/manifesto rendering.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/smarathe2024/portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📦 Deployment

This portfolio is configured for deployment to **https://satish-marathe.github.io/**.

1. Ensure `vite.config.ts` has the root base path:
   ```ts
   export default defineConfig({
     base: '/', // Required for satish-marathe.github.io
     // ...
   });
   ```

2. Run the deployment:
   ```bash
   npm run build
   # If using gh-pages tool:
   npm run deploy
   ```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*“Simplicity is the ultimate sophistication in architectural design.” — Designed with precision by Satish Marathe.*
