import { motion } from "framer-motion";

const socials = [
  {
    name: "WhatsApp",
    value: "+91 9923525261",
    href: "https://wa.me/919923525261",
    description: "Let's chat",
  },
  {
    name: "GitHub",
    value: "Bharat-3010",
    href: "https://github.com/Bharat-3010",
    description: "Projects & code",
  },
  {
    name: "LinkedIn",
    value: "bharat-mohite",
    href: "https://www.linkedin.com/in/bharat-mohite",
    description: "Professional network",
  },
];

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="border-t border-white/5 px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          {/* =========================================
              HEADING
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="flex items-center gap-3">
              <p className="font-mono text-sm text-emerald-400">
                07 / contact
              </p>

              <span className="h-px w-12 bg-emerald-400/30" />
            </div>

            <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Let's build something
              <span className="text-emerald-400"> useful.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400">
              Open to opportunities in Java backend development, cloud,
              and DevOps. I'm always interested in connecting with people
              building useful software and infrastructure.
            </p>
          </motion.div>

          {/* =========================================
              CONTACT TERMINAL
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#090909]"
          >

            {/* Terminal header */}

            <div className="flex items-center border-b border-white/10 px-5 py-4">

              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              </div>

              <span className="ml-4 font-mono text-xs text-gray-600">
                contact@bharat:~
              </span>

            </div>

            {/* Main terminal */}

            <div className="grid gap-10 p-7 lg:grid-cols-[1fr_1fr] lg:p-10">

              {/* =====================================
                  LEFT
              ===================================== */}

              <div>

                <p className="font-mono text-sm text-gray-500">
                  <span className="text-emerald-400">$</span>{" "}
                  ./connect-with-bharat
                </p>

                <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
                  Whether you're looking for a Java backend developer,
                  a cloud-focused engineer, or someone growing into DevOps,
                  I'd be happy to connect.
                </p>

                {/* Email */}

                <a
                  href="mailto:bharatmohite042@gmail.com"
                  className="mt-8 inline-flex items-center gap-3 rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-5 py-3 font-mono text-sm text-emerald-400 transition duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10"
                >
                  Send me an email
                  <span>↗</span>
                </a>

                {/* Availability */}

                <div className="mt-8 flex items-center gap-3">

                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span className="font-mono text-xs text-gray-500">
                    open_to_opportunities
                  </span>

                </div>

              </div>

              {/* =====================================
                  CONTACT DETAILS
              ===================================== */}

              <div className="space-y-4">

                {/* Email */}

                <div className="rounded-xl border border-white/5 bg-black/30 p-5 transition hover:border-white/10">

                  <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                    email
                  </p>

                  <a
                    href="mailto:bharatmohite042@gmail.com"
                    className="mt-2 block break-all text-sm text-gray-300 transition hover:text-emerald-400"
                  >
                    bharatmohite042@gmail.com
                  </a>

                </div>

                {/* Phone */}

                <div className="rounded-xl border border-white/5 bg-black/30 p-5 transition hover:border-white/10">

                  <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                    phone
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-3">

                    <a
                      href="tel:+919923525261"
                      className="text-sm text-gray-300 transition hover:text-emerald-400"
                    >
                      +91 9923525261
                    </a>

                    <span className="text-gray-700">
                      /
                    </span>

                    <a
                      href="https://wa.me/919923525261"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-emerald-400 transition hover:text-emerald-300"
                    >
                      WhatsApp ↗
                    </a>

                  </div>

                </div>

                {/* Location */}

                <div className="rounded-xl border border-white/5 bg-black/30 p-5">

                  <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                    location
                  </p>

                  <p className="mt-2 text-sm text-gray-300">
                    Pune, India
                  </p>

                </div>

              </div>
            </div>

            {/* =====================================
                SOCIAL LINKS
            ===================================== */}

            <div className="border-t border-white/5 px-7 py-5 lg:px-10">

              <div className="grid gap-3 sm:grid-cols-3">

                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-white/5 bg-black/20 p-4 transition duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.02]"
                  >

                    <div className="flex items-center justify-between">

                      <p className="font-mono text-sm text-gray-300 transition group-hover:text-emerald-400">
                        {social.name}
                      </p>

                      <span className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-emerald-400">
                        ↗
                      </span>

                    </div>

                    <p className="mt-2 text-xs text-gray-600">
                      {social.value}
                    </p>

                    <p className="mt-3 font-mono text-[10px] text-gray-700">
                      {social.description}
                    </p>

                  </a>
                ))}

              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="border-t border-white/5 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="font-mono text-sm text-gray-300">
              Bharat Bandu Mohite
            </p>

            <p className="mt-1 font-mono text-xs text-gray-600">
              Java • Spring Boot • AWS • DevOps
            </p>
          </div>

          <div className="text-center font-mono text-[10px] text-gray-700 sm:text-left">
            <p>
              Built with React + Vite
            </p>

            <p className="mt-1">
              © 2026 Bharat Mohite
            </p>
          </div>

          <a
            href="#hero"
            onClick={(event) => {
              event.preventDefault();

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="font-mono text-xs text-gray-600 transition hover:text-emerald-400"
          >
            back_to_top ↑
          </a>

        </div>
      </footer>
    </>
  );
}

export default Contact;