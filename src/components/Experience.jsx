import { motion } from "framer-motion";

const experience = {
  company: "Ventures Digital India",
  role: "Software Trainee",
  duration: "Dec 2025 — May 2026",
  period: "5 months",
  location: "Pune, India",

  description:
    "Worked as a Software Trainee with a focus on Java backend development, REST APIs, database integration, and core programming concepts.",

  responsibilities: [
    "Developed and worked with backend REST APIs using Java.",
    "Applied Core Java and Advanced Java concepts in application development.",
    "Worked with Java Collections and object-oriented programming concepts.",
    "Integrated backend applications with MySQL databases.",
    "Implemented CRUD operations and worked with database-driven application logic.",
    "Strengthened practical understanding of backend development and API communication.",
  ],

  technologies: [
    "Java",
    "Advanced Java",
    "Collections",
    "REST APIs",
    "MySQL",
    "JDBC",
  ],
};

function Experience() {
  return (
    <section
      id="experience"
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
              06 / experience
            </p>

            <span className="h-px w-12 bg-emerald-400/30" />
          </div>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Where I started
            <span className="text-emerald-400"> building.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            Practical experience that built my foundation in Java
            backend development, APIs, and database-driven applications.
          </p>
        </motion.div>

        {/* =========================================
            EXPERIENCE TIMELINE
        ========================================= */}

        <div className="relative mt-16">

          {/* Timeline line */}
          <div className="absolute left-[10px] top-0 hidden h-full w-px bg-white/10 md:block" />

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative md:pl-12"
          >

            {/* Timeline node */}

            <div className="absolute left-0 top-1 hidden h-[22px] w-[22px] items-center justify-center rounded-full border border-emerald-400/30 bg-[#050505] md:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>

            {/* =====================================
                EXPERIENCE CARD
            ===================================== */}

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-emerald-400/20 hover:bg-white/[0.035] sm:p-8">

              {/* Header */}

              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                <div>

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full border border-emerald-400/10 bg-emerald-400/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-emerald-400">
                      Software Trainee
                    </span>

                    <span className="font-mono text-[10px] text-gray-600">
                      5 months
                    </span>

                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {experience.company}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {experience.location}
                  </p>

                </div>

                <div className="rounded-lg border border-white/5 bg-black/30 px-4 py-3 lg:text-right">

                  <p className="font-mono text-sm text-gray-300">
                    {experience.duration}
                  </p>

                  <p className="mt-1 font-mono text-[10px] text-gray-600">
                    INTERNSHIP
                  </p>

                </div>

              </div>

              {/* Description */}

              <p className="mt-8 max-w-3xl text-sm leading-7 text-gray-400">
                {experience.description}
              </p>

              {/* =================================
                  RESPONSIBILITIES
              ================================= */}

              <div className="mt-9">

                <div className="mb-4 flex items-center gap-3">

                  <p className="font-mono text-xs text-gray-600">
                    responsibilities
                  </p>

                  <span className="h-px w-16 bg-white/5" />

                </div>

                <div className="grid gap-3 md:grid-cols-2">

                  {experience.responsibilities.map(
                    (responsibility, index) => (
                      <motion.div
                        key={responsibility}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                        }}
                        className="group flex gap-3 rounded-xl border border-white/5 bg-black/20 p-4 transition hover:border-white/10 hover:bg-black/30"
                      >
                        <span className="shrink-0 font-mono text-[10px] text-emerald-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm leading-6 text-gray-400">
                          {responsibility}
                        </p>
                      </motion.div>
                    )
                  )}

                </div>
              </div>

              {/* =================================
                  TECHNOLOGIES
              ================================= */}

              <div className="mt-9 border-t border-white/5 pt-6">

                <div className="mb-3 flex items-center gap-3">

                  <p className="font-mono text-xs text-gray-600">
                    technologies
                  </p>

                  <span className="h-px w-16 bg-white/5" />

                </div>

                <div className="flex flex-wrap gap-2">

                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-xs text-gray-400 transition hover:border-emerald-400/20 hover:text-emerald-400"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

              {/* =================================
                  ENGINEERING FOUNDATION
              ================================= */}

              <div className="mt-8 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.02] p-5">

                <p className="font-mono text-xs text-emerald-400">
                  engineering_foundation
                </p>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  This internship strengthened my Java backend fundamentals
                  and gave me practical experience working with APIs,
                  collections, databases, and application logic.
                </p>

              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Experience;