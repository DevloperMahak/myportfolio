import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

import education from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-0
        w-80
        h-80
        rounded-full
        bg-[#19A7CE]/10
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
        rounded-full
        bg-[#146C94]/10
        blur-[140px]
      "
      />

      <div
        className="
        max-w-6xl
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
          className="text-center mb-20"
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
            Academic Journey
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
            Education
          </h2>
        </motion.div>

        {education.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
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
              blur-lg
              group-hover:opacity-50
              transition-all
              duration-500
            "
            />

            {/* Card */}

            <div
              className="
              relative
              rounded-3xl
              p-8
              md:p-12

              bg-white/80
              dark:bg-slate-900/80

              backdrop-blur-xl

              border
              border-[#19A7CE]/20

              shadow-xl
              shadow-slate-200/50

              dark:shadow-black/30

              transition-all
              duration-500

              group-hover:border-[#19A7CE]
            "
            >
              <div
                className="
                flex
                flex-col
                md:flex-row
                gap-8
                items-start
              "
              >
                {/* Icon */}

                <div
                  className="
                  w-20
                  h-20
                  rounded-3xl

                  flex
                  items-center
                  justify-center

                  bg-gradient-to-br
                  from-[#19A7CE]
                  to-[#146C94]

                  text-white
                  text-3xl

                  shadow-lg
                  shadow-cyan-500/20

                  group-hover:rotate-12
                  group-hover:scale-110

                  transition-all
                  duration-500
                "
                >
                  <FaGraduationCap />
                </div>

                {/* Content */}

                <div className="flex-1">
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span
                      className="
    px-4 py-2 rounded-full
    bg-[#19A7CE]/10
    dark:bg-[#19A7CE]/15
    text-[#146C94]
    dark:text-cyan-300
    text-sm font-semibold
  "
                    >
                      {item.duration}
                    </span>

                    <span
                      className="
    px-4 py-2 rounded-full
    bg-emerald-500/10
    text-emerald-600
    dark:text-emerald-400
    text-sm font-semibold
  "
                    >
                      Score: {item.score}
                    </span>
                  </div>

                  <h3
                    className="
                    mt-5
                    text-3xl
                    font-bold

                    text-slate-900
                    dark:text-white
                  "
                  >
                    {item.degree}
                  </h3>

                  <h4
                    className="
                    mt-2
                    text-xl
                    font-semibold

                    text-[#146C94]
                    dark:text-cyan-300
                  "
                  >
                    {item.field}
                  </h4>

                  <p
                    className="
                    mt-3
                    text-lg

                    text-slate-700
                    dark:text-slate-300
                  "
                  >
                    {item.institution}
                  </p>

                  <p
                    className="
                    mt-6

                    leading-relaxed

                    text-slate-600
                    dark:text-slate-400
                  "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
