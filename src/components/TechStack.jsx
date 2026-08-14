import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Backend",
    description: "Application development & APIs",
    technologies: [
      {
        name: "Java",
        level: "Core",
        description:
          "Core Java, OOP, Collections, exception handling, and backend application development.",
        tags: ["OOP", "Collections", "REST APIs"],
      },
      {
        name: "Spring Boot",
        level: "Backend",
        description:
          "Building RESTful backend services and structured Java applications using Spring Boot.",
        tags: ["REST", "Spring", "Backend"],
      },
      {
        name: "MySQL",
        level: "Database",
        description:
          "Relational database design, SQL queries, CRUD operations, and application integration.",
        tags: ["SQL", "CRUD", "JDBC"],
      },
      {
        name: "REST APIs",
        level: "API",
        description:
          "Designing and consuming RESTful APIs for frontend and backend communication.",
        tags: ["HTTP", "JSON", "CRUD"],
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure, automation & deployment",
    technologies: [
      {
        name: "AWS",
        level: "Cloud",
        description:
          "Hands-on experience with AWS cloud services and cloud infrastructure concepts.",
        tags: ["EC2", "S3", "IAM", "Lambda"],
      },
      {
        name: "Docker",
        level: "Containers",
        description:
          "Containerizing applications and working with Dockerfiles, images, containers, and Compose.",
        tags: ["Dockerfile", "Images", "Compose"],
      },
      {
        name: "Kubernetes",
        level: "Orchestration",
        description:
          "Working with container orchestration concepts including Deployments, Services, StatefulSets, ConfigMaps, and Secrets.",
        tags: ["Pods", "Deployments", "Services"],
      },
      {
        name: "Terraform",
        level: "IaC",
        description:
          "Infrastructure as Code for provisioning and managing cloud resources.",
        tags: ["IaC", "AWS", "Automation"],
      },
      {
        name: "Ansible",
        level: "Automation",
        description:
          "Automating Linux configuration and infrastructure tasks using Ansible playbooks.",
        tags: ["Playbooks", "Linux", "Automation"],
      },
      {
        name: "Jenkins",
        level: "CI/CD",
        description:
          "Exploring automated build and deployment workflows using Jenkins and CI/CD pipelines.",
        tags: ["CI/CD", "Maven", "Automation"],
      },
    ],
  },
  {
    title: "Frontend & Tools",
    description: "Development tools & supporting technologies",
    technologies: [
      {
        name: "React",
        level: "Frontend",
        description:
          "Building component-based frontend applications using React and Vite.",
        tags: ["React", "Vite", "Components"],
      },
      {
        name: "Git",
        level: "Version Control",
        description:
          "Source control, branching, commits, repositories, and collaborative development workflows.",
        tags: ["Git", "GitHub", "Version Control"],
      },
      {
        name: "Maven",
        level: "Build Tool",
        description:
          "Managing Java project dependencies and build lifecycles with Maven.",
        tags: ["Java", "Build", "Dependencies"],
      },
      {
        name: "Linux",
        level: "OS",
        description:
          "Working with Linux environments, shell commands, permissions, services, and server administration basics.",
        tags: ["Ubuntu", "Shell", "Servers"],
      },
    ],
  },
];

function TechStack() {
  const [selected, setSelected] = useState(categories[0].technologies[0]);

  return (
    <section
      id="skills"
      className="border-t border-white/5 px-6 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-sm text-emerald-400">
            02 / stack
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I use to
            <span className="text-emerald-400"> build & ship.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            A growing toolkit across backend development, cloud
            infrastructure, containers, automation, and CI/CD.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Technology categories */}
          <div className="space-y-8">

            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.1,
                }}
              >
                {/* Category heading */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>

                {/* Cards */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {category.technologies.map((technology) => (
                    <button
                      key={technology.name}
                      onClick={() => setSelected(technology)}
                      className={`group rounded-xl border p-4 text-left transition-all duration-200 ${
                        selected.name === technology.name
                          ? "border-emerald-400/40 bg-emerald-400/[0.05]"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-between">

                        <span
                          className={`font-mono text-sm font-semibold ${
                            selected.name === technology.name
                              ? "text-emerald-400"
                              : "text-gray-200"
                          }`}
                        >
                          {technology.name}
                        </span>

                        <span className="text-xs text-gray-600">
                          {technology.level}
                        </span>

                      </div>

                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {technology.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/5 bg-black/30 px-2 py-1 text-[10px] text-gray-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected technology */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6"
            >

              {/* Terminal header */}
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

                <span className="ml-2 font-mono text-xs text-gray-600">
                  selected-stack
                </span>
              </div>

              <p className="font-mono text-xs text-gray-600">
                technology.info
              </p>

              <h3 className="mt-3 text-2xl font-bold text-emerald-400">
                {selected.name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                {selected.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1 font-mono text-xs text-emerald-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Command */}
              <div className="mt-8 rounded-lg border border-white/5 bg-black p-4 font-mono text-xs">
                <p>
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="text-gray-400">
                    cat ~/skills/{selected.name.toLowerCase().replace(/\s+/g, "-")}.md
                  </span>
                </p>

                <p className="mt-3 text-gray-600">
                  → exploring • building • deploying
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;