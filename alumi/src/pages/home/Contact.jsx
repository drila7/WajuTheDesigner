import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Animation variants for child elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="py-16 bg-background"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-3xl font-bold mb-4 text-green-700 dark:text-green-500"
            variants={itemVariants}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="mb-4 text-gray-700 dark:text-slate-300"
            variants={itemVariants}
          >
            <div>
              <p className="mb-2 font-bold">
                Head Office: <span className='font-normal'>9 Alh. Bello Tapa St, Orile Iganmu, Lagos</span>
              </p>
              <p className='mb-2 font-bold'>
                Breach Office: <span className='font-normal'>dddddddddd</span>
              </p>
              <p className='mb-2 font-bold'>
                Branch Office: <span className='font-normal'>dddddddddd</span>
              </p>
              <p className='mb-2 font-bold'>
                Email: <span className='font-normal'>jjjjjj</span>
              </p>
              <p className='mb-2 font-bold'>
                Phone: <span className='font-normal'>dddddddddd</span>
              </p>
            </div>
            
          </motion.p>
        </motion.div>
        <motion.iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3289273217088!2d3.34448517478478!3d6.4799596236682255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bf84f8f6b31%3A0x8dc482d87b7659fd!2s9%20Alh.%20Bello%20Tapa%20St%2C%20Orile%20Iganmu%2C%20Lagos%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1754216105599!5m2!1sen!2sng"
          width="100%"
          height="200"
          className="rounded shadow"
          allowFullScreen=""
          loading="lazy"
          variants={itemVariants}
        ></motion.iframe>
      </div>
    </motion.section>
  );
}

export default Contact;