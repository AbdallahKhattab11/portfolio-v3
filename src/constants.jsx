import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

import estatein from "/src/assets/projectsData/Estatein/estatein-real-state.png";
import modernWebsite from "/src/assets/projectsData/Moder-website/modern-website-reacttailwind.png";
import finexo from "/src/assets/projectsData/Finexo/finexo-img.png";
import cyborg from "/src/assets/projectsData/Cyborg/cyborg-img.png";
import multiStepForm from "/src/assets/projectsData/Multi-Step-Form/Multi-step-form-img.png";
import productListWithCart from "/src/assets/projectsData/Product-list-with-cart/Product-list-with-cart-img.png";


export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Estatein (Real Estate)",
    description:
      "A modern real estate web application that allows users to browse property listings, view detailed information, and explore available units through a clean and responsive UI.",
    tags: ["React", "React Router", "Tailwind", "Swiper.js"],
    imageUrl: estatein,
    githubUrl: "https://github.com/AbdallahKhattab11/EStatein-project",
    liveUrl: "https://estatein-real-state.netlify.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Website",
    description:
      "A modern website template built with React and Tailwind CSS, showcasing a clean and responsive design.",
    tags: ["React", "Tailwind", "Framer Motion", "Swiper.js"],
    imageUrl: modernWebsite,
    githubUrl: "https://github.com/AbdallahKhattab11/Modern-website",
    liveUrl: "https://modern-website-reacttailwind.netlify.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Finexo",
    description:
      "Finexo - Crypto Trading Platform With React And Modern Technologies.",
    tags: ["React", "Redux Toolkit", "Stripe", "Node.js"],
    imageUrl: finexo,
    githubUrl: "https://github.com/AbdallahKhattab11/Finexo_template",
    liveUrl: "https://finexo-react-tailwind.netlify.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Cyborg",
    description:
      "Cyborg - Your destination for popular games, Browse our gaming library.",
    tags: ["HTML", "CSS", "JavaScript", "Swiper.js"],
    imageUrl: cyborg,
    githubUrl: "https://github.com/AbdallahKhattab11/Cyborg-Project",
    liveUrl: "https://cyporg-project.netlify.app/",
    featured: true,
  },
  {
    id: 5,
    title: "Multi Step Form (Frontend Mentor)",
    description:
      "A clean and responsive multi-step form with field validation, ideal for guiding users through complex inputs.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: multiStepForm,
    githubUrl: "https://github.com/AbdallahKhattab11/Multi-step-form",
    liveUrl: "https://abdallahkhattab11.github.io/Multi-step-form/",
    featured: true,
  },
  {
    id: 6,
    title: "Product List With Cart (Frontend Mentor)",
    description:
      "A dynamic product list with an interactive cart system that updates quantities and totals in real-time.",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
    imageUrl: productListWithCart,
    githubUrl: "https://github.com/AbdallahKhattab11/Product-list-with-cart",
    liveUrl: "https://abdallahkhattab11.github.io/Product-list-with-cart/",
    featured: true,
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Frontend Engineer",
    // company: "TechNova Solutions",
    period: "2022 - Present",
    description:
      "Developed and maintained interactive frontend features for client projects. Focused on building responsive, modern UI with React, implementing smooth animations, and improving overall user experience.",
    technologies: [
      "React",
      "React Router",
      "Framer Motion",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    // company: "Creative Pulse Agency",
    period: "2021 - 2022",
    description:
      "Built and maintained simple interactive websites and landing pages. Collaborated with designers to implement responsive UIs while gaining hands-on experience with modern frontend workflows.",
    technologies: ["HTML/CSS", "JavaScript", "Tailwind"],
  },
  {
    id: 3,
    role: "Junior Frontend Developer",
    // company: "StartUp Inc.",
    period: "2020 - 2021",
    description:
      "Started learning web development by building simple landing pages and small internal tools. Gained hands-on experience applying React for practical projects while gradually improving skills.",
    technologies: ["HTML/CSS", "JavaScript"],
  },
];

export const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    url: "https://github.com/AbdallahKhattab11",
    icon: <FiGithub size={20} />,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/abdallah-khattab11/",
    icon: <FiLinkedin size={20} />,
  },
  {
    platform: "X",
    url: "https://x.com/Abdallah_kh_1",
    icon: <FaXTwitter size={20} />,
  },
];

export const SKILLS = [
  "React",
  "JavaScript",
  "Vite",
  "Tailwind CSS",
  "Framer Motion",
  "React Router",
  "CSS Modules",
  "Git & GitHub",
  "Responsive Design",
  "Performance Optimization",
  "REST APIs",
  "Figma",
  "Swiper.js",
];
