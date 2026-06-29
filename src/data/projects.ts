export interface ProjectEntry {
  number: string;
  title: string;
  slug: string;
  image: string;
  tagline: string;
  category: string;
  background: string;
  solution: string;
  about: string;
  tech: string[];
  github: string;
  live?: string;
}

export const projects: ProjectEntry[] = [
  {
    number: "01",
    title: "Phishing Email Detection",
    slug: "phishing-detection",
    image: "/projects/phishing.png",
    tagline:
      "A dual-branch neural network that detects phishing emails by fusing text analysis with emotion recognition.",
    category: "ML Research",
    background:
      "Phishing detection models of the time relied solely on text features, which caused false positives that flagged legitimate emails as threats and eroded user trust. The goal was to build a more accurate classifier by introducing emotion signals as a complementary input alongside textual analysis.",
    solution:
      "DistilBERT was fine-tuned on 40,000 email samples to extract six distinct emotion labels, then combined with a text-based LSTM branch in a dual-branch architecture that fuses both representations before final classification. Evaluated on 5,800 emails, the model achieved 98% accuracy and improved precision by 0.03 over the text-only baseline, with the fine-tuned model published publicly on HuggingFace Hub.",
    about:
      "Phishing detection models of the time relied solely on text features, which caused false positives that flagged legitimate emails as threats and eroded user trust. The goal was to build a more accurate classifier by introducing emotion signals as a complementary input alongside textual analysis. DistilBERT was fine-tuned on 40,000 email samples to extract six distinct emotion labels, then combined with a text-based LSTM branch in a dual-branch architecture that fuses both representations before final classification. Evaluated on 5,800 emails, the model achieved 98% accuracy and improved precision by 0.03 over the text-only baseline, with the fine-tuned model published publicly on HuggingFace Hub.",
    tech: ["Python", "PyTorch", "HuggingFace"],
    github: "https://github.com/Muauli",
  },
  {
    number: "02",
    title: "FAQ Recruitment Chatbot",
    slug: "faq-chatbot",
    image: "/projects/faq-chatbot.png",
    tagline:
      "An automated chatbot that handles repetitive recruitment questions without any human intervention.",
    category: "Automation",
    background:
      "The recruitment team at Telkom Indonesia was spending significant time answering the same FAQ queries from candidates repeatedly, consuming HR bandwidth that could be redirected to higher-value work. The task was to fully automate these responses end-to-end using a no-code workflow engine with zero manual touchpoints.",
    solution:
      "A webhook-triggered pipeline was built in n8n that routes incoming questions through structured response logic and returns instant, consistent answers to candidates in real time. The result was a fully automated FAQ handler that eliminated manual response time for common recruitment queries, backed by a curated knowledge base of 40 QA pairs to ensure accuracy.",
    about:
      "The recruitment team at Telkom Indonesia was spending significant time answering the same FAQ queries from candidates repeatedly, consuming HR bandwidth that could be redirected to higher-value work. The task was to fully automate these responses end-to-end using a no-code workflow engine with zero manual touchpoints. A webhook-triggered pipeline was built in n8n that routes incoming questions through structured response logic and returns instant, consistent answers to candidates in real time. The result was a fully automated FAQ handler that eliminated manual response time for common recruitment queries, backed by a curated knowledge base of 40 QA pairs to ensure accuracy.",
    tech: ["n8n", "Python", "Ollama"],
    github: "https://github.com/Muauli",
  },
  {
    number: "03",
    title: "PeerTalk Chat",
    slug: "peertalk",
    image: "/projects/peertalk.png",
    tagline:
      "A full-stack chat platform connecting users with counselors through anonymous and registered conversation channels.",
    category: "Full Stack",
    background:
      "Many individuals seeking mental health support hesitate to seek help due to fear of being identified, creating a barrier between those in need and qualified counselors. The task was to design and build a platform that supports both anonymous and registered chat, while maintaining clear role separation between regular users and counselors.",
    solution:
      "A full-stack application was built using Next.js and TypeScript with a hybrid authentication system combining NextAuth.js for session and JWT-based role management and Supabase middleware for dynamic route protection. Prisma ORM handled the database schema with support for both identified and anonymous message threads, and the UI was built with shadcn/ui and Radix UI for accessible, responsive components. The result is a dual-channel chat platform where user identity is protected by default, counselor and user dashboards adapt dynamically based on role, and all authentication flows are secured end-to-end.",
    about:
      "Many individuals seeking mental health support hesitate to seek help due to fear of being identified, creating a barrier between those in need and qualified counselors. The task was to design and build a platform that supports both anonymous and registered chat, while maintaining clear role separation between regular users and counselors. A full-stack application was built using Next.js and TypeScript with a hybrid authentication system combining NextAuth.js for session and JWT-based role management and Supabase middleware for dynamic route protection. Prisma ORM handled the database schema with support for both identified and anonymous message threads, and the UI was built with shadcn/ui and Radix UI for accessible, responsive components. The result is a dual-channel chat platform where user identity is protected by default, counselor and user dashboards adapt dynamically based on role, and all authentication flows are secured end-to-end.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/Muauli",
  },
  {
    number: "04",
    title: "Jaka No Code",
    slug: "jaka-nocode",
    image: "/projects/jaka-nocode.png",
    tagline:
      "The backend engine powering a no-code website builder that lets users assemble full pages without writing any code.",
    category: "Backend",
    background:
      "Building a no-code website builder requires a backend capable of handling highly dynamic, nested page structures that change based on real-time drag-and-drop actions from the frontend. The task was to design the entire data model and REST API layer that would power component assembly, template loading, and user-specific page storage.",
    solution:
      "A PostgreSQL schema was designed to represent the hierarchical relationship between users, pages, sections, and individual elements, with Django REST Framework providing the API endpoints for create, read, update, and delete operations on each layer. JWT-based authentication protected all modification endpoints so that only the authenticated owner of a page could alter its structure. The result was a robust backend foundation that enabled the frontend team to build a fully functional drag-and-drop interface on top of a well-structured, secure, and scalable API.",
    about:
      "Building a no-code website builder requires a backend capable of handling highly dynamic, nested page structures that change based on real-time drag-and-drop actions from the frontend. The task was to design the entire data model and REST API layer that would power component assembly, template loading, and user-specific page storage. A PostgreSQL schema was designed to represent the hierarchical relationship between users, pages, sections, and individual elements, with Django REST Framework providing the API endpoints for create, read, update, and delete operations on each layer. JWT-based authentication protected all modification endpoints so that only the authenticated owner of a page could alter its structure. The result was a robust backend foundation that enabled the frontend team to build a fully functional drag-and-drop interface on top of a well-structured, secure, and scalable API.",
    tech: ["Python", "Django", "PostgreSQL"],
    github: "https://github.com/Muauli",
  },
  {
    number: "05",
    title: "Portfolio Website",
    slug: "portfolio",
    image: "/projects/portofolio.png",
    tagline:
      "A scroll-driven interactive portfolio built with WebGL, spring physics, and layered motion design.",
    category: "Frontend",
    background:
      "Standing out among hundreds of developer portfolios requires more than clean design; it requires an experience that feels alive and responds to the person viewing it. The goal was to build a portfolio that demonstrates both engineering depth and design sensibility through immersive, scroll-driven interactions without sacrificing performance or readability.",
    solution:
      "A Three.js wave background with spring physics and mouse-reactive ripple effects was built as a persistent 3D layer behind all content, while GSAP ScrollTrigger tied section reveals and parallax movements directly to scroll position for organic, reversible animations. Lenis smooth scroll was integrated with the GSAP ticker to ensure consistent frame pacing across all devices, and Framer Motion handled component-level hover states and entrance transitions throughout. The result is a production-deployed portfolio that loads fast, animates at 60fps, and creates a first impression strong enough to be remembered.",
    about:
      "Standing out among hundreds of developer portfolios requires more than clean design; it requires an experience that feels alive and responds to the person viewing it. The goal was to build a portfolio that demonstrates both engineering depth and design sensibility through immersive, scroll-driven interactions without sacrificing performance or readability. A Three.js wave background with spring physics and mouse-reactive ripple effects was built as a persistent 3D layer behind all content, while GSAP ScrollTrigger tied section reveals and parallax movements directly to scroll position for organic, reversible animations. Lenis smooth scroll was integrated with the GSAP ticker to ensure consistent frame pacing across all devices, and Framer Motion handled component-level hover states and entrance transitions throughout. The result is a production-deployed portfolio that loads fast, animates at 60fps, and creates a first impression strong enough to be remembered.",
    tech: ["Next.js", "TypeScript", "JavaScript", "React"],
    github: "https://github.com/Muauli",
  },
  {
    number: "06",
    title: "Quiz App",
    slug: "quiz-app",
    image: "/projects/quiz.png",
    tagline:
      "An interactive quiz application powered by generative AI that produces unique questions dynamically every session.",
    category: "AI Application",
    background:
      "Static quiz apps repeat the same questions across sessions, making them ineffective for genuine learning and engagement over time. The task was to build a quiz platform where questions are generated fresh for every session based on the topic and difficulty level chosen by the user.",
    solution:
      "A React and TypeScript frontend was built with a clean, focused UI connected to a generative AI API that constructs unique, contextually accurate questions on demand without any pre-written question bank. The result is a quiz experience that never repeats itself, adapts to any subject the user selects, and scales to any topic area without requiring manual content creation.",
    about:
      "Static quiz apps repeat the same questions across sessions, making them ineffective for genuine learning and engagement over time. The task was to build a quiz platform where questions are generated fresh for every session based on the topic and difficulty level chosen by the user. A React and TypeScript frontend was built with a clean, focused UI connected to a generative AI API that constructs unique, contextually accurate questions on demand without any pre-written question bank. The result is a quiz experience that never repeats itself, adapts to any subject the user selects, and scales to any topic area without requiring manual content creation.",
    tech: ["React", "TypeScript", "Next.js"],
    github: "https://github.com/Muauli",
  },
];
