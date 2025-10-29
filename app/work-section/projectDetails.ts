export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  // {
  //   id: 0,
  //   name: "E-Commerce Platform",
  //   description:
  //     "Full-stack e-commerce application built with MERN stack, featuring user authentication, product management, shopping cart, and payment integration with Stripe.",
  //   technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
  //   github: "https://github.com/mohammedshabil",
  //   demo: "",
  //   image: require(".//../../public/projects/odunsi.png"),
  //   available: true,
  // },
  {
    id: 1,
    name: "Rentesy",
    description:
      "Architected and built a property management platform for managers, owners, and vendors across India, featuring rent collection, maintenance tracking, financial reporting, tenant portals, and secure payment integration.",
    technologies: ["Next.js","React", "Node.js", "PostgreSQL"],
    github: "",
    demo: "https://www.rentesy.com/",
    image: require(".//../../public/projects/interlock.png"),
    available: true,
  },
  {
    id: 2,
    name: "FitCall",
    description:
      "Built a fitness platform with Clean Architecture, Redux, WebRTC video calls, real-time chat, OAuth, Stripe payments, and optimized performance—improving load time and user retention.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
    github: "https://github.com/shabil15/backend-fitcall",
    demo: "https://fitcall-beta.vercel.app/",
    image: require(".//../../public/projects/synthetix-flip.png"),
    available: true,
  },
  {
    id: 3,
    name: "Brand Kicks",
    description:
      "Developed an e-commerce shoe platform with secure login, admin dashboard, product management, order tracking, inventory control, Razorpay payments, and Docker deployment on AWS for scalability.",
    technologies: ["ejs","express.js", "MongoDB", "Node.js"],
    github: "https://github.com/shabil15/Brand-Kicks",
    demo: "https://brandkicks-shop.onrender.com/",
    image: require(".//../../public/projects/propellent-new.png"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "Weather Forecast App",
  //   description:
  //     "A responsive weather application that provides real-time weather data, 5-day forecasts, and location-based weather information using OpenWeather API.",
  //   technologies: ["React", "REST API", "Chart.js", "CSS"],
  //   github: "https://github.com/mohammedshabil",
  //   demo: "",
  //   image: require(".//../../public/projects/flixify.png"),
  //   available: true,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
