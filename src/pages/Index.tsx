
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
      className="min-h-screen flex items-center justify-center bg-[#fafafa] dark:bg-[#0a0a0a]"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#1a1a1a] dark:text-[#f5f5f5]">
        Hello World
      </h1>
    </motion.div>
  );
};

export default Index;
