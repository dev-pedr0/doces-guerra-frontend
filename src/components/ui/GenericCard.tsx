import React from 'react';

interface GenericCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GenericCard: React.FC<GenericCardProps> = ({ children, className, onClick }) => {
  return (
    <div
      className={`w-fit h-fit bg-surface-light border-2 border-subtle rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-4 px-2 lg:py-4 lg:px-2 ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GenericCard;
