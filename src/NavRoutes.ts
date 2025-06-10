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
  | "waitlist";

const ROUTES: Record<Routes, Route> = {
  home: { name: "Home", path: "/" },
  login: { name: "Log In", path: "/login" },
  signup: { name: "Sign Up", path: "/signup" },
  resetPassword: { name: "Password Reset", path: "/reset-password" },
  welcome: { name: "Welcome", path: "/welcome" },
  waitlist: { name: "Join Waitlist", path: "/waitlist" },
};
export default ROUTES;

type HOME_PAGE_NAV_SECTION = {
  name: string;
  path: string;
};
export const HOME_PAGE_NAV_SECTIONS: HOME_PAGE_NAV_SECTION[] = [
  { name: "Home", path: "/" },
  { name: "Benefits", path: "#benefits" },
  // { name: "cta-1", path: "#cta-1" },
  { name: "Features", path: "#features" },
  { name: "How It Works", path: "#how-it-works" },
  { name: "Pricing", path: "#pricing" },
  // { name: "Testimonials", path: "#testimonials" },
  // { name: "cta-2", path: "#cta-2" },
  { name: "FAQs", path: "#faqs" },
  { name: "Contact Us", path: "#contact" },
];

//* CTA Link
export const CTA_Link: Route = {
  name: "Start Today",
  // TODO: url to download page
  path: ROUTES.waitlist.path,
};

//* Redirect Link
export const REDIRECT_PATH: string = "redirect";
export const REDIRECT_LINK: string = `${DOMAIN}/${REDIRECT_PATH}`;
export const UPDATE_PASSWORD_LINK: string = `${DOMAIN}/update-password`;
// export const REDIRECT_LINK: string = `http://localhost:4321/${REDIRECT_PATH}`;
// export const UPDATE_PASSWORD_LINK: string = `http://localhost:4321/update-password`;

//* Payment Link
// TODO: Update this to the actual payment link when available
export const PAYMENT_LINK: string = "http://localhost:4321/payment";
