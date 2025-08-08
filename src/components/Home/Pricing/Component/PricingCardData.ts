export type PricingCardProps = {
  subscriptionType: "monthly" | "quarterly" | "annually";
  pricePerMonth: number;
  totalPrice: number;
  popularityBadge: boolean;
  rotation?: "left" | "right" | "none";
};

export const PricingOptions: PricingCardProps[] = [
  {
    subscriptionType: "monthly",
    pricePerMonth: 10,
    totalPrice: 10,
    popularityBadge: false,
    rotation: "left",
  },
  {
    subscriptionType: "quarterly",
    pricePerMonth: 8,
    totalPrice: 24,
    popularityBadge: true,
    rotation: "none",
  },
  {
    subscriptionType: "annually",
    pricePerMonth: 7,
    totalPrice: 84,
    popularityBadge: false,
    rotation: "right",
  },
];
