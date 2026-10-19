import { aboutData } from "@/data/about-me";
import Image from "next/image";

export const AboutMeSection = () => {
  return (
    <section
      id="sobre-nos"
      className="w-full h-auto py-[48px] px-[16px] bg-page
      lg:py-[64px] lg:px-[144px]"
    >
      <div
        className="flex flex-col items-center justify-start gap-[24px]"
      >
        <p
          className="text-justify text-body body-text-responsive"
        >
          {aboutData.text}
        </p>

        <div className="relative w-full h-[59px]">
          <div className="absolute w-full h-[2px] bg-muted top-1/2 -translate-y-1/2" />
          <div className="absolute w-[2px] h-[59px] bg-muted left-1/2 -translate-x-1/2" />
        </div>

        <div className="w-full">
          <Image
            src={aboutData.imageUrl}
            alt="Imagem do estabelecimento"
            width={1000} 
            height={500} 
            layout="responsive"
            objectFit="cover"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
