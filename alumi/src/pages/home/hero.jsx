import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="relative h-max py-24 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      <motion.div className="relative z-10 text-center max-w-4xl mx-auto px-6" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <Badge className="mb-6 bg-green-600/20 text-blue-200 border-green-400/30 text-sm px-4 py-2">
            Trusted Since 1985
          </Badge>
        </motion.div>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-700 to-slate-300 bg-clip-text dark:text-white text-transparent"
          variants={itemVariants}
        >
          High-Performance Aluminum Solutions
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-slate-300 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Precision-crafted aluminum profiles, windows, and facades built to last for modern architecture
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
         
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default hero;