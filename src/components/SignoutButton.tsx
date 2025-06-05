import { supabase } from "@/lib/supabase";
import ROUTES from "@/NavRoutes";
import { useState } from "react";

const SignoutButton = () => {
  const [signoutError, setSignoutError] = useState<boolean>(false);
  const handleSignout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      window.location.href = ROUTES.home.path;
    } catch (error) {
      setSignoutError(true);
    } finally {
      setTimeout(() => {
        setSignoutError(false);
      }, 2000); // Reset error state after 2 seconds
    }
  };
  return (
    <>
      {signoutError && (
        <div className="absolute inset-x-0 top-5">
          <p className="text-md bgb animate-pulse text-center font-semibold text-red-500">
            Failed to sign out.
            <br /> Please try again.
          </p>
        </div>
      )}
      <button
        onClick={handleSignout}
        className="bg-accent hover:bg-accent-hover cursor-pointer rounded-lg px-3 py-2 font-medium text-white transition-all"
      >
        signout
      </button>
    </>
  );
};

export default SignoutButton;
