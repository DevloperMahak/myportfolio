import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { useEffect } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", sectionId: "about" },
    { label: "Skills", sectionId: "skills" },
    { label: "Projects", sectionId: "projects" },
    { label: "Experience", sectionId: "experience" },
    { label: "Education", sectionId: "education" },
    { label: "Achievements", sectionId: "achievements" }, // your combined section
    { label: "Coding Profiles", sectionId: "coding" },
    { label: "Contact", sectionId: "contact" },
  ];
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Glow */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
          absolute
          left-1/2
          -translate-x-1/2
          -top-20

          w-[500px]
          h-[200px]

          rounded-full

          bg-[#19A7CE]/20
          blur-3xl
        "
        />
      </div>

      {/* Navbar */}

      <div
        className="
        backdrop-blur-xl
        bg-white/75
        dark:bg-slate-950/75

        border-b
        border-slate-200/60
        dark:border-slate-800/60

        shadow-lg
        shadow-slate-200/30
        dark:shadow-black/30
      "
      >
        <div
          className="
          max-w-7xl
          mx-auto

          px-4
          sm:px-6
          lg:px-8
        "
        >
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}

            <a
              href="#home"
              className="
              text-2xl
              lg:text-3xl

              font-black

              bg-gradient-to-r
              from-[#19A7CE]
              via-[#146C94]
              to-[#0F4C75]

              bg-clip-text
              text-transparent

              hover:scale-105
              transition-all
              duration-300
            "
            >
              Mahak<span className="text-[#19A7CE]">.</span>
            </a>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.sectionId;

                return (
                  <a
                    key={item.label}
                    href={`#${item.sectionId}`}
                    className={`
          relative
          font-medium
          transition-all
          duration-300

          ${isActive ? "text-[#19A7CE]" : "text-slate-700 dark:text-slate-200"}

          hover:text-[#19A7CE]

          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:bg-[#19A7CE]
          after:rounded-full
          after:transition-all
          after:duration-300

          ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
        `}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Side */}

            <div className="flex items-center gap-3">
              {/* Hire Me */}

              <a
                href="#contact"
                className="
                hidden
                md:flex

                items-center

                px-5
                py-2.5

                rounded-full

                bg-gradient-to-r
                from-[#19A7CE]
                to-[#146C94]

                text-white
                font-medium

                hover:scale-105
                hover:shadow-xl
                hover:shadow-cyan-500/30

                transition-all
                duration-300
              "
              >
                Hire Me
              </a>

              {/* Theme Button */}

              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="
                p-3

                rounded-full

                bg-white/70
                dark:bg-slate-900

                border
                border-slate-200
                dark:border-slate-700

                hover:scale-110
                hover:rotate-12

                hover:shadow-lg
                hover:shadow-cyan-500/20

                transition-all
                duration-300
              "
              >
                {theme === "light" ? (
                  <FiMoon size={18} className="text-[#146C94]" />
                ) : (
                  <FiSun size={18} className="text-yellow-400" />
                )}
              </button>

              {/* Mobile Menu */}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                lg:hidden

                p-3

                rounded-xl

                bg-white/70
                dark:bg-slate-900

                border
                border-slate-200
                dark:border-slate-700

                text-slate-700
                dark:text-white
              "
              >
                {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}

          {isOpen && (
            <div
              className="
              lg:hidden

              mb-4
              mt-2

              rounded-3xl

              p-6

              bg-white/90
              dark:bg-slate-900/90

              border
              border-slate-200
              dark:border-slate-800

              backdrop-blur-xl

              shadow-2xl
              shadow-cyan-500/10
            "
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={`#${item.sectionId}`}
                    onClick={() => setIsOpen(false)}
                    className="
                    px-4
                    py-3

                    rounded-xl

                    text-slate-700
                    dark:text-slate-300

                    hover:bg-[#19A7CE]/10
                    hover:text-[#19A7CE]

                    transition-all
                    duration-300
                  "
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="
                  mt-2

                  text-center

                  py-3

                  rounded-xl

                  bg-gradient-to-r
                  from-[#19A7CE]
                  to-[#146C94]

                  text-white
                  font-semibold
                "
                >
                  Hire Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
