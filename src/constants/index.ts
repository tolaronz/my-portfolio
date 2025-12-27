import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  django,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  html,
  css,
  python,
  fastapi,
  postgres,
  aws,
  git,
  docker,
  flask,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Technical Team Lead",
    icon: web,
  },
  {
    title: "Backend Architecture & APIs",
    icon: mobile,
  },
  {
    title: "Full-Stack Integration (React/Node.js)",
    icon: backend,
  },
  {
    title: "Cloud & DevOps (AWS, Docker, K8s)",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Technical Team Lead",
    companyName: "Singsys Pte. Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "09/2022 - 04/2025",
    points: [
      "Led a cross-functional engineering team delivering mission-critical backend systems.",
      "Owned backend architecture, CI/CD pipelines, AWS infrastructure, Docker/Kubernetes, and Nginx configuration.",
      "Ensured high-performance, secure, and reliable production systems.",
      "Partnered with stakeholders to translate business requirements into scalable solutions.",
      "Mentored engineers, contributed to hiring, and established team best practices.",
    ],
  },
  {
    title: "Senior Full-Stack Engineer",
    companyName: "Singsys Pte. Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "08/2020 - 09/2022",
    points: [
      "Designed and implemented scalable backend systems, microservices, and REST APIs.",
      "Integrated Celery for asynchronous tasks and connected frontend with React/Node.js.",
      "Managed deployments on AWS, configured Nginx, and orchestrated Docker/Kubernetes.",
      "Built and maintained CI/CD pipelines and automated testing processes.",
      "Mentored junior engineers and conducted technical code reviews.",
    ],
  },
  {
    title: "Junior Python Developer",
    companyName: "Singsys Pte. Ltd",
    icon: shopify,
    iconBg: "#383E56",
    date: "07/2019 - 08/2020",
    points: [
      "Developed backend services in Python and frontend components with React/JavaScript.",
      "Built and consumed REST APIs, supported databases, and assisted in CI/CD deployments.",
      "Participated in code reviews, debugging, and feature delivery.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
