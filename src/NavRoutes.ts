import { DOMAIN } from "./Name";

// * App Routes
type Route = {
  name: string;
  path: string;
};
type Routes =
  | "home"
  | "login"
  | "signup"
  | "resetPassword"
  | "welcome"
  | "settings";
// | "waitlist";

const ROUTES: Record<Routes, Route> = {
  home: { name: "Home", path: "/" },
  login: { name: "Log In", path: "/login" },
  signup: { name: "Sign Up", path: "/signup" },
  resetPassword: { name: "Password Reset", path: "/reset-password" },
  welcome: { name: "Welcome", path: "/welcome" },
  settings: { name: "Settings", path: "/settings" },
  // waitlist: { name: "Join Waitlist", path: "/waitlist" },
};
export default ROUTES;

export type NAV_SECTION = {
  name: string;
  path: string;
};

export const MAIN_NAV_SECTIONS: NAV_SECTION[] = [
  ROUTES.home,
  { name: "Benefits", path: "#benefits" },
  // { name: "cta-1", path: "#cta-1" },
  { name: "Features", path: "#features" },
  { name: "How It Works", path: "#how-it-works" },
  // TODO: Uncomment next line
  // { name: "Pricing", path: "#pricing" },
  // { name: "Testimonials", path: "#testimonials" },
  // { name: "cta-2", path: "#cta-2" },
  { name: "FAQs", path: "#faqs" },
  { name: "Contact Us", path: "#contact" },
];
export const DASHBOARD_NAV_SECTIONS: NAV_SECTION[] = [
  ROUTES.home,
  ROUTES.welcome,
  ROUTES.settings,
];

//* CTA Link
export const CTA_Link: Route = {
  name: "Start Today",
  path: 'https://chromewebstore.google.com/detail/jomibicoiciembfmjadghcnoomoefjpi',
};

//* Redirect Link
export const REDIRECT_PATH: string = "redirect";
export const REDIRECT_LINK: string = `${DOMAIN}/${REDIRECT_PATH}`;
export const UPDATE_PASSWORD_LINK: string = `${DOMAIN}/update-password`;
export const PAYMENT_LINK: string = `${DOMAIN}/payments`;
// export const REDIRECT_LINK: string = `http://localhost:4321/${REDIRECT_PATH}`;
// export const UPDATE_PASSWORD_LINK: string = `http://localhost:4321/update-password`;
