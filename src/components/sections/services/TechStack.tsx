'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "C#", ".NET", "Go"],
      color: "from-green-400 to-emerald-400"
    },
    {
      category: "Database",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"],
      color: "from-purple-400 to-pink-400"
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins"],
      color: "from-orange-400 to-red-400"
    },
    {
      category: "AI & ML",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Scikit-learn", "Pandas"],
      color: "from-indigo-400 to-purple-400"
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
      color: "from-teal-400 to-cyan-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and future-ready solutions.
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
          variants={containerVariants}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} bg-opacity-10 border border-white/10 text-white hover:bg-opacity-20 transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-400 mb-8">
            Don&apos;t see your preferred technology? We&apos;re always expanding our expertise.
          </p>
          <motion.button
            className="group relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#3b82f6_50%,#06b6d4_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 text-lg font-semibold text-white backdrop-blur-3xl group-hover:bg-gray-900 transition-colors">
              Discuss Your Project
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;