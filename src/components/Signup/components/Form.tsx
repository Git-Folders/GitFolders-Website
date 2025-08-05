import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@components/FormComponents/Input";
import Button from "@components/FormComponents/Button";
import { Github } from "lucide-react";
import { supabase } from "@lib/supabase";
import { REDIRECT_PATH, REDIRECT_LINK } from "@/NavRoutes";
import { SignupFormSchema, type SignupFormFields } from "@utils/schema";

const Form = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isGitHubSignup, setIsGitHubSignup] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<SignupFormFields>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignupFormSchema),
  });

  const handleGitHubSignup = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    try {
      setIsGitHubSignup(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: REDIRECT_LINK,
        },
      });
      if (error) throw error;
    } catch (error) {
      setError("root", { message: "Something went wrong. Please try again." });
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsGitHubSignup(false);
    }
  };

  const handleEmailSignup: SubmitHandler<SignupFormFields> = async (data) => {
    try {
      const { name, email, password } = data;
      const response = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            display_name: name,
          },
          emailRedirectTo: REDIRECT_LINK,
        },
      });
      if (response.error) throw response.error;
      //* Show success message
      setSubmitted(true);
    } catch (error) {
      setSubmitted(false);
      setError("root", { message: "Something went wrong. Please try again." });
    } finally {
      reset();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitted(false);
      window.location.href = `/${REDIRECT_PATH}`;
    }
  };

  return (
    <div className="flex flex-col gap-y-3">
      <button
        type="button"
        onClick={(e) => {
          handleGitHubSignup(e);
        }}
        disabled={isSubmitting}
        className="flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-slate-300 bg-slate-50 p-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-300 hover:text-black md:text-base"
      >
        <Github className="size-6" />
        <span>Sign up with Github</span>
      </button>

      <div className="mt-2 flex items-center justify-center text-xs md:text-sm">
        <div className="flex-1 border-t border-slate-700"></div>
        <span className="px-2 text-slate-400">Or continue with email</span>
        <div className="flex-1 border-t border-slate-700"></div>
      </div>

      <form
        onSubmit={handleSubmit(handleEmailSignup)}
        className="relative flex flex-col gap-y-2"
      >
        {errors.root && (
          <span className="absolute -top-5 z-50 self-center rounded-xl border-2 border-red-200 bg-red-50 p-2 text-xs text-red-500 shadow-2xl md:text-sm dark:border dark:border-red-900 dark:bg-red-950 dark:text-red-100">
            {errors.root.message}
          </span>
        )}

        {(isSubmitting || submitted) && (
          <div className="absolute -top-7 animate-bounce self-center rounded-xl border-2 border-green-200 bg-green-50 p-2 text-xs text-green-500 shadow-2xl md:text-sm dark:border dark:border-green-900 dark:bg-green-950 dark:text-green-100">
            {submitted ? (
              <span>
                Successfully signed up. <br /> Check you email.
              </span>
            ) : (
              "Signing Up..."
            )}
          </div>
        )}

        <Input
          control={control}
          name="name"
          label="Name"
          placeholder="John Doe"
          type="text"
          autoComplete="name"
        />

        <Input
          control={control}
          name="email"
          label="Email address"
          placeholder="you@example.com"
          type="email"
          autoComplete="email"
        />

        <Input
          control={control}
          name="password"
          label="Password"
          placeholder="••••••••"
          type="password"
          autoComplete="on"
        />

        <Button
          type="submit"
          disabled={!isValid || isGitHubSignup || isSubmitting}
        >
          {isSubmitting ? "Signing Up..." : "Signup"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
