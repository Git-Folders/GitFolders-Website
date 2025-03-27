import React from "react";

interface ComparisonCardProps {
  type: "positive" | "negative";
  title: string;
  features: readonly string[];
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  type,
  title,
  features,
}) => {
  const isPositive = type === "positive";
  const bgColor = isPositive ? "bg-green-50" : "bg-red-50";
  const borderColor = isPositive ? "border-green-100" : "border-red-100";
  const titleColor = isPositive ? "text-green-600" : "text-red-600";
  const badgeColor = isPositive ? "bg-green-100" : "bg-red-100";
  const icon = isPositive ? "✓" : "✕";
  const iconColor = isPositive ? "text-green-500" : "text-red-500";

  return (
    <div className={`${bgColor} rounded-2xl border p-4 md:p-8 ${borderColor}`}>
      <h3 className={`mb-4 text-2xl font-bold ${titleColor} flex items-center`}>
        <span className={`${badgeColor} mr-3 rounded-lg p-2`}>{title}</span>
      </h3>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="text-text-primary flex items-start space-x-3"
          >
            <span className={iconColor}>{icon}</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComparisonCard;
