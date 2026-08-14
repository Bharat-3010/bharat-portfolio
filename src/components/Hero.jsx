import { motion } from "framer-motion";

const terminalLines = [
  { prompt: "$", text: "whoami", delay: 0 },
  { prompt: ">", text: "Bharat Mohite", delay: 0.15 },
  { prompt: ">", text: "Java Backend Developer", delay: 0.3 },
  { prompt: ">", text: "AWS & DevOps Engineer", delay: 0.45 },
  { prompt: ">", text: "docker • kubernetes • terraform", delay: 0.6 },
];

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 lg:px-8"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.035] blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="font-mono text-xs text-emerald-400">
              open_to_opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-emerald-400">
              Bharat.
            </span>

            <br />

            I build with
            <br />

            <span className="text-gray-400">
              Java, AWS & DevOps.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Java backend developer with hands-on experience building REST
            APIs, cloud solutions, containerized applications, and
            infrastructure using modern DevOps tools.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-3">

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 font-mono text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://github.com/Bharat-3010"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 font-mono text-sm text-gray-300 transition hover:border-emerald-400/30 hover:text-emerald-400"
            >
              GitHub
              <span>↗</span>
            </a>

            <a
              href="mailto:bharatmohite042@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 font-mono text-sm text-gray-300 transition hover:border-emerald-400/30 hover:text-emerald-400"
            >
              Contact
            </a>
            <a
             href={`${import.meta.env.BASE_URL}Bharat_Mohite_Resume.pdf`}
             download="Bharat_Mohite_Resume.pdf"
             className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 font-mono text-sm text-gray-300 transition hover:border-emerald-400/30 hover:text-emerald-400"
>
  Resume
  <span>↗</span>
</a>



          </div>

          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/5 pt-7">

            <div>
              <p className="font-mono text-lg font-semibold text-white">
                Java
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Backend
              </p>
            </div>

            <div>
              <p className="font-mono text-lg font-semibold text-white">
                AWS
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Cloud
              </p>
            </div>

            <div>
              <p className="font-mono text-lg font-semibold text-white">
                DevOps
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Automation
              </p>
            </div>

            <div>
              <p className="font-mono text-lg font-semibold text-white">
                2026
              </p>
              <p className="mt-1 text-xs text-gray-600">
                B.Tech CSE
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT — TERMINAL */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >

          {/* Terminal glow */}
          <div className="absolute -inset-5 rounded-3xl bg-emerald-400/[0.025] blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#090909] shadow-2xl">

            {/* Terminal header */}
            <div className="flex items-center border-b border-white/10 px-5 py-4">

              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              </div>

              <span className="ml-4 font-mono text-xs text-gray-600">
                bharat@developer:~
              </span>

            </div>

            {/* Terminal body */}
            <div className="min-h-[390px] p-6 font-mono text-sm">

              {terminalLines.map((line, index) => (
                <motion.div
                  key={`${line.prompt}-${line.text}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.8 + line.delay,
                    duration: 0.4,
                  }}
                  className="mb-4"
                >
                  <span className="text-emerald-400">
                    {line.prompt}
                  </span>{" "}

                  <span
                    className={
                      index === 0
                        ? "text-gray-300"
                        : "text-gray-500"
                    }
                  >
                    {line.text}
                  </span>
                </motion.div>
              ))}

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
                className="mt-8 border-t border-white/5 pt-6"
              >
                <p className="text-gray-600">
                  # current_stack
                </p>

                <div className="mt-4 space-y-2">
                  <p>
                    <span className="text-emerald-400">java</span>
                    <span className="text-gray-600"> → </span>
                    <span className="text-gray-400">
                      Spring Boot · REST APIs
                    </span>
                  </p>

                  <p>
                    <span className="text-emerald-400">cloud</span>
                    <span className="text-gray-600"> → </span>
                    <span className="text-gray-400">
                      AWS · EC2 · S3 · Lambda
                    </span>
                  </p>

                  <p>
                    <span className="text-emerald-400">devops</span>
                    <span className="text-gray-600"> → </span>
                    <span className="text-gray-400">
                      Docker · Kubernetes · Terraform
                    </span>
                  </p>

                  <p>
                    <span className="text-emerald-400">automation</span>
                    <span className="text-gray-600"> → </span>
                    <span className="text-gray-400">
                      Ansible · Jenkins · Linux
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Cursor */}
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="mt-7"
              >
                <span className="text-emerald-400">$</span>
                <span className="ml-2 inline-block h-4 w-2 bg-emerald-400 align-middle" />
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] text-gray-600 transition hover:text-emerald-400 sm:flex"
      >
        <span>scroll_to_explore</span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          ↓
        </motion.span>
      </motion.a>

    </section>
  );
}

export default Hero;
