'use client';

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroSection from "@/pages/home/HeroSection";
import ProductSection from "@/pages/home/ProductSection";
import { AboutMeSection } from "@/pages/home/AboutMeSection";
import FeedbackSection from "@/pages/home/FeedbackSection";
import AlertSection from "@/pages/home/AlertSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <AboutMeSection />
        <FeedbackSection />
        <AlertSection />
      </main>
      <Footer/>
    </>
  );
}
