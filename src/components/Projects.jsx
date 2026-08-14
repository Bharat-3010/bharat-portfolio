import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "ReelForge AI",
    type: "AI-powered web application",
    status: "LIVE",
    featured: true,

    description:
      "An AI-powered reel idea generator that connects a React frontend with a Spring Boot backend and an AI API to generate creative short-form content ideas.",

    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "OpenRouter",
      "REST API",
    ],

    highlights: [
      "Built REST APIs using Spring Boot",
      "Integrated AI API for content generation",
      "Connected React frontend with backend services",
      "Implemented database persistence with MySQL",
    ],

    github: "https://github.com/Bharat-3010/ReelForge-Ai",

    live: "https://reelforge-frontend-sandy.vercel.app/",
  },

  {
    number: "02",
    title: "GST Billing System",
    type: "Internship project",
    status: "PRIVATE",

    description:
      "A backend-focused GST billing application developed during my Software Trainee internship, with REST APIs for customer and billing-related operations.",

    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API",
      "Hibernate",
      "JDBC",
    ],

    highlights: [
      "Developed backend REST APIs",
      "Implemented CRUD operations",
      "Worked with MySQL database integration",
      "Applied Java and Spring Boot backend concepts",
    ],

    github: null,
    live: null,
  },

  {
    number: "03",
    title: "AWS Polly Text-to-Speech",
    type: "Serverless AWS project",
    status: "COMPLETED",

    description:
      "A serverless text-to-speech workflow using Amazon Polly, S3, and Lambda to automatically process text and generate speech output.",

    technologies: [
      "AWS Polly",
      "S3",
      "Lambda",
      "IAM",
      "Serverless",
    ],

    highlights: [
      "Configured S3 buckets for input and output",
      "Used S3 events to trigger Lambda",
      "Integrated Amazon Polly for speech generation",
      "Automated the text-to-speech workflow",
    ],

    github:
      "https://github.com/Bharat-3010/aws-polly-text-to-speech",

    live: null,
  },

  {
    number: "04",
    title: "3-Tier Application",
    type: "Docker & DevOps project",
    status: "COMPLETED",

    description:
      "A containerized three-tier application demonstrating deployment of frontend, backend, and database services using Docker and Docker Compose.",

    technologies: [
      "Docker",
      "Docker Compose",
      "React",
      "Spring Boot",
      "MySQL",
      "Linux",
    ],

    highlights: [
      "Containerized frontend and backend applications",
      "Configured MySQL as the database layer",
      "Created multi-container deployment using Docker Compose",
      "Configured networking between application services",
    ],

    github:
      "https://github.com/Bharat-3010/docker-3tier-application",

    live: null,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 px-6 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <p className="font-mono text-sm text-emerald-400">
              03 / projects
            </p>

            <span className="h-px w-12 bg-emerald-400/30" />
          </div>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Things I've
            <span className="text-emerald-400"> built.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            Projects where backend development, cloud services,
            containers, AI integrations, and automation come together.
          </p>
        </motion.div>

        {/* =========================================
            PROJECT GRID
        ========================================= */}

        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
                project.featured
                  ? "border-emerald-400/20 bg-emerald-400/[0.025] hover:border-emerald-400/40"
                  : "border-white/10 bg-white/[0.02] hover:border-emerald-400/20 hover:bg-white/[0.035]"
              }`}
            >

              {/* =====================================
                  FEATURED PROJECT GLOW
              ===================================== */}

              {project.featured && (
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-emerald-400/5 blur-3xl transition duration-500 group-hover:bg-emerald-400/10" />
              )}

              {/* =====================================
                  TOP ROW
              ===================================== */}

              <div className="relative flex items-start justify-between gap-4">

                <div>

                  <div className="flex items-center gap-3">

                    <p className="font-mono text-xs text-emerald-400">
                      PROJECT_{project.number}
                    </p>

                    {project.featured && (
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-emerald-400">
                        Featured
                      </span>
                    )}

                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-white transition group-hover:text-emerald-50">
                    {project.title}
                  </h3>

                  <p className="mt-1 font-mono text-xs text-gray-600">
                    {project.type}
                  </p>

                </div>

                {/* STATUS */}
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[9px] tracking-wider ${
                    project.status === "LIVE"
                      ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-400"
                      : project.status === "PRIVATE"
                      ? "border-yellow-400/10 bg-yellow-400/[0.03] text-yellow-500/70"
                      : "border-white/10 bg-white/[0.02] text-gray-600"
                  }`}
                >
                  ● {project.status}
                </span>

              </div>

              {/* =====================================
                  DESCRIPTION
              ===================================== */}

              <p className="relative mt-6 text-sm leading-7 text-gray-400">
                {project.description}
              </p>

              {/* =====================================
                  ARCHITECTURE LINE
              ===================================== */}

              <div className="mt-6 flex items-center gap-2 overflow-hidden rounded-lg border border-white/5 bg-black/20 px-3 py-2">

                <span className="font-mono text-[10px] text-gray-600">
                  architecture
                </span>

                <span className="text-gray-700">
                  /
                </span>

                <span className="truncate font-mono text-[10px] text-gray-500">
                  {project.number === "01"
                    ? "React → Spring Boot → AI API → MySQL"
                    : project.number === "02"
                    ? "Spring Boot → REST API → MySQL"
                    : project.number === "03"
                    ? "S3 → Lambda → Amazon Polly"
                    : "Frontend → Backend → MySQL"}
                </span>

              </div>

              {/* =====================================
                  HIGHLIGHTS
              ===================================== */}

              <div className="mt-7">

                <p className="mb-3 font-mono text-xs text-gray-600">
                  engineering_highlights
                </p>

                <div className="space-y-2.5">

                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex gap-3 text-sm text-gray-400"
                    >
                      <span className="mt-0.5 font-mono text-emerald-400 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>

                      <span>{highlight}</span>
                    </div>
                  ))}

                </div>

              </div>

              {/* =====================================
                  TECHNOLOGIES
              ===================================== */}

              <div className="mt-7 border-t border-white/5 pt-5">

                <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-gray-600">
                  tech_stack
                </p>

                <div className="flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/5 bg-black/30 px-2.5 py-1.5 font-mono text-[10px] text-gray-500 transition duration-300 group-hover:border-emerald-400/10 group-hover:text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

              {/* =====================================
                  PROJECT ACTIONS
              ===================================== */}

              <div className="mt-7 flex flex-wrap gap-3 border-t border-white/5 pt-5">

                {/* LIVE DEMO */}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-4 py-2.5 font-mono text-xs text-emerald-400 transition duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>
                )}

                {/* GITHUB */}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 font-mono text-xs text-gray-400 transition duration-300 hover:border-emerald-400/30 hover:text-emerald-400"
                  >
                    GitHub
                    <span>↗</span>
                  </a>
                )}

                {/* PRIVATE PROJECT */}

                {!project.github && (
                  <span className="inline-flex items-center gap-2 rounded-lg border border-yellow-400/10 bg-yellow-400/[0.02] px-4 py-2.5 font-mono text-xs text-yellow-500/60">
                    Private Internship Project
                  </span>
                )}

              </div>

            </motion.article>
          ))}

        </div>

        {/* =========================================
            GITHUB CTA
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
          className="mt-12 text-center"
        >

          <p className="mb-4 font-mono text-xs text-gray-600">
            more projects & experiments
          </p>

          <a
            href="https://github.com/Bharat-3010"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 font-mono text-sm text-gray-300 transition duration-300 hover:border-emerald-400/30 hover:bg-white/5 hover:text-emerald-400"
          >
            Explore more on GitHub

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;