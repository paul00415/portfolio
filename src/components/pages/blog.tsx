import { Mail } from 'lucide-react';
import { BlogCard } from '../molecules/cards/blogCard';
import MainAvatar from '../../assets/Avatar2.png';
import { useEffect, useState } from 'react';
import { motion, useViewportScroll, useSpring, useTransform } from 'framer-motion';
export const Blog = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <BlogCard
      className=" w-[450px] min-h-[500px] p-5 rounded-3xl border border-gray-200 "
      title="Paul"
      titleDescription="Full Stack Engineer"
      email="thepaul.work@gmail.com"
      image={MainAvatar}
      imageAlt="main image"
      address="located in Harbin, China"
    >
      <div className="invisible 2xl:visible 2xl:absolute top-[200px] flex justify-center mx-28  w-40 h-0 2xl:h-40">
        <svg className="progress-icon" viewBox="0 0 60 60">
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="white"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1, // Reverse direction of line animation
            }}
          />
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="green"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
        </svg>
      </div>
      <div className="flex flex-col justify-center place-items-center">
        <p className="text-gray-300 text-lg mt-2"> ©2024 paul. All Rights Reserved.</p>
        <Mail
          size={80}
          className="opacity-75  border-2 rounded-full mt-3 border-r-gray-300 p-3 text-white"
        />
      </div>
    </BlogCard>
  );
};
