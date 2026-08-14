import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tools = [
  {
    name: "AWS",
    category: "Cloud",
    level: "Hands-on",
    description:
      "Working with AWS services for application deployment, cloud infrastructure, storage, serverless workloads, and application hosting.",
    technologies: [
      "EC2",
      "S3",
      "IAM",
      "Lambda",
      "Elastic Beanstalk",
      "Polly",
    ],
  },

  {
    name: "Docker",
    category: "Containers",
    level: "Hands-on",
    description:
      "Containerizing applications and creating reproducible environments for development and deployment.",
    technologies: [
      "Dockerfile",
      "Images",
      "Containers",
      "Docker Compose",
      "Multi-stage Builds",
      "Networking",
    ],
  },

  {
    name: "Kubernetes",
    category: "Orchestration",
    level: "Hands-on",
    description:
      "Working with Kubernetes fundamentals for deploying and managing containerized workloads and application services.",
    technologies: [
      "Pods",
      "Deployments",
      "Services",
      "StatefulSets",
      "ConfigMaps",
      "Secrets",
      "Health Probes",
    ],
  },

  {
    name: "Terraform",
    category: "Infrastructure as Code",
    level: "Hands-on",
    description:
      "Provisioning cloud infrastructure using declarative Infrastructure as Code and Terraform providers.",
    technologies: [
      "Providers",
      "Resources",
      "Variables",
      "AWS",
      "EC2",
      "Infrastructure as Code",
    ],
  },

  {
    name: "Ansible",
    category: "Configuration",
    level: "Hands-on",
    description:
      "Automating server configuration and repetitive infrastructure tasks using Ansible playbooks.",
    technologies: [
      "Playbooks",
      "Inventory",
      "SSH",
      "Linux",
      "Automation",
      "Configuration",
    ],
  },

  {
    name: "Jenkins",
    category: "CI/CD",
    level: "Hands-on",
    description:
      "Building CI/CD workflows for source control integration, application builds, and automated deployment processes.",
    technologies: [
      "Pipelines",
      "Maven",
      "Git",
      "Build Automation",
      "CI/CD",
    ],
  },

  {
    name: "Linux",
    category: "Operating System",
    level: "Working Knowledge",
    description:
      "Using Linux environments for application deployment, server administration, troubleshooting, and DevOps workflows.",
    technologies: [
      "Ubuntu",
      "Shell",
      "SSH",
      "Processes",
      "Permissions",
      "Networking",
    ],
  },

  {
    name: "Git",
    category: "Version Control",
    level: "Hands-on",
    description:
      "Using Git and GitHub for source control, collaboration, project management, and CI/CD integration.",
    technologies: [
      "Git",
      "GitHub",
      "Branches",
      "Pull Requests",
      "Git Ignore",
    ],
  },
];

const pipeline = [
  {
    number: "01",
    name: "SOURCE",
    tool: "Git / GitHub",
    description: "Version-controlled application source code",
  },

  {
    number: "02",
    name: "BUILD",
    tool: "Maven / Jenkins",
    description: "Application build and CI workflow",
  },

  {
    number: "03",
    name: "PACKAGE",
    tool: "Docker",
    description: "Application packaged into containers",
  },

  {
    number: "04",
    name: "ORCHESTRATE",
    tool: "Kubernetes",
    description: "Container workloads managed and exposed",
  },

  {
    number: "05",
    name: "INFRASTRUCTURE",
    tool: "Terraform",
    description: "Cloud infrastructure defined as code",
  },

  {
    number: "06",
    name: "CONFIGURE",
    tool: "Ansible",
    description: "Servers and environments automated",
  },

  {
    number: "07",
    name: "DEPLOY",
    tool: "AWS",
    description: "Applications and infrastructure running in cloud",
  },
];

function DevOps() {
  const [selectedTool, setSelectedTool] = useState(tools[0]);

  return (
    <section
      id="devops"
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
              04 / devops
            </p>

            <span className="h-px w-12 bg-emerald-400/30" />
          </div>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From code to
            <span className="text-emerald-400"> cloud.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            Exploring the complete application lifecycle — from source
            control and automation to containers, infrastructure, and
            cloud deployment.
          </p>
        </motion.div>

        {/* =========================================
            PIPELINE
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
          className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#090909]"
        >

          {/* Terminal header */}

          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/70" />

            <span className="ml-3 font-mono text-xs text-gray-600">
              ~/devops/deployment-pipeline
            </span>

            <span className="ml-auto hidden font-mono text-[10px] text-gray-700 sm:block">
              pipeline.yml
            </span>

          </div>

          {/* Pipeline */}

          <div className="overflow-x-auto p-6">

            <div className="flex min-w-[1100px] items-center">

              {pipeline.map((step, index) => (
                <div
                  key={step.number}
                  className="flex flex-1 items-center"
                >

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    className="group w-full rounded-xl border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.03]"
                  >

                    <div className="flex items-center justify-between">

                      <span className="font-mono text-xs text-emerald-400">
                        {step.number}
                      </span>

                      <span className="font-mono text-[9px] tracking-wider text-gray-600">
                        {step.name}
                      </span>

                    </div>

                    <p className="mt-3 font-mono text-sm font-semibold text-white">
                      {step.tool}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      {step.description}
                    </p>

                  </motion.div>

                  {index !== pipeline.length - 1 && (
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.1 + 0.2,
                      }}
                      className="px-2 font-mono text-emerald-400/50"
                    >
                      →
                    </motion.div>
                  )}

                </div>
              ))}

            </div>

          </div>

        </motion.div>

        {/* =========================================
            TOOL EXPLORER
        ========================================= */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =====================================
              TOOL LIST
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
          >

            <div className="mb-4 flex items-center justify-between">

              <p className="font-mono text-xs text-gray-600">
                infrastructure.toolkit
              </p>

              <span className="font-mono text-[10px] text-gray-700">
                {tools.length} tools
              </span>

            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">

              {tools.map((tool) => {

                const isSelected =
                  selectedTool.name === tool.name;

                return (
                  <motion.button
                    key={tool.name}
                    type="button"
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={() => setSelectedTool(tool)}
                    className={`group relative overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 ${
                      isSelected
                        ? "border-emerald-400/40 bg-emerald-400/[0.05]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >

                    {/* Active indicator */}

                    {isSelected && (
                      <motion.span
                        layoutId="selected-tool"
                        className="absolute left-0 top-0 h-full w-0.5 bg-emerald-400"
                      />
                    )}

                    <div className="flex items-start justify-between gap-2">

                      <p
                        className={`font-mono text-sm font-semibold ${
                          isSelected
                            ? "text-emerald-400"
                            : "text-gray-200"
                        }`}
                      >
                        {tool.name}
                      </p>

                      {isSelected && (
                        <span className="text-emerald-400">
                          →
                        </span>
                      )}

                    </div>

                    <p className="mt-2 text-xs text-gray-600">
                      {tool.category}
                    </p>

                    <p className="mt-3 font-mono text-[9px] uppercase tracking-wider text-gray-700">
                      {tool.level}
                    </p>

                  </motion.button>
                );
              })}

            </div>

          </motion.div>

          {/* =====================================
              SELECTED TOOL
          ===================================== */}

          <AnimatePresence mode="wait">

            <motion.div
              key={selectedTool.name}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
            >

              {/* Tool heading */}

              <div className="flex items-start justify-between gap-4">

                <div>

                  <p className="font-mono text-xs text-gray-600">
                    selected_tool
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-emerald-400">
                    {selectedTool.name}
                  </h3>

                  <p className="mt-1 font-mono text-xs text-gray-600">
                    {selectedTool.category}
                  </p>

                </div>

                <span className="shrink-0 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1 font-mono text-[10px] text-emerald-400">
                  {selectedTool.level}
                </span>

              </div>

              {/* Description */}

              <p className="mt-7 max-w-xl text-sm leading-7 text-gray-400">
                {selectedTool.description}
              </p>

              {/* Concepts */}

              <div className="mt-7">

                <p className="mb-3 font-mono text-xs text-gray-600">
                  key_concepts
                </p>

                <div className="flex flex-wrap gap-2">

                  {selectedTool.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/5 bg-black/40 px-3 py-2 font-mono text-xs text-gray-400 transition hover:border-emerald-400/20 hover:text-emerald-400"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

              {/* Terminal */}

              <div className="mt-8 overflow-hidden rounded-lg border border-white/5 bg-black">

                <div className="border-b border-white/5 px-4 py-3">
                  <span className="font-mono text-[10px] text-gray-700">
                    terminal
                  </span>
                </div>

                <div className="p-4 font-mono text-xs">

                  <p className="text-gray-500">
                    <span className="text-emerald-400">
                      $
                    </span>{" "}
                    cat ~/devops/
                    {selectedTool.name.toLowerCase()}
                    .md
                  </p>

                  <p className="mt-4 leading-7 text-gray-600">
                    <span className="text-emerald-400">
                      →
                    </span>{" "}
                    infrastructure
                    <br />

                    <span className="text-emerald-400">
                      →
                    </span>{" "}
                    automation
                    <br />

                    <span className="text-emerald-400">
                      →
                    </span>{" "}
                    deployment
                  </p>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* =========================================
            ENGINEERING APPROACH
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
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

            <p className="font-mono text-xs text-emerald-400">
              01
            </p>

            <h4 className="mt-3 text-sm font-semibold text-white">
              Build
            </h4>

            <p className="mt-2 text-xs leading-6 text-gray-600">
              Develop backend services and APIs with Java and Spring Boot.
            </p>

          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

            <p className="font-mono text-xs text-emerald-400">
              02
            </p>

            <h4 className="mt-3 text-sm font-semibold text-white">
              Automate
            </h4>

            <p className="mt-2 text-xs leading-6 text-gray-600">
              Containerize applications and automate infrastructure and deployment workflows.
            </p>

          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

            <p className="font-mono text-xs text-emerald-400">
              03
            </p>

            <h4 className="mt-3 text-sm font-semibold text-white">
              Deploy
            </h4>

            <p className="mt-2 text-xs leading-6 text-gray-600">
              Run and manage applications using Kubernetes and AWS cloud services.
            </p>

          </div>

        </motion.div>

        {/* =========================================
            NOTE
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-10 border-l-2 border-emerald-400/30 pl-5"
        >

          <p className="text-sm leading-7 text-gray-500">
            My DevOps journey is hands-on and project-driven. I focus on
            understanding how development, infrastructure, automation,
            containers, and cloud services work together to deliver
            reliable applications.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default DevOps;