import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

import certifications from "../../data/certifications";

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      {/* Background Glow */}

      <div
        className="
        absolute
        top-10
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
            Credentials
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
            Certifications
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
            Certifications, internships, achievements and learning milestones
            that reflect my commitment to continuous growth.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.id}
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

                rounded-3xl
                p-8

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
                {/* Icon */}

                <div
                  className="
                  w-16
                  h-16

                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  bg-gradient-to-br
                  from-[#19A7CE]
                  to-[#146C94]

                  text-white
                  text-2xl

                  mb-6

                  group-hover:rotate-12
                  group-hover:scale-110

                  transition-all
                  duration-500
                "
                >
                  <FaAward />
                </div>

                {/* Year */}

                <span
                  className="
                  inline-block
                  px-3
                  py-1

                  rounded-full

                  bg-[#19A7CE]/10
                  dark:bg-[#19A7CE]/15

                  text-[#146C94]
                  dark:text-cyan-300

                  text-sm
                  font-semibold
                "
                >
                  {certificate.year}
                </span>

                {/* Title */}

                <h3
                  className="
                  mt-5
                  text-xl
                  font-bold

                  text-slate-900
                  dark:text-white
                "
                >
                  {certificate.title}
                </h3>

                {/* Issuer */}

                <p
                  className="
                  mt-3

                  text-slate-600
                  dark:text-slate-400
                "
                >
                  {certificate.issuer}
                </p>

                {/* Button */}

                <a
                  href={certificate.credential}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  inline-flex
                  items-center
                  gap-2

                  mt-6

                  text-[#19A7CE]
                  font-medium

                  group-hover:gap-3

                  transition-all
                  duration-300
                "
                >
                  View Credential
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
