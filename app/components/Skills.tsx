"use client";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiCpu, FiLayers, FiZap } from "react-icons/fi";

const skills = {
  "Backend Engineering": [
    "Node.js",
    "Express.js",
    "Django REST Framework",
    "FastAPI",
    "GraphQL",
    "REST APIs",
    "JWT Authentication",
    "Asynchronous Programming",
  ],
  Frontend: [
    "React.js",
    "Redux",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
  Databases: [
    "MongoDB",
    "PostgreSQL",
    "Mongoose",
    "Vector Databases",
  ],
  "AI / Generative AI": [
    "LLMs",
    "LangChain.js",
    "RAG (Retrieval-Augmented Generation)",
    "Embeddings",
    "MCP Servers",
    "Agentic AI",
  ],
  "Cloud & DevOps": [
    "AWS EC2",
    "S3",
    "CloudFront",
    "GitHub Actions",
    "CI/CD",
  ],
  "Languages & Tools": [
    "JavaScript",
    "TypeScript",
    "Python",
    "Git",
    "GitHub",
    "Postman",
  ],
};

const getIcon = (category: string) => {
  switch (category) {
    case "Backend Engineering":
      return <FiCpu />;
    case "Frontend":
      return <FiCode />;
    case "Databases":
      return <FiDatabase />;
    case "AI / Generative AI":
      return <FiZap />;
    default:
      return <FiLayers />;
  }
};

const Skills = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-900 dark:text-white"
        >
          My <span className="text-primary">Tech Stack</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-black/5 dark:bg-white/5 
                backdrop-blur-md 
                border border-black/10 dark:border-white/10 
                rounded-xl p-6 
                hover:bg-black/10 dark:hover:bg-white/10
                hover:-translate-y-1 
                transition-all duration-300
              "
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5 text-primary">
                <div className="text-xl">{getIcon(category)}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1 text-sm rounded-full
                      bg-black/10 dark:bg-white/10
                      border border-black/10 dark:border-white/10
                      text-gray-800 dark:text-gray-200
                      hover:bg-black/20 dark:hover:bg-white/20
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;