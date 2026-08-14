import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services",
    shortProvider: "AWS",
    date: "Aug 2026",
    type: "Certification",
    credential:
      "https://www.credly.com/badges/9e3decfb-dde6-4f19-a863-0927da08f15f/public_url",
    tags: ["AWS", "Cloud", "Foundational"],
    accent: "emerald",
  },

  {
    title: "AWS re/Start Graduate",
    provider: "Amazon Web Services",
    shortProvider: "AWS",
    date: "Dec 2025",
    type: "Program",
    credential:
      "https://www.credly.com/badges/043d0265-92a8-4c4f-9d8a-3a587569d6d6/public_url",
    tags: ["AWS", "Cloud", "Career Program"],
    accent: "emerald",
  },

  {
    title: "Getting Started with Artificial Intelligence",
    provider: "IBM",
    shortProvider: "IBM",
    date: "Jul 2026",
    type: "Course",
    credential:
      "https://www.credly.com/badges/90fd96d9-1a99-42e8-988d-7323ee5c518c/public_url",
    tags: ["AI", "IBM", "Foundations"],
    accent: "blue",
  },

  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    provider: "Oracle",
    shortProvider: "OCI",
    date: "Oct 2025",
    type: "Certification",
    credential:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=10028BFED1840295D727085A395D73E5750A916DCBEC653C2A9A05FC8B362062",
    tags: ["Oracle Cloud", "OCI", "Cloud"],
    accent: "red",
  },
];

function Credentials() {
  return (
    <section
      id="credentials"
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
              05 / credentials
            </p>

            <span className="h-px w-12 bg-emerald-400/30" />
          </div>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Credentials that
            <span className="text-emerald-400"> back the work.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            Cloud, infrastructure, and AI credentials supporting my
            practical project-based learning.
          </p>
        </motion.div>

        {/* =========================================
            EDUCATION + CERTIFICATIONS
        ========================================= */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

          {/* =====================================
              EDUCATION
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
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
            className="h-fit rounded-2xl border border-white/10 bg-white/[0.02] p-7"
          >

            <div className="flex items-center justify-between">

              <p className="font-mono text-xs text-gray-600">
                education.json
              </p>

              <span className="font-mono text-xs text-emerald-400">
                2026
              </span>

            </div>

            <div className="mt-8">

              <p className="font-mono text-xs text-gray-600">
                degree
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                B.Tech CSE
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Ajeenkya D Y Patil University
              </p>

              <p className="mt-1 text-xs text-gray-600">
                Pune, Maharashtra
              </p>

            </div>

            {/* Score */}

            <div className="mt-8 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.025] p-5">

              <p className="font-mono text-xs text-gray-600">
                academic_score
              </p>

              <div className="mt-2 flex items-end gap-2">

                <span className="text-4xl font-bold text-emerald-400">
                  7.22
                </span>

                <span className="pb-1 font-mono text-xs text-gray-600">
                  CGPA
                </span>

              </div>

            </div>

            {/* Focus */}

            <div className="mt-7">

              <p className="mb-3 font-mono text-xs text-gray-600">
                focus_areas
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  "Computer Science",
                  "Java",
                  "Backend",
                  "Cloud",
                  "DevOps",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/5 bg-black/30 px-3 py-1.5 text-xs text-gray-400"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

            {/* Education status */}

            <div className="mt-8 flex items-center gap-2 border-t border-white/5 pt-6">

              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="font-mono text-xs text-gray-500">
                graduation_status: 2026
              </span>

            </div>

          </motion.div>

          {/* =====================================
              CERTIFICATIONS
          ===================================== */}

          <div className="space-y-4">

            {certifications.map((certification, index) => (
              <motion.article
                key={certification.title}
                initial={{
                  opacity: 0,
                  x: 30,
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
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -3,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-emerald-400/20 hover:bg-white/[0.035]"
              >

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                  {/* Certification information */}

                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-2">

                      <span className="rounded-full border border-emerald-400/10 bg-emerald-400/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-emerald-400">
                        {certification.type}
                      </span>

                      <span className="font-mono text-[10px] text-gray-600">
                        {certification.date}
                      </span>

                    </div>

                    <h3 className="mt-3 text-lg font-semibold leading-7 text-white transition group-hover:text-emerald-50">
                      {certification.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {certification.provider}
                    </p>

                    {/* Tags */}

                    <div className="mt-4 flex flex-wrap gap-2">

                      {certification.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/5 bg-black/30 px-2 py-1 font-mono text-[10px] text-gray-500 transition group-hover:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* Verification */}

                  <a
                    href={certification.credential}
                    target="_blank"
                    rel="noreferrer"
                    className="group/verify flex shrink-0 items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 font-mono text-xs text-gray-400 transition duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:text-emerald-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70 transition group-hover/verify:scale-125" />

                    Verify credential

                    <span className="transition-transform group-hover/verify:translate-x-0.5">
                      ↗
                    </span>
                  </a>

                </div>

              </motion.article>
            ))}

          </div>
        </div>

        {/* =========================================
            CREDENTIAL SUMMARY
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
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

            <p className="font-mono text-2xl font-bold text-emerald-400">
              4
            </p>

            <p className="mt-1 text-xs text-gray-600">
              Verified credentials
            </p>

          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

            <p className="font-mono text-2xl font-bold text-emerald-400">
              AWS
            </p>

            <p className="mt-1 text-xs text-gray-600">
              Cloud specialization
            </p>

          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

            <p className="font-mono text-2xl font-bold text-emerald-400">
              2026
            </p>

            <p className="mt-1 text-xs text-gray-600">
              B.Tech graduation
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Credentials;