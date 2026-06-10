import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
      relative
      overflow-hidden
      border-t
      border-slate-200
      dark:border-slate-800
      bg-white/70
      dark:bg-slate-950/70
      backdrop-blur-xl
    "
    >
      {/* Background Circles */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
          absolute
          -top-20
          -left-20
          w-72
          h-72
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          w-72
          h-72
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
        />
      </div>

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        py-14
      "
      >
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
        "
        >
          {/* Left */}

          <div>
            <h2
              className="
              text-3xl
              font-extrabold
              bg-gradient-to-r
              from-[#19A7CE]
              via-[#146C94]
              to-[#0F4C75]
              bg-clip-text
              text-transparent
            "
            >
              Mahak Gupta
            </h2>

            <p
              className="
              mt-4
              text-slate-600
              dark:text-slate-400
              leading-relaxed
            "
            >
              Full Stack Developer specializing in Flutter, React Native,
              React.js, Node.js, MongoDB and UI/UX Design.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3
              className="
              text-lg
              font-semibold
              text-slate-900
              dark:text-white
              mb-4
            "
            >
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                  text-slate-600
                  dark:text-slate-400
                  hover:text-[#19A7CE]
                  transition
                "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}

          <div>
            <h3
              className="
              text-lg
              font-semibold
              text-slate-900
              dark:text-white
              mb-4
            "
            >
              Connect With Me
            </h3>

            <div className="flex gap-4">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/DevloperMahak",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/mahak-gupta-88835226a",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/onfire_mahak/",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  w-12
                  h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  border
                  border-[#19A7CE]
                  text-[#19A7CE]
                  text-xl
                  bg-white/60
                  dark:bg-slate-900/60
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-[#19A7CE]
                  hover:text-white
                  hover:scale-110
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-cyan-500/40
                "
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <p
              className="
              mt-5
              text-slate-600
              dark:text-slate-400
            "
            >
              Let's build something amazing together.
            </p>
          </div>
        </div>

        {/* Divider */}

        <div
          className="
          my-10
          border-t
          border-slate-200
          dark:border-slate-800
        "
        />

        {/* Bottom */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
        "
        >
          <p
            className="
            text-center
            md:text-left
            text-slate-600
            dark:text-slate-400
          "
          >
            © {year} Mahak Gupta. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="
            group
            w-12
            h-12
            rounded-full
            bg-[#19A7CE]
            text-white
            flex
            items-center
            justify-center
            hover:scale-110
            hover:shadow-lg
            hover:shadow-cyan-500/40
            transition-all
            duration-300
          "
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
