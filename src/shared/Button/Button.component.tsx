import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonType } from './Button.types';

interface Props {
  children: React.ReactNode;
  className?: string;
  type: ButtonType;
}

const Button: React.FC<Props> = ({ children, className, type }) => {
  const buttonClassType: Record<ButtonType, string> = {
    primary: '',
    secondary: 'bg-white text-darkviolet',
    tertiary: 'text-darkviolet border border-lightgray',
  };

  return (
    <button
      className={twMerge(
        className,
        buttonClassType[type],
        'font-bold p-3 rounded-2xl'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
