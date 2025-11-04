import type React from 'react';
import { type IconType } from 'react-icons/lib';
interface IconLabelProps {
  label?: string;
  icon?: IconType;
  clasName?: string;
  children?: React.ReactNode;
}
export const IconLabel = ({ label = '', icon: Icon, clasName = '', children }: IconLabelProps) => {
  return (
    <div className={`flex flex-row gap-3 p-2 justify-center ${clasName}`}>
      <div>
        <div className="text-gray-200 ">{Icon && <Icon size={30} />}</div>
      </div>
      <p className="text-2xl text-bold flex justify-center place-items-center text-gray-300">
        {label}
      </p>
      {children}
    </div>
  );
};
