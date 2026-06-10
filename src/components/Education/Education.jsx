import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import education from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#19A7CE]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#146C94]/10 blur-[140px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-[#19A7CE] font-semibold mb-4">
            Academic Journey
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#19A7CE] via-[#146C94] to-[#0F4C75] bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        {/* STACKED CARDS */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              {/* Left Accent Line */}
              <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#19A7CE] via-[#146C94] to-[#0F4C75] rounded-full opacity-80" />

              {/* Card */}
              <div
                className="
                ml-4

                p-6 md:p-8

                rounded-3xl

                bg-white/80
                dark:bg-slate-900/70

                backdrop-blur-xl

                border border-[#19A7CE]/20

                shadow-lg shadow-slate-200/40
                dark:shadow-black/30

                hover:border-[#19A7CE]
                hover:-translate-y-1

                transition-all duration-500
              "
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#19A7CE] to-[#146C94] text-white">
                    <FaGraduationCap />
                  </div>

                  <span className="text-sm font-semibold text-[#146C94] dark:text-cyan-300">
                    Education
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                  {item.degree}
                </h3>

                <p className="mt-1 text-[#146C94] dark:text-cyan-300 font-medium">
                  {item.field}
                </p>

                <p className="mt-2 text-slate-700 dark:text-slate-300 font-medium">
                  {item.institution}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-4 py-2 rounded-full bg-[#19A7CE]/10 text-[#146C94] text-sm font-semibold">
                    {item.duration}
                  </span>

                  <span className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-semibold">
                    Score: {item.score}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
