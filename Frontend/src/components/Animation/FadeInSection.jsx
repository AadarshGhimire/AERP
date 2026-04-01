import { motion } from "framer-motion";

export default function FadeInSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}  
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,                  
        delay,
        ease: [0.25, 0.1, 0.25, 1],    
      }}
      viewport={{
        once: true,
        amount: 0.2,                 
      }}
    >
      {children}
    </motion.div>
  );
}