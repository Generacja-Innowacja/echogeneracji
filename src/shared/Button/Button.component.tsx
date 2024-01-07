import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <button
      className={twMerge(
        className,
        'font-bold text-darkviolet p-3 border border-lightgray rounded-2xl'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
