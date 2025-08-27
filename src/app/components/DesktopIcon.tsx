'use client';
import React from 'react';
import Image from 'next/image';

interface DesktopIconProps {
  name: string;
  imageLink: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({
  name,
  imageLink,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className='flex flex-col items-center justify-center text-center text-white p-3 min-h-[120px] min-w-[120px] md:min-h-auto md:min-w-auto md:p-0 rounded-lg md:rounded-none hover:bg-white/10 transition-colors duration-200'
      style={{ fontSize: '14px' }}
    >
      <div className='mb-2'>
        <Image 
          src={imageLink} 
          alt={`${name}-image`} 
          width={64} 
          height={64} 
          className='md:w-16 md:h-16 w-12 h-12'
        />
      </div>
      <span className='text-xs md:text-sm font-medium'>{name}</span>
    </button>
  );
};

export default DesktopIcon;
