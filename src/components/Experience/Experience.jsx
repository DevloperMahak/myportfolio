import { motion } from "framer-motion";
import experience from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
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
            Journey
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
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}

        <div className="relative">
          {/* Center Line */}

          <div
            className="
            absolute
            left-4
            md:left-1/2
            top-0
            h-full
            w-1

            bg-gradient-to-b
            from-[#19A7CE]
            via-[#146C94]
            to-[#0F4C75]
          "
          />

          {experience.map((item, index) => (
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
              className={`
                relative
                mb-12

                md:flex

                ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
              `}
            >
              {/* Dot */}

              <div
                className="
                absolute
                left-1
                md:left-1/2

                w-8
                h-8

                rounded-full

                bg-[#19A7CE]

                border-4
                border-white

                dark:border-slate-950

                shadow-lg
                shadow-cyan-500/50

                md:-translate-x-1/2
              "
              />

              {/* Card */}

              <div
                className="
                ml-12
                md:ml-0

                md:w-[45%]

                p-6

                rounded-3xl

                bg-white/80
                dark:bg-slate-900/70

                backdrop-blur-xl

                border
                border-[#19A7CE]/20

                shadow-lg

                hover:-translate-y-2
                hover:border-[#19A7CE]

                transition-all
                duration-500
              "
              >
                <span
                  className="
                  text-sm
                  font-semibold

                  text-[#19A7CE]
                "
                >
                  {item.duration}
                </span>

                <h3
                  className="
                  text-2xl
                  font-bold
                  mt-2

                  text-slate-900
                  dark:text-white
                "
                >
                  {item.role}
                </h3>

                <h4
                  className="
                  mt-1

                  text-[#146C94]
                  dark:text-cyan-300
                "
                >
                  {item.company}
                </h4>

                <p
                  className="
                  mt-4

                  text-slate-600
                  dark:text-slate-400

                  leading-relaxed
                "
                >
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

export default Experience;
