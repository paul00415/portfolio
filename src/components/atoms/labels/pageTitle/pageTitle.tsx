import type React from 'react';
interface IconLabelProps {
  label?: string;
  className?: string;
  children?: React.ReactNode;
}
export const PageTitle = ({ label = '', className = '', children }: IconLabelProps) => {
  return (
    <div className={`flex flex-row gap-3 p-2 ${className}`}>
      <p className="text-[50px] font-extrabold text-green-300 opacity-85 mt-10">{label}</p>
      {children}
    </div>
  );
};
