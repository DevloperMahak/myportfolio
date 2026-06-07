import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import services from "../../data/services";

const Services = () => {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
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
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p
            className="
            uppercase
            tracking-[5px]
            font-semibold
            text-[#19A7CE]
            mb-4
          "
          >
            What I Do
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            bg-gradient-to-r
            from-[#19A7CE]
            via-[#146C94]
            to-[#0F4C75]
            bg-clip-text
            text-transparent
          "
          >
            Services
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
            Helping businesses, startups and individuals build scalable digital
            products with modern technologies.
          </p>
        </motion.div>

        {/* Services Layout */}

        <div className="grid lg:grid-cols-12 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
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
                className={`
                  group
                  relative

                  ${
                    index === 0
                      ? "lg:col-span-7"
                      : index === 4
                        ? "lg:col-span-12"
                        : "lg:col-span-5"
                  }
                `}
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
p-8

bg-white/80
dark:bg-slate-900/80

backdrop-blur-xl

border
border-[#19A7CE]/25
dark:border-[#19A7CE]/20

shadow-lg
shadow-slate-200/40
dark:shadow-black/30

group-hover:border-[#19A7CE]
group-hover:-translate-y-2

group-hover:shadow-[0_25px_60px_rgba(25,167,206,0.18)]
dark:group-hover:shadow-[0_25px_60px_rgba(25,167,206,0.28)]

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

  bg-gradient-to-br
  from-[#19A7CE]
  to-[#146C94]

  text-white
  text-2xl

  shadow-lg
  shadow-cyan-500/20

  group-hover:scale-110
  group-hover:rotate-12

  transition-all
  duration-500
"
                  >
                    <Icon />
                  </div>

                  {/* Title */}

                  <h3
                    className="
  text-3xl
  font-bold

  text-slate-800
  dark:text-slate-100

  mb-4
"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
  text-slate-600
  dark:text-slate-300

  leading-relaxed
  mb-8
"
                  >
                    {service.description}
                  </p>

                  {/* Technologies */}

                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-medium
                        bg-[#19A7CE]/10
  dark:bg-[#19A7CE]/15

  text-[#146C94]
  dark:text-[#7DD3FC]

  border
  border-[#19A7CE]/20

  hover:bg-[#19A7CE]
  hover:text-white

  hover:scale-105
  hover:-translate-y-1

  transition-all
  duration-300
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}

                  <div
                    className="
                    flex
                    items-center
                    gap-2
                    mt-8
                    text-[#19A7CE]
                    font-medium
                    opacity-0
                    translate-y-2
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-300
                  "
                  >
                    Learn More
                    <FaArrowRight />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
