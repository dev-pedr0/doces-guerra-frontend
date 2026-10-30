import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen py-0 px-4 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/pictures/bg-hero.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center gap-[40px]">
        <h1 className="display-hero text-light">
          Conheça nosso cardápio, ele foi desenvolvido pensando em você
        </h1>
        <p className="display-sub text-light">Explore Nossas Delícias</p>
        <a href="#produtos">
          <ChevronDown className="w-[60px] h-[60px] text-light hover:animate-bounce cursor-pointer" />
        </a>
      </div>
    </section>
  );
}
