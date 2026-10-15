'use client';

import Link from 'next/link';
import Image from "next/image";
import { ArrowBigUpDash, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) { // Mostrar botão após rolar 200px para baixo
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer
      className="w-full h-auto bg-accent shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]
                 py-4 px-4 lg:py-8 lg:px-36
                 flex flex-col gap-[32px] lg:gap-[40px] relative"
    >
      {/* Conteúdo principal para mobile */}
      <div className="flex flex-col gap-[32px] lg:hidden">
        {/* Menu de Navegação (Mobile) */}
        <nav className="flex flex-col gap-[16px] items-center text-center">
          <Link href="/produtos" className="text-body label-large cursor-pointer hover:opacity-75">
            Produtos
          </Link>
          <Link href="/sobre-mim" className="text-body label-large cursor-pointer hover:opacity-75">
            Sobre Mim
          </Link>
          <Link href="/feedback" className="text-body label-large cursor-pointer hover:opacity-75">
            Feedback
          </Link>
        </nav>

        {/* Redes Sociais (Mobile) */}
        <div className="flex flex-col gap-[8px] items-center">
          <span className="text-body body-large">Em Caso de Dúvidas:</span>
          <div className="flex gap-[16px]">
            {/* Ícone do Instagram (Placeholder - inserir manualmente pelo dev) */}
            <a href="#" className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:opacity-75">
              <Image 
                src="/icons/instagram.png" 
                alt="Instagram" 
                width={48} 
                height={48} 
                className="object-contain"
              />
            </a>

            <a href="#" className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:opacity-75">
              <Image 
                src="/icons/whatsapp.png" 
                alt="WhatsApp" 
                width={48} 
                height={48} 
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Conteúdo principal para desktop */}
      <div className="hidden lg:flex lg:flex-row lg:justify-center lg:gap-[80px] lg:py-[32px] w-full">
        {/* Menu de Navegação (Desktop) */}
        <nav className="flex flex-col gap-[16px] items-center text-center">
          <Link href="/produtos" className="text-body label-large cursor-pointer hover:opacity-75">
            Produtos
          </Link>
          <Link href="/sobre-mim" className="text-body label-large cursor-pointer hover:opacity-75">
            Sobre Mim
          </Link>
          <Link href="/feedback" className="text-body label-large cursor-pointer hover:opacity-75">
            Feedback
          </Link>
        </nav>

        {/* Redes Sociais (Desktop) */}
        <div className="flex flex-col gap-[32px] items-center">
          <span className="text-body body-large">Em Caso de Dúvidas:</span>
          <div className="flex gap-[16px]">
            {/* Ícone do Instagram (Placeholder - inserir manualmente pelo dev) */}
            <a href="#" className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:opacity-75">
              <Image 
                src="/icons/instagram.png" 
                alt="Instagram" 
                width={48} 
                height={48} 
                className="object-contain"
              />
            </a>

            <a href="#" className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:opacity-75">
              <Image 
                src="/icons/whatsapp.png" 
                alt="WhatsApp" 
                width={48} 
                height={48} 
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Ícones de Ação (Mobile e Desktop) */}
      <div className="flex justify-center items-center">
        <button
          onClick={scrollToTop}
          className="cursor-pointer hover:animate-bounce"
          aria-label="Voltar ao topo"
        >
          <ArrowBigUpDash className="w-[32px] h-[32px] lg:w-[60px] lg:h-[60px]" />
        </button>
      </div>

      <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-36 flex flex-row items-end gap-[16px]">
        <Link href="/carrinho" className="cursor-pointer hover:opacity-75" aria-label="Ir para o carrinho">
          <ShoppingCart className="w-[33px] h-[33px] lg:w-[60px] lg:h-[60px]" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;