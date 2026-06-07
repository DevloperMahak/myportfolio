import reusebook from "../assets/images/Reusebook_logo.png";
import askmytutor from "../assets/images/Askmytutor.png";
import fuelease from "../assets/images/DAWS_logo_design.png";

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

    image: fuelease,

    description:
      "Unified platform for software development teams that integrates multiple tools into a single dashboard.It is a one Central Workspace for All Stages of App/Web Development",

    technologies: ["Flutter", "Node.js", "MongoDB"],

    github: "https://github.com/DevloperMahak/DAWS",

    live: "#",
  },
];

export default projects;
