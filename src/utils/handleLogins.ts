import { FormEvent, Dispatch, SetStateAction } from "react";
import { supabase } from "../lib/supabase";

type AuthAction = "signup" | "login";

export const handleEmailAuth = async (
  e: FormEvent,
  action: AuthAction,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string | null>>,

  email: string,
  password: string,
) => {
  e.preventDefault();
  try {
    setLoading(true);
    setError(null);

    let response;
    if (action === "signup") {
      response = await supabase.auth.signUp({ email, password });
    } else {
      response = await supabase.auth.signInWithPassword({ email, password });
    }

    if (response.error) throw response.error;

    // Optionally navigate after success
    // navigate("/dashboard");
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

export const handleGithubAuth = async (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string | null>>,
) => {
  try {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) throw error;
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

export const handleGoogleAuth = async (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string | null>>,
) => {
  try {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) throw error;
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
