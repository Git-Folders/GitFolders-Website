import React from "react";
import StatBox from "../components/HomePageComponents/StatBox";
import { handleNavigation } from "../utils/handleNavigation";
import { HERO_CONTENT } from "../constants/constants_homepage";

//TODO Add when needed
/* const getUsers = () => {
  return "20,000+";
};
const UserMetric: React.FC = () => {
  return (
    <div className="hidden items-center gap-x-2 md:flex">
      <Users className="text-text-secondary/90 h-5 w-5" />
      <span className="text-text-secondary">Join {getUsers()} developers</span>
    </div>
  );
};
const TrustMetric: React.FC = () => {
  return (
    <div className="mb-4 flex items-center space-x-2">
      <Star className="h-5 w-5 text-yellow-400" />
      <span className="text-text-secondary">
        Trusted by {getUsers()} developers
      </span>
    </div>
  );
};
 */
const Hero: React.FC = () => {
  return (
    <section className="bg-primary flex min-h-screen items-center justify-center px-4 py-20 md:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="text-left text-balance">
          {/* <TrustMetric /> */}
          <h1 className="text-text-primary mb-6 text-5xl leading-tight font-bold md:text-6xl">
            {HERO_CONTENT.heading}
          </h1>
          <p className="text-text-secondary mb-8 text-xl">
            {HERO_CONTENT.description}
          </p>
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => handleNavigation(HERO_CONTENT.cta.linkToOpen)}
              className="group bg-accent hover:bg-accent-hover flex cursor-pointer items-center gap-x-2 rounded-lg px-5 py-4 text-lg font-semibold text-white transition-colors md:px-8 md:py-4"
            >
              <span>{HERO_CONTENT.cta.text}</span>
              {HERO_CONTENT.cta.icon}
            </button>
            {/* <UserMetric /> */}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-8">
            {HERO_CONTENT.stats.map((stat) => (
              <StatBox value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
        <div className="relative h-full">
          <div className="relative h-[50vh] w-full overflow-hidden rounded-lg shadow-2xl md:h-[100vh]">
            <img
              src={HERO_CONTENT.image.url}
              alt={HERO_CONTENT.image.alt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 flex items-center gap-x-3 rounded-lg bg-white p-3 shadow-lg md:-left-6 md:p-4">
            {HERO_CONTENT.highlight.icon}
            <div>
              <h3 className="font-semibold">
                {HERO_CONTENT.highlight.heading}
              </h3>
              {/* <p className="text-text-secondary text-sm">
                {HERO_CONTENT.highlight.description}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
