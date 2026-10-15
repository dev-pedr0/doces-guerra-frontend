'use client';

import React from 'react';

interface GenericButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const GenericButton: React.FC<GenericButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-fit h-fit
        flex items-center justify-center text-center
        bg-link text-light
        py-[2px] px-[8px] button-text-responsive 
        rounded-full
        lg:rounded-xl
        lg:py-[4px] lg:px-[16px]
        ${className || ''}
      `}
    >
      {text}
    </button>
  );
};

export default GenericButton;
