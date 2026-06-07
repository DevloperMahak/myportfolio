import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaAward, FaStar } from "react-icons/fa";

import achievements from "../../data/achievements";

const icons = [
  <FaTrophy />,
  <FaMedal />,
  <FaAward />,
  <FaStar />,
  <FaTrophy />,
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-0
        w-96
        h-96
        rounded-full
        bg-[#19A7CE]/10
        blur-[160px]
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-96
        h-96
        rounded-full
        bg-[#146C94]/10
        blur-[160px]
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
            Recognition
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
            Achievements
          </h2>

          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-lg
            text-slate-600
            dark:text-slate-400
          "
          >
            Milestones, awards, internships and accomplishments that reflect my
            growth as a developer and leader.
          </p>
        </motion.div>

        {/* Achievement Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 60,
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
                h-full

                p-8
                rounded-3xl

                bg-white/80
                dark:bg-slate-900/80

                backdrop-blur-xl

                border
                border-[#19A7CE]/20

                group-hover:border-[#19A7CE]

                transition-all
                duration-500
              "
              >
                {/* Icon */}

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

                  shadow-lg
                  shadow-cyan-500/20

                  group-hover:scale-110
                  group-hover:rotate-12

                  transition-all
                  duration-500
                "
                >
                  {icons[index]}
                </div>

                <span
                  className="
                  inline-block
                  mt-6
                  px-3
                  py-1

                  rounded-full

                  bg-[#19A7CE]/10

                  text-[#146C94]
                  dark:text-cyan-300

                  text-sm
                  font-semibold
                "
                >
                  {item.year}
                </span>

                <h3
                  className="
                  mt-5
                  text-xl
                  font-bold

                  text-slate-900
                  dark:text-white
                "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-2
                  font-medium

                  text-[#146C94]
                  dark:text-cyan-300
                "
                >
                  {item.organization}
                </p>

                <p
                  className="
                  mt-4
                  leading-relaxed

                  text-slate-600
                  dark:text-slate-400
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

export default Achievements;
