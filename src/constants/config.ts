type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Yusif Heydarov — Technical Team Lead",
    fullName: "Yusif Heydarov",
    email: "yusifheydarov475@gmail.com",
  },
  hero: {
    name: "Yusif Heydarov",
    p: [
      "Senior software engineer and technical team lead",
      "Python backend, system design, and cloud infrastructure",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Profile",
      h2: "Summary.",
      content: `Senior software engineer and technical team lead with 9+ years of
      experience in Python backend development using Django, Flask, and
      FastAPI. Builds REST APIs, microservices, and scalable systems on AWS with
      Docker, Kubernetes, Nginx, and CI/CD automation. Experienced in Celery
      async processing, React/Node.js integration, and mentoring engineers.
      Education: Bachelor's degree in Information Technology, National
      University of Singapore (2015-2019).`,
    },
    experience: {
      p: "Professional background",
      h2: "Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
