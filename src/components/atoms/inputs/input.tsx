import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full bg-transparent">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`bg-transparent text-gray-200 text-base
          w-full px-4 py-2 border rounded-lg shadow-sm outline-none
          border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200
          dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:border-blue-400
          ${error ? 'border-red-500 focus:ring-red-200' : ''}
          ${className}
        `}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
