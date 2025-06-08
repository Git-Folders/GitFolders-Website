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
          <p className="text-md animate-pulse text-center font-semibold text-red-500">
            Failed to sign out.
            <br /> Please try again.
          </p>
        </div>
      )}
      <button
        onClick={handleSignout}
        className="cursor-pointer rounded-lg bg-blue-600 px-3 py-2 font-medium text-slate-100 transition-all hover:bg-blue-800"
      >
        Sign Out
      </button>
    </>
  );
};

export default SignoutButton;
