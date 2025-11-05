import type React from 'react';
interface IconLabelProps {
  label?: string;
  className?: string;
  children?: React.ReactNode;
}
export const PageTitle = ({ label = '', className = '', children }: IconLabelProps) => {
  return (
    <div className={`flex flex-row gap-3 p-2 ${className}`}>
      <span className="text-7xl flex  font-extrabold  p-2 gap-9 bg-gradient-to-r from-green-400 via-blue-500 to-white bg-clip-text text-transparent">
        {label}
      </span>
      {children}
    </div>
  );
};
