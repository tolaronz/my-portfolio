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
      "Python backend, ML systems, and cloud infrastructure · Baku, Azerbaijan",
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
      content: `Senior software engineer and technical team lead with 10+ years
      of experience in Python backend development using Django, Flask, and
      FastAPI, building REST APIs, microservices, and deploying scalable systems
      on AWS, Docker, Kubernetes, and Nginx. Skilled in designing and deploying
      ML models with TensorFlow, PyTorch, and scikit-learn, CI/CD automation,
      Celery tasks, and full-stack integration with React/Node.js. Proven track
      record in leading teams, mentoring engineers, and delivering high-performance,
      production-ready software and ML solutions.`,
    },
    experience: {
      p: "Professional background",
      h2: "Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
  },
};
