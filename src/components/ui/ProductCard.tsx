'use client';

import React from 'react';
import GenericButton from './GenericButton';

interface ProductCardProps {
  title: string;
  imageUrl: string;
  onBuy?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageUrl, onBuy }) => {
  return (
    <div
      className={`
        w-[254px] h-[339px]
        lg:w-[502px] lg:h-[669px]
        bg-cover bg-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]
        flex flex-col justify-end items-center
        gap-[16px]
        pb-[36px] px-0
        lg:pb-[40px] lg:px-0
        bg-surface
        rounded-3xl
      `}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h2
        className={`
          heading-h2 text-title
        `}
        style={{
          WebkitTextStroke: '0.2px var(--pink-400)',
        }}
      >
        {title}
      </h2>
      <GenericButton text="Comprar" onClick={onBuy} />
    </div>
  );
};

export default ProductCard;
