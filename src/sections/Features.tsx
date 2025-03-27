import React from "react";
import FeatureCard from "../components/HomePageComponents/FeatureCard";
import { FEATURES_SECTION } from "../constants/constants_homepage";

const Features: React.FC = () => {
  return (
    <section className="bg-primary px-4 pt-6 pb-20 md:px-16 md:pt-20">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-text-primary text-4xl font-bold">
            {FEATURES_SECTION.heading}
          </h2>
          <p className="text-text-secondary mx-auto max-w-2xl text-xl text-balance">
            {FEATURES_SECTION.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES_SECTION.features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
