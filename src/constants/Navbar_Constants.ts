// * App Name
export const NAME: string = "GitFolders";

// * App Routes
type Route = {
  name: string;
  path: string;
};

export const ROUTES: Record<string, Route> = {
  home: { name: "Home", path: "/" },
  login: { name: "Login", path: "/login" },
  signup: { name: "Sign Up", path: "/signup" },
  waitlist: { name: "Join Waitlist", path: "/waitlist" },
};
