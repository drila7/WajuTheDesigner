import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const projects = [
    {
      image: "src/assets/ala1.jpg",
      title: "Corporate Headquarters",
      client: "Tech Solutions Inc.",
    },
    {
      image: "src/assets/ala2.jpg",
      title: "Residential Complex",
      client: "Urban Living Developers",
    },
    {
      image: "src/assets/ala3.jpg",
      title: "Commercial Center",
      client: "Metro Development Group",
    },
    {
      image: "src/assets/ala4.jpg",
      title: "Educational Facility",
      client: "State University",
    },
    {
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Healthcare Center",
      client: "Regional Medical Group",
    },
    {
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Retail Pavilion",
      client: "Shopping District Authority",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="py-20 bg-green-800 dark:bg-background"
      id="projects"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white dark:text-green-500 mb-6"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Showcasing our expertise through completed installations across diverse sectors
          </motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                initial={{ translateY: '100%' }}
                whileHover={{ translateY: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-300">{project.client}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;