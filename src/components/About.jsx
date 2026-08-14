import { motion } from "framer-motion";

const highlights = [
  {
    label: "degree",
    value: "B.Tech CSE",
  },
  {
    label: "graduation",
    value: "2026",
  },
  {
    label: "location",
    value: "Pune, India",
  },
  {
    label: "focus",
    value: "Backend + DevOps",
  },
];

const technologies = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "MySQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Ansible",
  "Jenkins",
  "Linux",
  "Git",
];

function About() {
  return (
    <section
      id="about"
      className="border-t border-white/5 px-6 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-sm text-emerald-400">
            01 / about
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The developer behind
            <span className="text-gray-500"> the code.</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">

          {/* =====================================
              PROFILE CARD
          ===================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090909]">

              {/* Terminal-style header */}
              <div className="flex items-center border-b border-white/10 px-5 py-4">

                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                </div>

                <span className="ml-4 font-mono text-xs text-gray-600">
                  profile.jpg
                </span>

              </div>

              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">

                <img
                  src="/images/bharat-profile.png"
                  alt="Bharat Bandu Mohite"
                  className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
                />

                {/* Subtle bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Image label */}
                <div className="absolute bottom-4 left-4">
                  <p className="font-mono text-xs text-emerald-400">
                    @bharat
                  </p>
                </div>

              </div>

              {/* Profile info */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-white">
                  Bharat Bandu Mohite
                </h3>

                <p className="mt-1 font-mono text-sm text-emerald-400">
                  Java Backend Developer
                </p>

                <p className="mt-1 font-mono text-xs text-gray-600">
                  AWS & DevOps Engineer
                </p>

                {/* Highlights */}
                <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/5 bg-white/5">

                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="bg-[#090909] p-3"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                        {item.label}
                      </p>

                      <p className="mt-1 text-xs text-gray-300">
                        {item.value}
                      </p>
                    </div>
                  ))}

                </div>

              </div>
            </div>
          </motion.div>

          {/* =====================================
              ABOUT CONTENT
          ===================================== */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >

              <p className="max-w-3xl text-lg leading-9 text-gray-300">
                I'm a{" "}
                <span className="text-white">
                  Java Backend Developer
                </span>{" "}
                and{" "}
                <span className="text-white">
                  AWS & DevOps enthusiast
                </span>{" "}
                focused on building reliable backend systems and
                learning how applications move from development to
                production.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-500">
                My backend work revolves around Java, Spring Boot,
                REST APIs, databases, and application security. Alongside
                development, I've been building hands-on experience with
                AWS, Docker, Kubernetes, Terraform, Ansible, Jenkins,
                and Linux.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-500">
                I enjoy understanding the complete lifecycle of an
                application — from writing the code and creating APIs
                to containerizing services, automating deployments,
                and running applications in the cloud.
              </p>

            </motion.div>

            {/* =================================
                TECH STACK
            ================================= */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-12"
            >

              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs text-gray-600">
                  $ cat stack.txt
                </span>

                <div className="h-px flex-1 bg-white/5" />
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-xs text-gray-400 transition hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:text-emerald-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </motion.div>

            {/* =================================
                CURRENT FOCUS
            ================================= */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-12 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.025] p-6"
            >

              <div className="flex items-start gap-4">

                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />

                <div>
                  <p className="font-mono text-xs text-emerald-400">
                    current_focus
                  </p>

                  <p className="mt-2 text-sm leading-7 text-gray-400">
                    Strengthening my backend engineering and cloud
                    infrastructure skills while building production-style
                    projects with Docker, Kubernetes, Terraform, and AWS.
                  </p>
                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;