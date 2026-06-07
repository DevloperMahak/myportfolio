import {
  FaGlobe,
  FaMobileAlt,
  FaPalette,
  FaServer,
  FaRobot,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: FaGlobe,
    description:
      "Modern, responsive and high-performance web applications built with React.js, Node.js and MongoDB.",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },

  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    description:
      "Cross-platform mobile applications with beautiful UI and smooth user experience.",
    technologies: ["Flutter", "React Native", "Android", "iOS"],
  },

  {
    title: "UI / UX Design",
    icon: FaPalette,
    description:
      "Clean, intuitive and visually appealing user interfaces focused on usability.",
    technologies: ["Figma", "Wireframes", "Prototypes", "Design Systems"],
  },

  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Scalable backend architectures, APIs, authentication and database solutions.",
    technologies: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },

  {
    title: "AI Integration",
    icon: FaRobot,
    description:
      "AI-powered applications including chatbots, OCR systems, RAG and intelligent assistants.",
    technologies: ["RAG", "OCR", "GROQ", "AI Chatbots"],
  },
];

export default services;
