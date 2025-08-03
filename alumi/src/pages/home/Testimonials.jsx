import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Outstanding quality and professional service. The aluminum windows exceeded our expectations in both performance and aesthetics.",
      author: "Sarah Johnson",
      company: "Johnson Architecture",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      quote: "Their curtain wall system transformed our building design. Exceptional engineering and flawless installation.",
      author: "Michael Chen",
      company: "Urban Developers Ltd",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      quote: "Reliable partner for all our aluminum needs. On-time delivery and superior craftsmanship every single project.",
      author: "Emily Rodriguez",
      company: "Metro Construction",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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

  return (
    <motion.section
      className="py-20 bg-background"
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
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Trusted by architects, contractors, and developers nationwide
          </motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="border-gray-300 border-1 p-8 rounded-lg shadow-lg hover:shadow-lg hover:shadow-green-700 transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div>
                  <h4 className="font-bold ">{testimonial.author}</h4>
                  <p className="text-slate-300">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;