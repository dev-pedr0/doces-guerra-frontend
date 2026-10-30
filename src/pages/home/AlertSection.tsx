import React from 'react';
import { alertData } from '../../data/alert';

const AlertSection: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 lg:py-16 lg:px-24 bg-page flex justify-center">
      <div className="w-full max-w-4xl bg-surface-light border border-default rounded-2xl p-6 lg:p-10 shadow-sm flex flex-col gap-4 border-l-8 border-l-amber-700">
        <h2 className="heading-h2 text-title">
          {alertData.title}
        </h2>
        <p className="body-large text-body text-left">
          {alertData.message}
        </p>
      </div>
    </section>
  );
};

export default AlertSection;