import { motion } from "framer-motion";
import {
  FaAward,
  FaTrophy,
  FaExternalLinkAlt,
  FaCertificate,
} from "react-icons/fa";

import achievementsData from "../../data/achievementsData";

const AchievementsAndCertifications = () => {
  return (
    <section
      id="achievements"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#19A7CE]/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#146C94]/10 blur-[180px] rounded-full" />

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
            Milestones
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
            Achievements & Certifications
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A collection of certifications, internships, hackathons,
            achievements and milestones throughout my development journey.
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
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
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
                y: -10,
              }}
              className="group relative"
            >
              {/* Glow */}

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
                blur-xl
                group-hover:opacity-60
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
                p-7

                bg-white/80
                dark:bg-slate-900/80

                backdrop-blur-xl

                border
                border-[#19A7CE]/20

                group-hover:border-[#19A7CE]

                transition-all
                duration-500

                shadow-xl
                shadow-slate-200/50
                dark:shadow-black/30
              "
              >
                {/* Top */}

                <div className="flex items-center justify-between mb-6">
                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl

                    flex
                    items-center
                    justify-center

                    text-white
                    text-2xl

                    bg-gradient-to-br
                    from-[#19A7CE]
                    to-[#146C94]

                    group-hover:rotate-12
                    group-hover:scale-110

                    transition-all
                    duration-500
                  "
                  >
                    {item.type === "Achievement" ? (
                      <FaTrophy />
                    ) : (
                      <FaCertificate />
                    )}
                  </div>

                  <span
                    className="
                    px-3
                    py-1
                    rounded-full

                    text-xs
                    font-semibold

                    bg-[#19A7CE]/10
                    text-[#146C94]
                    dark:text-cyan-300
                  "
                  >
                    {item.year}
                  </span>
                </div>

                {/* Type Badge */}

                <span
                  className="
                  inline-flex
                  items-center
                  gap-2

                  px-3
                  py-1

                  rounded-full

                  bg-cyan-50
                  dark:bg-cyan-500/10

                  text-[#19A7CE]
                  text-sm
                  font-semibold
                "
                >
                  <FaAward size={12} />
                  {item.type}
                </span>

                {/* Title */}

                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Organization */}

                <p className="mt-2 font-medium text-[#146C94] dark:text-cyan-300">
                  {item.organization}
                </p>

                {/* Description */}

                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Link */}

                {item.credential && (
                  <a
                    href={item.credential}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    inline-flex
                    items-center
                    gap-2

                    mt-6

                    text-[#19A7CE]
                    font-semibold

                    hover:gap-3

                    transition-all
                    duration-300
                  "
                  >
                    View Credential
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsAndCertifications;
