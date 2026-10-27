'use client';

import React from 'react';
import GenericCarousel from '@/components/ui/GenericCarousel';
import ProductCard from '@/components/ui/ProductCard';
import { productsData } from '@/data/products';

const ProductSection: React.FC = () => {
  const handleBuy = () => {
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <section id="produtos" className="w-full h-auto py-[48px] px-[16px] lg:py-[64px] lg:px-[144px] bg-surface flex flex-col items-center justify-center gap-[32px] lg:gap-[40px]">
      <h1 className="heading-h1 text-center text-body lg:text-title">
        Confira qual vai ser a sua sobremesa de hoje
      </h1>
      <GenericCarousel
        items={productsData}
        renderItem={(product, index) => (
          <ProductCard
            key={product.id || index}
            title={product.title}
            imageUrl={product.imageUrl}
            onBuy={handleBuy}
          />
        )}
      />
    </section>
  );
};

export default ProductSection;
