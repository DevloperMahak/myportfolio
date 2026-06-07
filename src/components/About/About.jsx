import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

import aboutImage from "../../assets/images/black_saree.jpeg";

const stats = [
  {
    number: "10+",
    title: "Projects Built",
    icon: <FaRocket />,
  },
  {
    number: "6+",
    title: "Core Technologies",
    icon: <FaCode />,
  },
  {
    number: "Web & Mobile",
    title: "Development",
    icon: <FaMobileAlt />,
  },
  {
    number: "UI/UX",
    title: "Design Skills",
    icon: <FaPaintBrush />,
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        left-0
        w-72
        h-72
        bg-[#19A7CE]/10
        blur-[120px]
        rounded-full
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-72
        h-72
        bg-[#146C94]/10
        blur-[120px]
        rounded-full
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
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p
            className="
            uppercase
            tracking-[4px]
            font-semibold
            text-[#19A7CE]
            mb-4
          "
          >
            About Me
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
            Who I Am
          </h2>
        </motion.div>

        {/* Main Content */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-14
          items-center
          mb-20
        "
        >
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div
              className="
              relative
              group
              w-full
              max-w-md
            "
            >
              {/* Glow */}

              <div
                className="
                absolute
                inset-0
                rounded-3xl
                bg-gradient-to-r
                from-[#19A7CE]
                to-[#146C94]
                blur-3xl
                opacity-20
                group-hover:opacity-30
                transition
              "
              />

              {/* Image Card */}

              <div
                className="
                relative
                rounded-3xl
                overflow-hidden
                border
                border-slate-200
                dark:border-slate-800
                bg-white/70
                dark:bg-slate-900/60
                backdrop-blur-xl
                shadow-xl
shadow-slate-200/50
dark:shadow-cyan-500/10
              "
              >
                <img
                  src={aboutImage}
                  alt="Mahak Gupta"
                  className="
    w-full
    h-[380px]
    sm:h-[450px]
    lg:h-[550px]
    object-cover
    object-top
    transition-all
    duration-500
    group-hover:scale-105
  "
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="
              text-3xl
              md:text-4xl
              font-bold
              text-slate-900
              dark:text-white
              mb-6
            "
            >
              Full Stack Developer &
              <span className="text-[#19A7CE]"> UI/UX Designer</span>
            </h3>

            <p
              className="
              text-slate-600
              dark:text-slate-400
              leading-relaxed
              text-lg
              mb-6
            "
            >
              I am Mahak Gupta, a passionate Full Stack Developer who enjoys
              building scalable web and mobile applications with beautiful user
              experiences.
            </p>

            <p
              className="
              text-slate-600
              dark:text-slate-400
              leading-relaxed
              text-lg
              mb-8
            "
            >
              My expertise includes Flutter, React.js, React Native, Node.js,
              MongoDB, and UI/UX Design. I focus on solving real-world problems
              through technology and creating products that people love.
            </p>

            {/* Highlights */}

            <div className="space-y-4">
              {[
                "Full Stack Web Development",
                "Cross Platform App Development",
                "Modern UI/UX Design",
                "AI & SaaS Product Development",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#19A7CE]" />

                  <span
                    className="
                    text-slate-700
                    dark:text-slate-300
                  "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
              group
              rounded-3xl
              p-8
              border
              border-slate-200
              dark:border-slate-800
              bg-white/70
              dark:bg-slate-900/60
              backdrop-blur-xl
              shadow-xl
shadow-slate-200/50
              dark:shadow-cyan-500/10
              hover:border-[#19A7CE]
              hover:shadow-[0_20px_50px_rgba(25,167,206,0.25)]
              transition-all
              duration-300
            "
            >
              <div
                className="
                w-14
                h-14
                rounded-2xl
                flex
                items-center
                justify-center
                bg-[#19A7CE]/10
                text-[#19A7CE]
                text-2xl
                mb-5
              "
              >
                {item.icon}
              </div>

              <h3
                className="
                text-3xl
                font-bold
                text-slate-900
                dark:text-white
              "
              >
                {item.number}
              </h3>

              <p
                className="
                mt-2
                text-slate-600
                dark:text-slate-400
              "
              >
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
