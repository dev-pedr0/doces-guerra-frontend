'use client';

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroSection from "@/pages/home/HeroSection";
import ProductSection from "@/pages/home/ProductSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
      </main>
      <Footer/>
    </>
  );
}
