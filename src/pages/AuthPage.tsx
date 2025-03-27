import React, { ReactNode, useState } from "react";
import Navbar from "../components/Navbar";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import SocialAuthButton from "../components/AuthPageComponents/SocialAuthButton";
import EmailAuthForm from "../components/AuthPageComponents/EmailAuthForm";
import {
  handleEmailAuth,
  handleGithubAuth,
  handleGoogleAuth,
} from "../utils/handleLogins";

interface AuthProps {
  AUTH_PAGE: {
    heading: string;
    tagLine: string;
    authFunctionType: "signup" | "login";
    authButtonLabel: string;
    alternateAuthMessage: ReactNode;
  };
}

const AuthPage: React.FC<AuthProps> = ({ AUTH_PAGE }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="from-primary flex flex-1 items-center justify-center bg-gradient-to-b to-white px-4 py-6 max-md:mt-16 md:px-16 md:py-20">
        {/* This container is set to relative so that the overlayed error is positioned within it */}
        <div className="relative mx-auto w-full max-w-md">
          {error && (
            <div className="absolute top-4 left-1/2 z-10 w-full max-w-md -translate-x-1/2 transform">
              <div className="rounded-lg border border-red-300 bg-red-100 p-3 text-sm font-medium text-red-700 shadow-md">
                {error}
              </div>
            </div>
          )}

          <div className={`space-y-5 ${error ? "opacity-80" : "opacity-100"}`}>
            <div className="space-y-2 text-center">
              <h2 className="text-text-primary text-4xl font-bold">
                {AUTH_PAGE.heading}
              </h2>
              <p className="text-text-secondary text-lg">{AUTH_PAGE.tagLine}</p>
            </div>

            <div className="space-y-2">
              <SocialAuthButton
                onclick={() => handleGithubAuth(setLoading, setError)}
                disabled={loading}
                logo={<FaGithub className="h-6 w-6" />}
                buttonName="Github"
              />
              <SocialAuthButton
                onclick={() => handleGoogleAuth(setLoading, setError)}
                disabled={loading}
                logo={<FaGoogle className="h-6 w-6" />}
                buttonName="Google"
              />
            </div>

            <div className="flex items-center justify-center text-sm">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-2 text-gray-500">Or continue with email</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <EmailAuthForm
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              onSubmit={(e) =>
                handleEmailAuth(
                  e,
                  AUTH_PAGE.authFunctionType,
                  setLoading,
                  setError,
                  email,
                  password,
                )
              }
              buttonText={AUTH_PAGE.authButtonLabel}
            />

            <div className="text-center">{AUTH_PAGE.alternateAuthMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
