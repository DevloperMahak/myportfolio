import { motion } from "framer-motion";

import {
  FaReact,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaPalette,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";

const skills = [
  {
    title: "Frontend Development",
    icon: <FaReact />,
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },

  {
    title: "Mobile Development",
    icon: <FaMobileAlt />,
    technologies: ["Flutter", "React Native", "Dart"],
  },

  {
    title: "Backend Development",
    icon: <FaServer />,
    technologies: ["Node.js", "Express.js", "REST APIs"],
  },

  {
    title: "Database",
    icon: <FaDatabase />,
    technologies: ["MongoDB", "Mongoose", "MySQL"],
  },

  {
    title: "UI / UX Design",
    icon: <FaPalette />,
    technologies: ["Figma", "Wireframing", "Prototyping"],
  },

  {
    title: "AI & Emerging Tech",
    icon: <FaRobot />,
    technologies: [
      "RAG",
      "GROQ",
      "OCR",
      "Tesseract.js",
      "Prompt Engineering",
      "AI Integration",
      "Agentic AI",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
      relative
      py-28
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-0
        w-80
        h-80
        bg-[#19A7CE]/10
        rounded-full
        blur-[140px]
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-80
        h-80
        bg-[#146C94]/10
        rounded-full
        blur-[140px]
      "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        relative
        z-10
      "
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p
            className="
            uppercase
            tracking-[5px]
            font-semibold
            text-[#19A7CE]
            mb-4
          "
          >
            My Expertise
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            bg-gradient-to-r
            from-[#19A7CE]
            via-[#146C94]
            to-[#0F4C75]
            bg-clip-text
            text-transparent
          "
          >
            Skills & Technologies
          </h2>

          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-lg
            text-slate-600
            dark:text-slate-400
          "
          >
            Technologies and tools I use to build scalable, modern, and
            user-focused digital products.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className="group relative"
            >
              {/* Glow Border */}

              <div
                className="
                absolute
                -inset-[1px]
                rounded-3xl
                bg-gradient-to-r
                from-[#19A7CE]
                via-[#146C94]
                to-[#0F4C75]
                opacity-0
                blur-md
                group-hover:opacity-100
                transition-all
                duration-500
              "
              />

              {/* Card */}

              <div
                className="
                relative
                h-full
                rounded-3xl
                p-8
                bg-white/80
                dark:bg-slate-900/70
                backdrop-blur-xl
                border
                border-slate-200
                dark:border-slate-800
                shadow-xl
                shadow-slate-200/50
                dark:shadow-cyan-500/10
                group-hover:border-[#19A7CE]
                group-hover:shadow-[0_25px_60px_rgba(25,167,206,0.25)]
                transition-all
                duration-500
              "
              >
                {/* Icon */}

                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-2xl
                  text-white
                  bg-gradient-to-br
                  from-[#19A7CE]
                  to-[#146C94]
                  mb-6
                  group-hover:scale-110
                  group-hover:rotate-6
                  transition-all
                  duration-500
                "
                >
                  {skill.icon}
                </div>

                {/* Title */}

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-slate-900
                  dark:text-white
                  mb-3
                "
                >
                  {skill.title}
                </h3>

                {/* Count */}

                <div
                  className="
                  inline-flex
                  px-3
                  py-1
                  rounded-full
                  bg-[#19A7CE]/10
                  text-[#19A7CE]
                  text-sm
                  font-semibold
                  mb-6
                "
                >
                  {skill.technologies.length} Technologies
                </div>

                {/* Technologies */}

                <div className="flex flex-wrap gap-3">
                  {skill.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-medium
                      bg-slate-100
                      dark:bg-slate-800
                      text-slate-700
                      dark:text-slate-300
                      border
                      border-slate-200
                      dark:border-slate-700
                      hover:bg-[#19A7CE]
                      hover:text-white
                      hover:border-[#19A7CE]
                      hover:scale-105
                      transition-all
                      duration-300
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}

                <div
                  className="
                  flex
                  items-center
                  gap-2
                  mt-8
                  text-[#19A7CE]
                  font-medium
                  opacity-0
                  translate-y-2
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                "
                >
                  Explore Skills
                  <FaArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
