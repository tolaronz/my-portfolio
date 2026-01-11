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
  flask,
  ml,
  postgres,
  aws,
  docker,
  starbucks,
  tesla,
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
    title: "Senior Software Engineer",
    icon: web,
  },
  {
    title: "Backend Architecture & Microservices",
    icon: mobile,
  },
  {
    title: "ML Pipelines & Inference APIs",
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
    name: "Flask",
    icon: flask,
  },
  {
    name: "ML",
    icon: ml,
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
    title: "Senior Software Engineer",
    companyName: "Poolside",
    icon: starbucks,
    iconBg: "#383E56",
    date: "10/2020 - 11/2025",
    points: [
      "Designed and operated scalable backend systems and microservices using Python, Django, and FastAPI.",
      "Built and deployed ML pipelines and inference APIs for real-time and batch predictions.",
      "Integrated ML workloads into backend services with asynchronous processing and data pipelines.",
      "Optimized database performance and system reliability for high-traffic, data-intensive applications.",
      "Deployed backend and ML services using Docker, Kubernetes, and AWS with CI/CD workflows.",
      "Provided technical leadership through code reviews, architecture contributions, and mentoring.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "Singsys Pte. Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "10/2015 - 08/2020",
    points: [
      "Built and maintained production backend services and RESTful APIs using Python (Django, FastAPI).",
      "Designed and optimized PostgreSQL schemas and queries for data-driven applications.",
      "Implemented asynchronous processing with Celery and Redis for background jobs.",
      "Integrated third-party services with secure authentication, authorization, and data validation.",
      "Containerized services with Docker and supported Linux-based deployments.",
      "Collaborated with frontend and product teams to deliver production-ready backend features.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

export { services, technologies, experiences, testimonials };
