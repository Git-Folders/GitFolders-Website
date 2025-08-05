export type NAV_SECTION = {
  name: string;
  path: string;
};

export const NAV_ROUTES: NAV_SECTION[] = [
  { name: "Home", path: "/" },
  { name: "Benefits", path: "#benefits" },
  // { name: "cta-1", path: "#cta-1" },
  { name: "Features", path: "#features" },
  { name: "How It Works", path: "#how-it-works" },
  { name: "Pricing", path: "#pricing" },
  { name: "Testimonials", path: "#testimonials" },
  // { name: "cta-2", path: "#cta-2" },
  { name: "FAQs", path: "#faqs" },
  { name: "Contact Us", path: "#contact" },
];
