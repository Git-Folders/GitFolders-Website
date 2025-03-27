import React from "react";

interface StatBoxProps {
  value: string;
  label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-accent text-3xl font-bold">{value}</div>
      <div className="text-text-secondary text-sm font-medium">{label}</div>
    </div>
  );
};

export default StatBox;
