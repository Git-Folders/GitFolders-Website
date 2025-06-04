import { DOMAIN } from "./Name";

// * App Routes
type Route = {
  name: string;
  path: string;
};
type Routes = "home" | "signup" | "resetPassword" | "welcome";

const ROUTES: Record<Routes, Route> = {
  home: { name: "Home", path: "/" },
  signup: { name: "Sign Up", path: "/signup" },
  resetPassword: { name: "Password Reset", path: "/reset_password" },
  welcome: { name: "Welcome", path: "/welcome" },
};
export default ROUTES;

//* CTA Link
export const CTA_Link: Route = {
  name: "Join Today",
  path: ROUTES.signup.path,
};

//* Redirect Link
export const REDIRECT_PATH: string = "redirect";
export const REDIRECT_LINK: string = `${DOMAIN}/${REDIRECT_PATH}`;
// export const REDIRECT_LINK: string = `http://localhost:4321/${REDIRECT_PATH}`;

//* Payment Link
export const PAYMENT_LINK: string = "http://localhost:4321/payment";
