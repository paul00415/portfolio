import type React from 'react';

interface BlogCardProps {
  title?: string;
  titleDescription: string;
  email?: string;
  image?: string;
  imageAlt?: string;
  address?: string;
  children?: React.ReactNode;
  className?: string;
}
export const BlogCard = ({
  title = '',
  titleDescription = '',
  email = '',
  image = '',
  imageAlt = '',
  address = '',
  className,
  children,
}: BlogCardProps) => {
  return (
    <div className={` inset-0 bg-gradient-to-br from-black via-black-950 to-gray-900 ${className}`}>
      <div className="flex flex-row items-center justify-around gap-5 p-5">
        <p className="text-5xl font-bold text-cyan-300 mb-2">{title}</p>
        <p className="text-indigo-300 mt-4 italic ">{titleDescription}</p>
      </div>
      <div className="text-white justify-center flex  h-[300px] p-3">
        <img
          className="w-[300px] box-border-2 object-cover shadow-gray-400 shadow-lg"
          src={image}
          alt={imageAlt}
        />
      </div>
      <p className="text-indigo-200 text-2xl font-semibold mt-3">{email}</p>
      <p className="text-2xl font-semibold text-indigo-200 mt-4">{address}</p>
      {children}
    </div>
  );
};
