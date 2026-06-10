import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import contactInfo from "../../data/contact";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-0
        w-52 h-52
sm:w-72 sm:h-72
lg:w-96 lg:h-96
blur-[100px]
lg:blur-[150px]
        rounded-full
        bg-[#19A7CE]/10
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
        blur-[150px]
      "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        px-4
sm:px-6
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
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p
            className="
            uppercase
            tracking-[3px] sm:tracking-[5px]
text-xs sm:text-sm
            text-[#19A7CE]
            font-semibold
            mb-4
          "
          >
            Let's Connect
          </p>

          <h2
            className="
            text-3xl
sm:text-5xl
lg:text-6xl
            font-extrabold
            bg-gradient-to-r
            from-[#19A7CE]
            via-[#146C94]
            to-[#0F4C75]
            bg-clip-text
            text-transparent
          "
          >
            Contact Me
          </h2>

          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-base
sm:text-lg
px-2
            text-slate-600
            dark:text-slate-400
          "
          >
            Have a project, internship opportunity, freelance work, or just want
            to connect? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
           p-5
sm:p-8
rounded-2xl
sm:rounded-3xl

            bg-white/80
            dark:bg-slate-900/80

            backdrop-blur-xl

            border
            border-[#19A7CE]/20
          "
          >
            <h3
              className="
              text-2xl sm:text-3xl
              font-bold
              text-slate-900
              dark:text-white
            "
            >
              Get In Touch
            </h3>

            <p
              className="
              mt-4
              text-slate-600
              dark:text-slate-400
            "
            >
              I'm always open to discussing new projects, internships,
              collaborations, and opportunities.
            </p>

            <div className="mt-10 space-y-6">
              <ContactCard
                icon={<FaEnvelope />}
                title="Email"
                value={contactInfo.email}
              />

              <ContactCard
                icon={<FaPhoneAlt />}
                title="Phone"
                value={contactInfo.phone}
              />

              <ContactCard
                icon={<FaMapMarkerAlt />}
                title="Location"
                value={contactInfo.location}
              />
            </div>

            {/* Social */}

            <div className="flex gap-4 mt-10">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                className="
                w-10 h-10
sm:w-12 sm:h-12

                rounded-full

                flex
                items-center
                justify-center

                border
                border-[#19A7CE]/30

                text-[#19A7CE]

                hover:bg-[#19A7CE]
                hover:text-white
                hover:scale-110

                transition-all
                duration-300
              "
              >
                <FaGithub />
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                w-12
                h-12

                rounded-full

                flex
                items-center
                justify-center

                border
                border-[#19A7CE]/30

                text-[#19A7CE]

                hover:bg-[#19A7CE]
                hover:text-white
                hover:scale-110

                transition-all
                duration-300
              "
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
  relative

  p-5
sm:p-8
lg:p-10
rounded-2xl
sm:rounded-3xl

  bg-white/80
  dark:bg-slate-900/80

  backdrop-blur-xl

  border
  border-slate-200
  dark:border-slate-700

  shadow-xl
  shadow-slate-200/50

  dark:shadow-black/40

  overflow-hidden
"
          >
            {/* Hover Glow */}

            <div
              className="
    absolute
    inset-0

    bg-gradient-to-br
    from-[#19A7CE]/5
    via-transparent
    to-[#146C94]/5

    pointer-events-none
  "
            />

            <div className="relative z-10 space-y-6">
              {/* Name */}

              <input
                type="text"
                placeholder="Your Name"
                className="
      w-full

      px-4 sm:px-5
py-3 sm:py-4

      rounded-2xl

      bg-white/70
      dark:bg-slate-800/70

      backdrop-blur-lg

      border
      border-slate-300
      dark:border-slate-600

      text-slate-900
      dark:text-white

      placeholder:text-slate-500
      dark:placeholder:text-slate-400

      outline-none

      focus:border-[#19A7CE]
      focus:ring-4
      focus:ring-[#19A7CE]/20

      transition-all
      duration-300
    "
              />

              {/* Email */}

              <input
                type="email"
                placeholder="Your Email"
                className="
      w-full

      px-5
      py-4

      rounded-2xl

      bg-white/70
      dark:bg-slate-800/70

      backdrop-blur-lg

      border
      border-slate-300
      dark:border-slate-600

      text-slate-900
      dark:text-white

      placeholder:text-slate-500
      dark:placeholder:text-slate-400

      outline-none

      focus:border-[#19A7CE]
      focus:ring-4
      focus:ring-[#19A7CE]/20

      transition-all
      duration-300
    "
              />

              {/* Subject */}

              <input
                type="text"
                placeholder="Subject"
                className="
      w-full

      px-5
      py-4

      rounded-2xl

      bg-white/70
      dark:bg-slate-800/70

      backdrop-blur-lg

      border
      border-slate-300
      dark:border-slate-600

      text-slate-900
      dark:text-white

      placeholder:text-slate-500
      dark:placeholder:text-slate-400

      outline-none

      focus:border-[#19A7CE]
      focus:ring-4
      focus:ring-[#19A7CE]/20

      transition-all
      duration-300
    "
              />

              {/* Message */}

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="
      w-full

      px-5
      py-4

      rounded-2xl

      bg-white/70
      dark:bg-slate-800/70

      backdrop-blur-lg

      border
      border-slate-300
      dark:border-slate-600

      text-slate-900
      dark:text-white

      placeholder:text-slate-500
      dark:placeholder:text-slate-400

      resize-none

      outline-none

      focus:border-[#19A7CE]
      focus:ring-4
      focus:ring-[#19A7CE]/20

      transition-all
      duration-300
    "
              />

              {/* Button */}

              <button
                type="submit"
                className="
      w-full

      py-4

      rounded-2xl

      bg-gradient-to-r
      from-[#19A7CE]
      via-[#146C94]
      to-[#0F4C75]

      text-white
      font-semibold
      text-lg

      shadow-lg
      shadow-cyan-500/20

      hover:scale-[1.02]
      hover:shadow-xl
      hover:shadow-cyan-500/30

      active:scale-[0.98]

      transition-all
      duration-300
    "
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, value }) => {
  return (
    <div
      className="
flex
items-start
sm:items-center
gap-3
sm:gap-4
p-3
sm:p-4


      rounded-2xl

      border
      border-[#19A7CE]/15

      hover:border-[#19A7CE]

      transition-all
      duration-300
    "
    >
      <div
        className="
  w-10 h-10
  sm:w-12 sm:h-12
  shrink-0
  rounded-xl
  flex items-center justify-center
  bg-[#19A7CE]/10
  text-[#19A7CE]
"
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm text-slate-500">{title}</p>

        <p
          className="
  font-medium
  text-slate-800
  dark:text-slate-200
  break-words
  text-sm
  sm:text-base
"
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export default Contact;
