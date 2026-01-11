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
    title: "Yusif Heydarov — Senior Software Engineer",
    fullName: "Yusif Heydarov",
    email: "yusifheydarov475@gmail.com",
  },
  hero: {
    name: "Yusif Heydarov",
    p: [
      "Senior software engineer focused on Python backend systems",
      "Cloud-native microservices, ML pipelines, and DevOps",
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
      content: `Senior Software Engineer with 10+ years of experience building
      scalable, cloud-native backend systems using Python. Strong expertise in
      RESTful APIs and microservices with Django and FastAPI, supported by
      PostgreSQL, Redis, and asynchronous processing. Experienced in deploying
      and operating production systems with Docker, Kubernetes, AWS, and CI/CD
      pipelines, with a focus on backend architecture, performance, and
      reliability.`,
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
