import { motion } from 'framer-motion';
import type React from 'react';

interface MotionDivProps {
  children?: React.ReactNode;
}
export const MotionDiv = ({ children }: MotionDivProps) => {
  return (
    <motion.div
      className="text-2xl font-bold"
      initial={{ x: -200, opacity: 0 }} // Start off-screen to the left
      whileInView={{ x: 0, opacity: 1 }} // Slide in when visible
      transition={{ duration: 1, ease: 'easeOut' }} // Smooth animation
      viewport={{ once: false, amount: 0.3 }} // Trigger when 30% visible
    >
      {children}
    </motion.div>
  );
};
