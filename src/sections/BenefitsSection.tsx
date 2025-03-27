import React from "react";
import ComparisonCard from "../components/HomePageComponents/ComparisonCard";
import { BENEFITS_SECTION } from "../constants/constants_homepage";

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-white px-4 pt-6 pb-20 md:px-16 md:pt-20">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-text-primary text-4xl font-bold">
            {BENEFITS_SECTION.heading}
          </h2>
          <p className="text-text-secondary mx-auto max-w-2xl text-xl">
            {BENEFITS_SECTION.description}
          </p>
        </div>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="order-1 space-y-8 md:order-2">
            <ComparisonCard
              type={BENEFITS_SECTION.withoutUs.type}
              title={BENEFITS_SECTION.withoutUs.title}
              features={BENEFITS_SECTION.withoutUs.points}
            />
            <ComparisonCard
              type={BENEFITS_SECTION.withUs.type}
              title={BENEFITS_SECTION.withUs.title}
              features={BENEFITS_SECTION.withUs.points}
            />
          </div>
          <div className="relative order-2 h-full md:order-1">
            <div className="h-[50vh] w-full overflow-hidden rounded-2xl shadow-xl md:h-[100vh]">
              <img
                src={BENEFITS_SECTION.image.url}
                alt={BENEFITS_SECTION.image.alt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-2 -bottom-8 rounded-lg bg-white p-3 shadow-lg md:-right-8 md:p-4">
              <h3 className="text-accent text-3xl font-bold">
                {BENEFITS_SECTION.highlight.highlight}
              </h3>
              <p className="text-text-secondary text-sm">
                {BENEFITS_SECTION.highlight.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
