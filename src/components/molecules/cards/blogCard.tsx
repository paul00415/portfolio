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
    <div className={` ${className}`}>
      <div className="flex flex-row items-center justify-around gap-5 p-5">
        <p className="text-3xl font-bold text-cyan-300 mb-2">{title}</p>
        <p className="text-blue-200 mb-6 ">{titleDescription}</p>
      </div>
      <div className="text-white justify-center flex  h-[300px] p-3">
        <img className="w-[300px]" src={image} alt={imageAlt} />
      </div>
      <p className="text-gray-200 text-2xl font-semibold mt-3">{email}</p>
      <p className="text-2xl font-semibold text-gray-200 mt-4">{address}</p>
      {children}
    </div>
  );
};
