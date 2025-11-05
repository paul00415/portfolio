import React from 'react';
import type { IconType } from 'react-icons/lib';
import { motion } from 'framer-motion';

interface ShowDevIconsProps {
  icon: IconType;
  iconSize: number;
  progress: number;
  children: React.ReactNode;
  className?: string;
}
export const DevIcons = ({
  icon: Icon,
  iconSize = 100,
  progress = 100,
  children,
  className,
}: ShowDevIconsProps) => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }} // Start off-screen to the left
      whileInView={{ scale: 1.1, opacity: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'tween', stiffness: 900, damping: 90, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div
        className={`${className} w-40 bg-transparent rounded-full h-[250px] flex flex-col justify-center items-center border-gray-400 border-2`}
      >
        <div className="flex justify-center items-center">
          <Icon className="text-white opacity-75" size={iconSize} />
        </div>
        <p className="text-cyan-600 mt-4 font-semibold text-2xl text-center">{progress + '%'}</p>
        {children}
      </div>
    </motion.div>
  );
};
