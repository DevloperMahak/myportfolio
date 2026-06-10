import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import services from "../../data/services";

const Services = () => {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-[#19A7CE]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#146C94]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-[#19A7CE] font-semibold mb-4">
            What I Do
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#19A7CE] via-[#146C94] to-[#0F4C75] bg-clip-text text-transparent">
            Services
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Modern digital solutions crafted with clean UI and scalable
            architecture.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, rotateX: 6, rotateY: -6 }}
                className="
                  group
                  relative

                  p-7

                  rounded-3xl

                  bg-white/70
                  dark:bg-slate-900/70

                  backdrop-blur-2xl

                  border border-[#19A7CE]/20

                  shadow-[0_10px_40px_rgba(0,0,0,0.08)]

                  hover:shadow-[0_25px_80px_rgba(25,167,206,0.25)]

                  transition-all duration-500

                  overflow-hidden
                "
              >
                {/* Animated Glow Border */}
                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-r from-[#19A7CE] via-[#146C94] to-[#0F4C75]
                  opacity-0 group-hover:opacity-20
                  blur-2xl
                  transition-all duration-500
                "
                />

                {/* Light Sweep Effect */}
                <div
                  className="
                  absolute -left-1/2 top-0
                  w-1/2 h-full
                  bg-white/20
                  skew-x-[-20deg]

                  translate-x-[-200%]
                  group-hover:translate-x-[250%]

                  transition-transform duration-1000
                "
                />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div
                    className="
                    w-14 h-14
                    rounded-2xl

                    flex items-center justify-center

                    bg-gradient-to-br from-[#19A7CE] to-[#146C94]

                    text-white text-xl

                    shadow-lg shadow-cyan-500/20

                    group-hover:rotate-12
                    group-hover:scale-110

                    transition-all duration-500
                  "
                  >
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                    mt-5
                    text-xl font-bold
                    text-slate-800 dark:text-white
                  "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                    mt-3
                    text-sm text-slate-600 dark:text-slate-300
                    leading-relaxed
                  "
                  >
                    {service.description}
                  </p>

                  {/* Footer */}
                  <div
                    className="
                    mt-6
                    flex items-center gap-2
                    text-[#19A7CE]
                    font-medium
                    opacity-0
                    group-hover:opacity-100
                    transition-all duration-300
                  "
                  >
                    Learn More <FaArrowRight />
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
