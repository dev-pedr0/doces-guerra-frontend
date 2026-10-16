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
        relative overflow-hidden rounded-3xl
        w-[254px] h-[339px]
        lg:w-[502px] lg:h-[669px]
        bg-cover bg-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]
        flex flex-col justify-end items-center
        pb-[36px] px-4
        lg:pb-[40px] lg:px-6
        bg-surface
      `}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* 1. Overlay em gradiente escuro de baixo para cima */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

      {/* 2. Conteúdo com z-10 para ficar visível sobre o overlay */}
      <div className="relative z-10 flex flex-col items-center gap-[16px] w-full text-center">
        <h2
          className={`
            heading-h2 text-white drop-shadow-md
          `}
          style={{
            WebkitTextStroke: '0.3px var(--pink-400)',
          }}
        >
          {title}
        </h2>
        <GenericButton text="Comprar" onClick={onBuy} />
      </div>
    </div>
  );
};

export default ProductCard;
