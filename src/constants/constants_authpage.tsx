import { ReactNode } from "react";

import { Link } from "react-router";
import { ROUTES } from "./constants_homepage";

export const SIGNUP_PAGE: {
  heading: string;
  tagLine: string;
  authFunctionType: "signup" | "login";
  authButtonLabel: string;
  alternateAuthMessage: ReactNode;
} = {
  heading: "Create your account",
  tagLine:
    "Kickstart your journey to effortless GitHub organization." /* "Join thousands of developers organizing their GitHub repositories" */,
  authFunctionType: "signup",
  authButtonLabel: "Create account",
  alternateAuthMessage: (
    /* For text alignment, go to AuthPage.tsx */
    <p className="text-text-secondary">
      {"Already have an account? "}
      {/* //! Path on Signup page should lead to login page */}
      <Link to={ROUTES.login.path} className="text-accent hover:underline">
        Sign in
      </Link>
    </p>
  ),
} as const;

export const LOGIN_PAGE: {
  heading: string;
  tagLine: string;
  authFunctionType: "signup" | "login";
  authButtonLabel: string;
  alternateAuthMessage: ReactNode;
} = {
  heading: "Welcome back!",
  tagLine: "Sign in to continue organizing your GitHub repositories",
  authFunctionType: "login",
  authButtonLabel: "Sign in",
  alternateAuthMessage: (
    /* For text alignment, go to AuthPage.tsx */
    <p className="text-text-secondary">
      {"Don\'t have an account? "}
      {/* //! Path on Login page should lead to signup page */}
      <Link to={ROUTES.signup.path} className="text-accent hover:underline">
        Sign up
      </Link>
    </p>
  ),
} as const;
