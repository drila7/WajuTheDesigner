import { Check, Clock, Users, Phone } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Check,
      title: 'Durability & Quality',
      description: 'Premium materials and rigorous testing ensure long-lasting performance',
    },
    {
      icon: Users,
      title: 'Eco-Friendly Manufacturing',
      description: 'Sustainable processes and fully recyclable aluminum products',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Reliable project timelines with efficient manufacturing and logistics',
    },
    {
      icon: Phone,
      title: 'Custom Solutions',
      description: 'Tailored designs and engineering to meet your specific requirements',
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="py-20 bg-background"
      id="why"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-green-700 dark:text-green-500 mb-6"
            variants={itemVariants}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Setting the standard for excellence in aluminum manufacturing and installation
          </motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              variants={itemVariants}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-green-700 to-slate-800 dark:bg-gradient-to-br dark:from-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="h-10 w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-500 mb-4">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;