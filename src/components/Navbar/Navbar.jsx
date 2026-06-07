import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
          absolute
          top-[-80px]
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[200px]
          rounded-full
          bg-[#19A7CE]/20
          blur-3xl
        "
        />
      </div>

      <div
        className="
        backdrop-blur-xl
        bg-white/70
        dark:bg-slate-950/70
        border-b
        border-white/20
        dark:border-slate-800/50
        shadow-lg
      "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}

            <a
              href="#"
              className="
              text-2xl
              font-extrabold
              tracking-wide
              bg-gradient-to-r
              from-[#19A7CE]
              to-[#146C94]
              bg-clip-text
              text-transparent
              hover:scale-105
              transition-all
              duration-300
            "
            >
              <span className="font-black tracking-tight">
                Mahak<span className="text-[#19A7CE]">.</span>
              </span>
            </a>

            {/* Desktop Menu */}

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                  relative
                  text-slate-700
                  dark:text-slate-200
                  font-medium
                  transition-all
                  duration-300
                  hover:text-[#19A7CE]
                  dark:hover:text-[#19A7CE]
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-[#19A7CE]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Side */}

            <div className="flex items-center gap-3">
              {/* Theme Toggle */}

              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="
                relative
                p-3
                rounded-full
                bg-white/70
                dark:bg-slate-800/80
                border
                border-slate-200
                dark:border-slate-700
                shadow-md
                hover:scale-110
                transition-all
                duration-300
                hover:rotate-12
hover:shadow-lg
hover:shadow-cyan-500/30
              "
              >
                {theme === "light" ? (
                  <FiMoon className="text-xl text-[#146C94]" />
                ) : (
                  <FiSun className="text-xl text-yellow-400" />
                )}
              </button>

              {/* Mobile Menu Button */}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                md:hidden
                p-2
                rounded-lg
                text-slate-700
                dark:text-white
              "
              >
                {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}

          {isOpen && (
            <div
              className="
              md:hidden
              mx-2 mb-4
              shadow-cyan-500/10
              rounded-2xl
              p-5
              bg-white/90
              dark:bg-slate-900/90
              backdrop-blur-xl
              shadow-xl
              border
              border-slate-200
              dark:border-slate-800
            "
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="
                    text-slate-700
                    dark:text-slate-200
                    hover:text-[#19A7CE]
                    transition-all
                  "
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
