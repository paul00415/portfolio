import React from 'react';
import type { IconType } from 'react-icons/lib';

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
    <div
      className={`${className} w-40 bg-transparent rounded-full min-h-[230px] min-w-[100px] flex flex-col justify-center items-center border-gray-400 border-2`}
    >
      <div className="flex justify-center items-center">
        <Icon className="text-white opacity-75" size={iconSize} />
      </div>
      <p className="text-cyan-600 mt-4 font-semibold text-2xl text-center">{progress + '%'}</p>
      {children}
    </div>
  );
};
