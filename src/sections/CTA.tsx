import React from "react";
import { handleNavigation } from "../utils/handleNavigation";
import { CTA_SECTION } from "../constants/constants_homepage";

const CTA: React.FC = () => {
  return (
    <section className="bg-accent relative overflow-hidden px-4 pt-6 pb-20 text-white md:px-16 md:pt-20">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div
          style={{ backgroundImage: `url(${CTA_SECTION.background_image})` }}
          className={`absolute inset-0 bg-cover bg-center`}
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col px-4 text-center">
        <h2 className="mb-6 text-4xl font-bold">{CTA_SECTION.heading}</h2>
        <p className="mb-10 text-xl opacity-90">{CTA_SECTION.description}</p>
        <button
          onClick={() => handleNavigation(CTA_SECTION.button.linkToOpen)}
          className="group text-accent hover:text-accent-hover z-50 flex cursor-pointer items-center gap-x-2 self-center rounded-lg bg-white px-5 py-4 text-lg font-semibold transition-colors hover:bg-gray-200 md:px-8 md:py-4"
        >
          {CTA_SECTION.button.text}
          {CTA_SECTION.button.icon}
        </button>
      </div>
    </section>
  );
};

export default CTA;
