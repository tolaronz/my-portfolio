import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
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
  nodejs,
  mongodb,
  python,
  fastapi,
  postgres,
  aws,
  docker,
  starbucks,
  tesla,
  shopify,
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
    id: "tech",
    title: "Skills",
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
    title: "Backend Architecture & System Design",
    icon: mobile,
  },
  {
    title: "ML Systems & Data Pipelines",
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
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
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
];

const experiences: TExperience[] = [
  {
    title: "Technical Team Lead",
    companyName: "Singsys Pte. Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "09/2022 - 04/2025",
    points: [
      "Led a cross-functional team delivering backend systems and ML solutions.",
      "Owned architecture, CI/CD, AWS infrastructure, Docker/Kubernetes, and Nginx setup.",
      "Designed and deployed ML models with data pipelines and inference optimization.",
      "Translated business requirements into scalable software and ML systems.",
      "Mentored engineers, contributed to hiring, and set team best practices.",
    ],
  },
  {
    title: "Senior Full-Stack Engineer",
    companyName: "Singsys Pte. Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "08/2020 - 09/2022",
    points: [
      "Built scalable backend systems, microservices, REST APIs, and ML services.",
      "Developed ML models with preprocessing, feature engineering, and serving pipelines.",
      "Managed AWS deployments, Nginx, and Docker/Kubernetes orchestration.",
      "Maintained CI/CD pipelines and automated testing for software and ML models.",
      "Mentored juniors and conducted code and ML model reviews.",
    ],
  },
  {
    title: "Junior Python Developer",
    companyName: "Singsys Pte. Ltd",
    icon: shopify,
    iconBg: "#383E56",
    date: "07/2019 - 08/2020",
    points: [
      "Developed backend services with Flask and FastAPI, plus React/JavaScript frontends.",
      "Built REST APIs, integrated Celery for async tasks, and supported databases.",
      "Participated in code reviews, debugging, and feature delivery.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

export { services, technologies, experiences, testimonials };
