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

type SkillCategory = keyof typeof skills;

const getIcon = (category: SkillCategory) => {
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
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          My <span className="text-primary">Tech Stack</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {(Object.entries(skills) as Array<[SkillCategory, string[]]>).map(
            ([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5 text-primary">
                  <div className="text-xl">{getIcon(category)}</div>
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-white/10 border border-white/10 rounded-full hover:bg-primary/20 transition"
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