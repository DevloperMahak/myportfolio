import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import profileImage from "../../assets/images/IMG.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      flex
      items-center
      pt-24
      overflow-hidden
      "
    >
      {/* Background Gradient */}

      <div
        className="
        absolute
        inset-0
        -z-10
        bg-gradient-to-br
        from-slate-50
        via-cyan-50
        to-white
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
      />

      {/* Hero Background Circles */}

      <div className="hero-bg-circles">
        <div className="hero-circle hero-circle-1"></div>

        <div className="hero-circle hero-circle-2"></div>

        <div className="hero-circle hero-circle-3"></div>

        <div className="hero-circle hero-circle-4"></div>

        <div className="hero-circle hero-circle-5"></div>
      </div>

      <div
        className="
  relative
  z-10
  max-w-7xl
  mx-auto
  px-6
  lg:px-8
  w-full
"
      >
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-16
          items-center
        "
        >
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}

            <h1
              className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
              font-extrabold
              leading-tight
              text-slate-900
              dark:text-white
            "
            >
              Hi, I'm{" "}
              <span
                className="
                bg-gradient-to-r
                from-[#19A7CE]
                via-[#146C94]
                to-[#0F4C75]
                bg-clip-text
                text-transparent
                "
              >
                Mahak Gupta
              </span>
            </h1>

            {/* Typewriter */}

            <div
              className="
              mt-5
              text-xl
              sm:text-2xl
              md:text-3xl
              font-semibold
              text-slate-700
              dark:text-slate-300
            "
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Flutter Developer",
                  2000,
                  "React Native Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "AI Enthusiast",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Description */}

            <p
              className="
              mt-8
              max-w-2xl
              text-base
              sm:text-lg
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
            >
              Passionate Full Stack Developer with expertise in Flutter, React
              Native, React.js, Node.js, MongoDB, and UI/UX Design. I build
              scalable web and mobile applications that solve real-world
              problems and create meaningful user experiences.
            </p>

            {/* Buttons */}

            <div
              className="
              flex
              flex-wrap
              gap-4
              mt-10
            "
            >
              <button
                className="
                group
                px-7
                py-4
                rounded-xl
                bg-[#19A7CE]
                text-white
                font-semibold
                flex
                items-center
                gap-2
                hover:scale-105
                hover:shadow-xl
                hover:shadow-cyan-500/30
                transition-all
                duration-300
              "
              >
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/resume/Resume.pdf"
                download="Mahak_Gupta_Resume.pdf"
                className="
    px-7 py-4 rounded-xl
    border-2 border-[#19A7CE]
    text-[#19A7CE]
    font-semibold
    flex items-center gap-2
    hover:bg-[#19A7CE]
    hover:text-white
    transition-all duration-300
  "
              >
                <FaDownload />
                Resume
              </a>
            </div>

            {/* Social Icons */}

            <div className="flex gap-5 mt-10">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/DevloperMahak",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/mahak-gupta-88835226a",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  group
                  w-12
                  h-12
                  rounded-full
                  border
                  border-[#19A7CE]
                  flex
                  items-center
                  justify-center
                  text-[#19A7CE]
                  text-xl
                  transition-all
                  duration-300
                  hover:bg-[#19A7CE]
hover:scale-110
hover:rotate-6
                  hover:text-white
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-cyan-500/50
                  backdrop-blur-sm
bg-white/60
dark:bg-slate-900/60
                "
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative profile-wrapper">
              {/* Outer Border */}

              <div className="outer-border" />

              {/* Rotating Light Ring */}
              <div className="light-ring" />

              {/* Inner Border */}

              <div className="inner-border">
                <img
                  src={profileImage}
                  alt="Mahak Gupta"
                  className="profile-image"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
