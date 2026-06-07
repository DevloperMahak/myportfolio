import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import projects from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        left-0
        w-80
        h-80
        bg-[#19A7CE]/10
        rounded-full
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-20
        right-0
        w-80
        h-80
        bg-[#146C94]/10
        rounded-full
        blur-[120px]
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p
            className="
            uppercase
            tracking-[5px]
            text-[#19A7CE]
            font-semibold
            mb-4
          "
          >
            Portfolio
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-extrabold
            bg-gradient-to-r
            from-[#19A7CE]
            via-[#146C94]
            to-[#0F4C75]
            bg-clip-text
            text-transparent
          "
          >
            Featured Projects
          </h2>

          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-slate-600
            dark:text-slate-400
            text-lg
          "
          >
            A collection of web and mobile applications that solve real-world
            problems using modern technologies.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
              className="
              grid
              lg:grid-cols-2
              gap-12
              items-center
            "
            >
              {/* Image */}

              <div
                className={`
                ${index % 2 === 1 ? "lg:order-2" : ""}
              `}
              >
                <div
                  className="
                  group
                  relative
                  rounded-3xl
                  overflow-hidden

                  border
                  border-[#19A7CE]/20

                  bg-white/80
                  dark:bg-slate-900/70

                  backdrop-blur-lg

                  shadow-xl

                  hover:-translate-y-2

                  transition-all
                  duration-500
                "
                >
                  {/* Glow */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#19A7CE]/0
                    via-[#19A7CE]/10
                    to-[#146C94]/0

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-500
                  "
                  />

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    w-full
                    h-full
                    object-cover

                    group-hover:scale-105

                    transition-all
                    duration-700
                  "
                  />
                </div>
              </div>

              {/* Content */}

              <div
                className={`
                ${index % 2 === 1 ? "lg:order-1" : ""}
              `}
              >
                <span
                  className="
                  text-[#19A7CE]
                  font-semibold
                  tracking-wider
                  uppercase
                "
                >
                  Project {project.id}
                </span>

                <h3
                  className="
                  text-4xl
                  font-bold
                  mt-3
                  mb-5

                  text-slate-900
                  dark:text-white
                "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  text-slate-600
                  dark:text-slate-400

                  leading-relaxed
                  text-lg
                "
                >
                  {project.description}
                </p>

                {/* Technologies */}

                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  mt-8
                "
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-4
                      py-2
                      rounded-full

                      bg-[#19A7CE]/10
                      dark:bg-[#19A7CE]/15

                      text-[#146C94]
                      dark:text-[#7DD3FC]

                      border
                      border-[#19A7CE]/20

                      text-sm
                      font-medium

                      hover:bg-[#19A7CE]
                      hover:text-white

                      transition-all
                      duration-300
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div
                  className="
                  flex
                  flex-wrap
                  gap-4
                  mt-10
                "
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex
                    items-center
                    gap-2

                    px-6
                    py-3

                    rounded-xl

                    bg-[#19A7CE]
                    text-white

                    hover:scale-105

                    transition-all
                    duration-300
                  "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex
                    items-center
                    gap-2

                    px-6
                    py-3

                    rounded-xl

                    border
                    border-[#19A7CE]

                    text-[#19A7CE]

                    hover:bg-[#19A7CE]
                    hover:text-white

                    transition-all
                    duration-300
                  "
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
