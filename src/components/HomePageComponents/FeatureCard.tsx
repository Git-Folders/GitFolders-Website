import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  image,
}) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-text-primary mb-3 text-xl font-semibold">
          {title}
        </h3>
        <p className="text-text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
