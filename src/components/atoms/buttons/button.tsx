import React from 'react';
import type { IconType } from 'react-icons';
import { cn } from '../../../lib/utils';

interface ButtonProps {
  label?: string;
  icon?: IconType;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  size?: number;
}

export const Button = ({
  label = '',
  icon: Icon,
  children,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  size = 16,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'rounded-xl font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {loading && <span className="loading loading-spinner"></span>}
      {Icon && <Icon size={size}></Icon>}
      {children || label}
    </button>
  );
};
