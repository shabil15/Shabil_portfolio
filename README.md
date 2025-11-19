# Mohammed Shabil - Personal Portfolio Website 🚀

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Mohammed_Shabil-0E1016?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-13.2.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?style=for-the-badge&logo=typescript)

**A modern, responsive, and animated portfolio website showcasing my journey as a Full Stack Developer**

[View Live Demo](https://shabil-portfolio.vercel.app/) • [Report Bug](https://github.com/shabil15/Shabil_portfolio/issues) • [Request Feature](https://github.com/shabil15/Shabil_portfolio/issues)

</div>

---

## 👨‍💻 About Me

Hi! I'm **Mohammed Shabil**, a passionate **Full Stack Developer** specializing in the **MERN stack** (MongoDB, Express.js, React.js, Node.js). I love building scalable web applications that solve real-world problems and create meaningful user experiences.

Currently working as a **Founding Full Stack Developer at Rentesy**, where I architect and develop property management solutions serving users across India. My expertise spans both frontend and backend technologies, with a focus on creating performant, user-friendly applications.

### 🎯 What I Do

- 🌐 Build full-stack web applications with modern JavaScript frameworks
- ⚡ Create responsive, accessible, and performant user interfaces
- 🔧 Design and implement RESTful APIs and microservices
- 📊 Work with both SQL and NoSQL databases
- ☁️ Deploy and manage applications on cloud platforms (AWS)
- 🎨 Focus on clean code, best practices, and scalable architecture

---

## ✨ Features

This portfolio website includes:

- 🎨 **Modern Design**: Clean, professional interface with smooth animations
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance Optimized**: Fast loading with Next.js and image optimization
- 🌙 **Custom Cursor**: Interactive blob cursor effect using Blobity
- 🎭 **Smooth Animations**: Page transitions with Framer Motion and GSAP
- 📧 **Contact Form**: Easy way to get in touch
- 💼 **Project Showcase**: Detailed presentation of my work
- 📄 **Experience Section**: Professional journey and skills
- 🎵 **About Section**: Personal interests and favorite music
- 📝 **Blog Section**: Thoughts and technical articles

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 13.2.3](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 3.2.7](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: 
  - [Framer Motion 10.6.1](https://www.framer.com/motion/) - React animation library
  - [GSAP 3.11.5](https://greensock.com/gsap/) - Professional-grade animation
- **Custom Cursor**: [Blobity 0.2.3](https://github.com/gmrchk/blobity) - Interactive cursor effects
- **Icons**: [Font Awesome 6.3.0](https://fontawesome.com/) - Icon library

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Formatting**: Prettier with Tailwind CSS plugin
- **Package Manager**: npm
- **Version Control**: Git & GitHub

### Deployment & Analytics
- **Hosting**: [Vercel](https://vercel.com/) - Optimized Next.js hosting
- **Analytics**: Vercel Analytics - Performance monitoring

---

## 📂 Project Structure

```
shabil-portfolio/
├── app/                          # Next.js 13 App Directory
│   ├── about-section/           # About me component
│   ├── animations/              # Animation components
│   │   ├── AnimatedBody.tsx
│   │   ├── AnimatedTitle.tsx
│   │   ├── AnimatedWords.tsx
│   │   └── PreLoader/
│   ├── blog-section/            # Blog posts
│   ├── contact-section/         # Contact form
│   ├── experience-section/      # Professional experience
│   │   ├── Experience.tsx
│   │   ├── ExperienceCard.tsx
│   │   └── experienceDetails.ts
│   ├── footer/                  # Footer component
│   ├── hero-section/            # Landing page hero
│   ├── navbar/                  # Navigation bar
│   ├── reviews-section/         # Testimonials
│   ├── work-section/            # Project showcase
│   │   ├── ProjectCard.tsx
│   │   └── projectDetails.ts
│   ├── fonts/                   # Custom fonts (Mona Sans)
│   ├── utils/                   # Utility functions
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── public/                      # Static assets
│   ├── projects/                # Project screenshots
│   └── songs/                   # Music album covers
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shabil15/Shabil_portfolio.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Shabil_portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | ^13.2.3 | React framework with SSR |
| react | ^18.2.0 | UI library |
| typescript | ^4.9 | Type safety |
| tailwindcss | ^3.2.7 | CSS framework |
| framer-motion | ^10.6.1 | Animations |
| gsap | ^3.11.5 | Advanced animations |
| blobity | ^0.2.3 | Custom cursor |
| @fortawesome/react-fontawesome | ^0.2.0 | Icons |

---

## 🎨 Customization

### Updating Personal Information

1. **Hero Section**: Edit `app/hero-section/Hero.tsx`
2. **About Section**: Edit `app/about-section/About.tsx`
3. **Experience**: Update `app/experience-section/experienceDetails.ts`
4. **Projects**: Update `app/work-section/projectDetails.ts`
5. **Contact Info**: Edit `app/contact-section/Contact.tsx`
6. **Metadata**: Update `app/layout.tsx` for SEO

### Adding New Projects

Edit `app/work-section/projectDetails.ts`:

```typescript
{
  id: 0,
  name: "Your Project Name",
  description: "Project description...",
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourusername/project",
  demo: "https://yourproject.com",
  image: require("../../public/projects/your-image.png"),
  available: true,
}
```

### Adding Experience

Edit `app/experience-section/experienceDetails.ts`:

```typescript
{
  id: 0,
  company: "Company Name",
  position: "Your Position",
  duration: "Jan 2024 - Present",
  location: "Location",
  description: "Your role description...",
  companyUrl: "https://company.com",
  technologies: ["Tech1", "Tech2", "Tech3"],
}
```

---

## 🎯 Featured Projects

### 1. **Rentesy** - Property Management Platform
- Full-stack property portfolio management system
- **Tech Stack**: Next.js, TypeScript, ElysiaJS, PostgreSQL, AWS
- **Features**: Rent collection, tenant portals, real-time dashboards
- [View Live →](https://www.rentesy.com/)

### 2. **Fitcall** - Fitness Training Platform
- Personalized fitness platform with video calls and real-time chat
- **Tech Stack**: React, Node.js, MongoDB, WebRTC, Socket.IO
- **Impact**: 40% load time reduction, 25% retention increase
- [View Live →](https://fitcall-beta.vercel.app/)

### 3. **Brand Kicks** - E-commerce Platform
- Full-featured shoe e-commerce with admin dashboard
- **Tech Stack**: JavaScript, Node.js, MongoDB, Docker, AWS
- **Features**: Payment integration, inventory management
- [View Live →](https://brandkicks-shop.onrender.com/)

---

## 📈 Performance

- ⚡ **Lighthouse Score**: 95+ on all metrics
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Optimized**: Fully responsive design
- ♿ **Accessibility**: WCAG 2.1 compliant
- 🎨 **Smooth Animations**: 60 FPS animations

---

## 🤝 Contributing & Usage

This portfolio is **open source** and available for inspiration and learning. Feel free to:

✅ Use the code structure and components for your own portfolio  
✅ Learn from the implementation of animations and layouts  
✅ Adapt the design to fit your personal brand  

### Guidelines

❌ **Do NOT** copy the content (projects, experience, about section)  
❌ **Do NOT** use my personal information or images  
✅ **Do** credit the original design by Victor Williams  
✅ **Do** make it your own with your unique content and style  

If you use significant portions of this design, please provide credit and link back to this repository.

---

## 🙏 Credits & Acknowledgments

- **Original Design**: [Victor Williams](https://github.com/victorcodess/folio-v1) - Thank you for the amazing design inspiration!
- **Fonts**: [Mona Sans](https://github.com/mona-sans) by GitHub
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/)

---

## 📧 Contact

I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.

- **Email**: [mohammedshabiltk0@gmail.com](mailto:mohammedshabil15@gmail.com)
- **LinkedIn**: [Mohammed Shabil](https://linkedin.com/in/shabildev)
- **GitHub**: [@shabil15](https://github.com/shabil15)
- **Portfolio**: [shabil-portfolio.vercel.app](https://shabil-portfolio.vercel.app/)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Show Your Support

If you found this portfolio inspiring or helpful, please consider:

- ⭐ **Starring** this repository
- 🐛 **Reporting** any issues you find
- 💡 **Suggesting** new features or improvements
- 🔄 **Sharing** with others who might find it useful

---

<div align="center">

**Made with ❤️ by Mohammed Shabil**

*Building the web, one commit at a time* 🚀

</div>
