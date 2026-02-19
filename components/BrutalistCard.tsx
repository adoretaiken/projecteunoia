
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  noShadow?: boolean;
}

const BrutalistCard: React.FC<Props> = ({ children, className = '', onClick, noShadow }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white border-2 border-black p-6 ${!noShadow ? 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : ''} ${onClick ? 'cursor-pointer hover:bg-slate-50' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default BrutalistCard;
