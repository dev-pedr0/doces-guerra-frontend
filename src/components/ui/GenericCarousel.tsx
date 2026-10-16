'use client';

import React, { useState, useRef, useCallback } from 'react';

interface GenericCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

const GenericCarousel = <T extends { id?: string | number }>({
  items,
  renderItem,
  className,
}: GenericCarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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
      <div className="relative flex justify-center items-center w-full min-h-[360px] lg:min-h-[700px]">
        {items.map((item, index) => {
          let diff = index - currentIndex;

          // Calcula a menor distância para manter o comportamento de loop infinito
          if (items.length > 2) {
            if (diff > items.length / 2) diff -= items.length;
            if (diff < -items.length / 2) diff += items.length;
          }

          const isCenter = diff === 0;
          const isVisible = Math.abs(diff) <= 1; // Exibe o anterior, centro e próximo

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
                // Desloca o item com base na posição relativa ao centro + arrasto atual
                transform: `translateX(calc(${diff * 110}% + ${dragOffset}px))`,
                visibility: isVisible ? 'visible' : 'hidden',
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
              onClick={() => !isCenter && handleGoTo(index)}
            >
              {renderItem(item, index)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenericCarousel;