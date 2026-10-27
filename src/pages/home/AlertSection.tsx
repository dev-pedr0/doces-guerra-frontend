import React from 'react';
import { alertData } from '../../data/alert';

const AlertSection: React.FC = () => {
  return (
    <section className="w-full h-auto py-[48px] px-[16px] lg:py-[64px] lg:px-[144px] bg-page
                        flex flex-col items-center justify-center text-center
                        gap-[32px] lg:gap-[40px]">
      <h1 className="heading-h1 status-danger-accent text-center">
        {alertData.title}
      </h1>
      <p className="body-text-responsive status-danger-text text-justify">
        {alertData.message}
      </p>
    </section>
  );
};

export default AlertSection;