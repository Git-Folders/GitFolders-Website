// * App Routes
export type Route = {
  name: string;
  path: string;
};

const ROUTES: Record<string, Route> = {
  home: { name: "Home", path: "/" },
  signup: { name: "Sign Up", path: "/signup" },
  resetPassword: { name: "Password Reset", path: "/reset_password" },
  welcome: { name: "Welcome", path: "/welcome" },
  waitlist: { name: "Join Waitlist", path: "/waitlist" },
};
export default ROUTES;

//* CTA Link
export const CTA_Link: Route = {
  name: "Join Waitlist",
  path: ROUTES.waitlist.path,
};

//* Redirect Link
export const REDIRECT_PATH: string = "/redirect";
export const REDIRECT_LINK: string = "http://localhost:4321" + REDIRECT_PATH;

//* Payment Link
export const PAYMENT_LINK: string = "http://localhost:4321/payment";
