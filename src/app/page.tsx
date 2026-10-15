'use client';

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroSection from "@/pages/home/HeroSection";
import ProductCard from "@/components/ui/ProductCard";
import GenericButton from "@/components/ui/GenericButton";

export default function Home() {
  const handleBuy = () => {
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <section className="p-8 flex flex-col items-center gap-8">
          <h1 className="heading-h1 text-title">Nossos Produtos</h1>
          <div className="flex flex-wrap justify-center gap-8">
            <ProductCard
              title="Mini Pudim"
              imageUrl="products/mini-pudim.jpeg"
              onBuy={handleBuy}
            />
            <ProductCard
              title="Mini Pudim"
              imageUrl="products/mini-pudim.jpeg"
              onBuy={handleBuy}
            />
            <ProductCard
              title="Mini Pudim"
              imageUrl="products/mini-pudim.jpeg"
              onBuy={handleBuy}
            />
          </div>
          <GenericButton text="Ver Mais Produtos" onClick={() => alert("Navegar para página de produtos")} />
        </section>
      </main>
      <Footer/>
    </>
  );
}
