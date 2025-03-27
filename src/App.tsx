import { createBrowserRouter } from "react-router";

import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import JoinWaitlist from "./pages/JoinWaitlist";
import NotFound from "./pages/NotFound";

import { ROUTES } from "./constants/constants_homepage";
import { LOGIN_PAGE, SIGNUP_PAGE } from "./constants/constants_authpage";

export const App = createBrowserRouter([
  {
    path: ROUTES.home.path,
    element: <Home />,
  },
  {
    path: ROUTES.login.path,
    element: <AuthPage AUTH_PAGE={LOGIN_PAGE} />,
  },
  {
    path: ROUTES.signup.path,
    element: <AuthPage AUTH_PAGE={SIGNUP_PAGE} />,
  },
  {
    path: ROUTES.waitlist.path,
    element: <JoinWaitlist />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
