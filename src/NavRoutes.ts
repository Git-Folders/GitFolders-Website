// * App Routes
export type Route = {
  name: string;
  path: string;
};

const ROUTES: Record<string, Route> = {
  home: { name: "Home", path: "/" },
  login: { name: "Login", path: "/login" },
  signup: { name: "Sign Up", path: "/signup" },
  waitlist: { name: "Join Waitlist", path: "/waitlist" },
};

export const CTA_Link: Route["path"] = ROUTES.waitlist.path;

export default ROUTES;
