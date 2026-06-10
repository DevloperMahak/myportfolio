import reusebook from "../assets/images/Reusebook_logo.png";
import askmytutor from "../assets/images/Askmytutor.png";
import DAWS from "../assets/images/DAWS_logo_design.png";

const projects = [
  {
    id: 1,
    title: "ReuseBook",
    image: reusebook,
    featured: true,

    description:
      "A platform that enables students and shopkeepers to buy and sell old books, promoting book recycling and sustainability.",

    technologies: ["Flutter", "Node.js", "MongoDB", "Express.js"],

    github: "https://github.com/DevloperMahak/Reusebook",
    live: "https://reusebook-frontend.onrender.com",
  },

  {
    id: 2,

    title: "AskMyTutor",

    image: askmytutor,

    description:
      "Real-time AI-powered tutoring app where students can solve doubts using AI through voice, image, and text input",

    technologies: ["Flutter", "Node.js", "GROQ", "OCR", "MongoDB"],

    github: "https://github.com/DevloperMahak/AI_Project",

    live: "https://askmytutor.onrender.com",
  },

  {
    id: 3,

    title: "DAWS (Developer AI Workspace System)",

    image: DAWS,

    description:
      "DAWS is a LangGraph + LangChain powered Multi-Agent AI SDLC Automation System with external AI integrations (Groq, OpenAI, Gemini)",

    technologies: ["React js", "Node.js", "MySQL", "LangGraph", "LangChain"],

    github: "https://github.com/DevloperMahak/DAWS",

    live: "#",
  },
];

export default projects;
