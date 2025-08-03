import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const products = [
  {
    title: "Aluminum Windows",
    description: "Energy-efficient windows with superior thermal performance and sleek modern design.",
    image: "src/assets/p1.jpg",
  },
  {
    title: "Curtain Wall Systems",
    description: "Structural glazing solutions for commercial buildings with  weather resistance.",
    image: "src/assets/p2.jpg",
  },
  {
    title: "Doors & Facades",
    description: "Custom entrance solutions and facade systems engineered for durability and aesthetics.",
    image: "src/assets/p3.jpg",
  },
  
];

function Portfolio() {
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
      id="portfolio"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-500 mb-6"
            variants={itemVariants}
          >
            Our Product Portfolio
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-2xl dark:text-slate-300 mx-auto"
            variants={itemVariants}
          >
            Comprehensive aluminum solutions engineered for performance, aesthetics, and longevity
          </motion.p>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
          
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full hover:scale-105 transition-transform duration-300">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3  group-hover:font-bold">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 group-hover:font-bold mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                </CardContent>
              </Card>
              
              
            </motion.div>
          ))}
          <div className='m-auto flex flex-col bg-green-500 h-full w-full rounded-2xl hover:scale-90 text-amber-50' >
            <a href="/#product" className='flex flex-col justify-center items-center m-auto py-10 font-bold'>
            <h1 className='text-3xl'>MORE</h1>
             <p className='text-4xl'>PRODUCT</p></a>
                
              </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Portfolio;