import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Optional: TypeScript interface for props (if using TypeScript)
// interface AboutProps {}

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Changed to once: true for performance

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Define features array for better maintainability
  const features = [
    { icon: 'fas fa-certificate', text: 'ISO Certified', ariaLabel: 'ISO Certified Icon' },
    { icon: 'fas fa-calendar-alt', text: '25+ Years', ariaLabel: '25+ Years Experience Icon' },
    { icon: 'fas fa-leaf', text: 'Sustainable', ariaLabel: 'Sustainable Practices Icon' },
  ];

  return (
    <motion.section
      className="py-16 bg-background"
      id="about"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          id="about-heading"
          className="text-4xl sm:text-5xl font-bold mb-4 text-green-700 dark:text-green-500"
          variants={itemVariants}
        >
          Craftsmanship and <br /> Innovation Since 1998
        </motion.h2>
        <motion.p
          className="text-lg mb-8 text-gray-700 dark:text-slate-300 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          With over two decades of experience in aluminum manufacturing, we deliver precision, quality, and sustainability in every project. Our commitment to ISO-certified processes and eco-friendly practices ensures your vision is built to last.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-6 text-2xl"
          variants={containerVariants}
        >
          {features.map((item, index) => (
            <motion.div
              key={index} // Removed invalid comment
              className="flex flex-col items-center py-6 px-6 sm:py-8 sm:px-8 rounded-2xl hover:shadow-green-600 hover:shadow-sm shadow-md dark:text-gray-950 dark:bg-white w-full sm:w-auto"
              variants={itemVariants}
            >
              <span
                className="text-4xl mb-2 py-4 px-4"
                aria-label={item.ariaLabel}
                role="img"
              >
                <i className={item.icon}></i>
              </span>
              <span className="font-semibold">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;