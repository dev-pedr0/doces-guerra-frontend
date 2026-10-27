'use client';

import React, { useState, useRef, useCallback, useEffect, useLayoutEffect } from 'react';

interface GenericCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number, isCenter: boolean) => React.ReactNode;
  className?: string;
  heightClass?: string; // Nova prop para controlar a altura
}

const GenericCarousel = <T extends { id?: string | number }>({
  items,
  renderItem,
  className,
  heightClass, // Desestruturar a nova prop
}: GenericCarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [itemWidth, setItemWidth] = useState(0);
  const [gapSize, setGapSize] = useState(0);

  useLayoutEffect(() => {
    const calculateDimensions = () => {
      if (window.innerWidth < 1024) { // Mobile
        setItemWidth(254); // Largura do FeedbackCard em mobile
        setGapSize(40);    // Gap entre itens em mobile
      } else { // Desktop
        setItemWidth(502); // Largura do FeedbackCard em desktop
        setGapSize(88);    // Gap entre itens em desktop
      }
    };

    calculateDimensions(); // Cálculo inicial
    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, []);

  const stepSize = itemWidth + gapSize; // Largura do item + espaçamento

  const handleGoTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const onTouchStart = useCallback((event: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const clientX =
      'touches' in event
        ? event.touches[0].clientX
        : (event as React.MouseEvent).clientX;
    setStartX(clientX);
    setDragOffset(0);
  }, []);

  const onTouchMove = useCallback(
    (event: React.TouchEvent | React.MouseEvent) => {
      if (!isDragging) return;
      const clientX =
        'touches' in event
          ? event.touches[0].clientX
          : (event as React.MouseEvent).clientX;
      const diff = clientX - startX;
      setDragOffset(diff);
    },
    [isDragging, startX]
  );

  const onTouchEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50; // Sensibilidade do arrasto em pixels

    if (dragOffset < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else if (dragOffset > threshold) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }

    setDragOffset(0);
  }, [isDragging, dragOffset, items.length]);

  if (items.length === 0) return null;

  return (
    <div
      className={`relative flex justify-center items-center w-full overflow-hidden select-none ${className || ''}`}
      ref={carouselRef}
      onMouseDown={onTouchStart}
      onMouseMove={onTouchMove}
      onMouseUp={onTouchEnd}
      onMouseLeave={onTouchEnd}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className={`relative flex justify-center items-center w-full ${heightClass || ''}`}>
        {items.map((item, index) => {
          let diff = index - currentIndex;

          if (items.length > 2) {
            if (diff > items.length / 2) diff -= items.length;
            if (diff < -items.length / 2) diff += items.length;
          }

          const isCenter = diff === 0;
          const isVisible = Math.abs(diff) <= 1;
          const itemKey = item.id !== undefined ? item.id : `carousel-item-${index}`;

          return (
            <div
              key={itemKey}
              className={`absolute transition-all ease-out ${
                isDragging ? 'duration-0' : 'duration-500'
              } ${
                !isCenter
                  ? 'cursor-pointer opacity-60 scale-90'
                  : 'scale-100 opacity-100 z-10'
              }`}
              style={{
                transform: `translateX(calc(${diff * stepSize}px + ${dragOffset}px))`,
                visibility: isVisible ? 'visible' : 'hidden',
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
              onClick={() => {
                // Se NÃO estiver no centro, o clique apenas move o carrossel para a posição clicada
                if (!isCenter) handleGoTo(index);
              }}
            >
              {/* Repassa isCenter para a função renderItem */}
              {renderItem(item, index, isCenter)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenericCarousel;