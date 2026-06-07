import { motion } from "framer-motion";

import {
  FaGithub,
  FaCode,
  FaExternalLinkAlt,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si";

import codingProfiles from "../../data/codingProfiles";

const icons = {
  LeetCode: <SiLeetcode />,
  GeeksforGeeks: <SiGeeksforgeeks />,
  CodeChef: <SiCodechef />,
  HackerRank: <SiHackerrank />,
  GitHub: <FaGithub />,
  Codolio: <FaLaptopCode />,
};

const CodingProfiles = () => {
  return (
    <section id="coding" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#19A7CE]/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#146C94]/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-[#19A7CE] font-semibold mb-4">
            Competitive Programming
          </p>

          <h2
            className="
            text-4xl
            sm:text-5xl
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
            Coding Profiles
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-600 dark:text-slate-400 text-lg">
            Problem solving, competitive programming and open-source
            contributions across multiple coding platforms.
          </p>
        </motion.div>

        {/* Terminal */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
          rounded-[32px]
          overflow-hidden
          border
          border-[#19A7CE]/20

          bg-white/70
          dark:bg-slate-900/70

          backdrop-blur-xl

          shadow-2xl
        "
        >
          {/* Terminal Header */}

          <div
            className="
            flex
            items-center
            gap-2

            px-6
            py-4

            border-b
            border-[#19A7CE]/20
          "
          >
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />

            <span className="ml-4 text-sm text-slate-500">
              coding-profiles.sh
            </span>
          </div>

          {/* Grid */}

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8

            p-6
            lg:p-10
          "
          >
            {codingProfiles.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative"
              >
                {/* Glow */}

                <div
                  className={`
                    absolute
                    -inset-[1px]
                    rounded-3xl
                    bg-gradient-to-r
                    ${item.color}
                    blur-lg
                    opacity-0
                    group-hover:opacity-60
                    transition-all
                    duration-500
                  `}
                />

                {/* Card */}

                <div
                  className="
                  relative
                  h-full

                  rounded-3xl
                  p-7

                  bg-white/80
                  dark:bg-slate-950/80

                  border
                  border-slate-200
                  dark:border-slate-800

                  backdrop-blur-xl
                "
                >
                  {/* Icon */}

                  <div
                    className={`
                    w-16
                    h-16

                    rounded-2xl

                    flex
                    items-center
                    justify-center

                    text-white
                    text-3xl

                    bg-gradient-to-br
                    ${item.color}
                  `}
                  >
                    {icons[item.platform]}
                  </div>

                  {/* Platform */}

                  <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                    {item.platform}
                  </h3>

                  <p className="mt-1 text-[#19A7CE] font-semibold">
                    @{item.username}
                  </p>

                  {/* Stats */}

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <FaCode className="text-[#19A7CE]" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {item.stats}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-500" />

                      <span className="text-slate-600 dark:text-slate-400">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  {/* Button */}

                  <div
                    className="
                    mt-7

                    inline-flex
                    items-center
                    gap-2

                    text-[#19A7CE]
                    font-semibold
                  "
                  >
                    Visit Profile
                    <FaExternalLinkAlt size={12} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
