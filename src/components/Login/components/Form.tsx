import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@components/FormComponents/Input";
import Button from "@components/FormComponents/Button";
import { Github } from "lucide-react";
import { supabase } from "@lib/supabase";
import ROUTES, { REDIRECT_PATH, REDIRECT_LINK } from "@/NavRoutes";
import { LoginFormSchema, type LoginFormFields } from "@/utils/schema";

const Form = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isGitHubLogin, setIsGitHubLogin] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<LoginFormFields>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const handleGitHubLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    try {
      setIsGitHubLogin(true);
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
      setIsGitHubLogin(false);
    }
  };

  const handleEmailLogin: SubmitHandler<LoginFormFields> = async (data) => {
    try {
      const { email, password } = data;
      const response = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
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
          handleGitHubLogin(e);
        }}
        disabled={isSubmitting}
        className="flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-slate-300 bg-slate-100 p-3 font-medium text-slate-900 transition-colors hover:bg-slate-300 hover:text-black"
      >
        <Github className="size-6" />
        <span>Login with Github</span>
      </button>

      <div className="mt-2 flex items-center justify-center text-sm">
        <div className="flex-1 border-t border-slate-700"></div>
        <span className="px-2 text-slate-400">Or continue with email</span>
        <div className="flex-1 border-t border-slate-700"></div>
      </div>

      <form
        onSubmit={handleSubmit(handleEmailLogin)}
        className="relative flex flex-col gap-y-2"
      >
        {errors.root && (
          <span className="absolute -top-5 z-50 self-center rounded-xl border-2 border-red-200 bg-red-50 p-2 text-sm text-red-500 shadow-2xl dark:border dark:border-red-900 dark:bg-red-950 dark:text-red-100">
            {errors.root.message}
          </span>
        )}

        {(isSubmitting || submitted) && (
          <span className="absolute -top-5 animate-bounce self-center rounded-xl border-2 border-green-200 bg-green-50 p-2 text-sm text-green-500 shadow-2xl dark:border dark:border-green-900 dark:bg-green-950 dark:text-green-100">
            {submitted ? "Successfully Logged In" : "Logging In..."}
          </span>
        )}

        <Input
          control={control}
          name="email"
          label="Email address"
          placeholder="you@example.com"
          type="email"
          autoComplete="on"
        />

        <Input
          control={control}
          name="password"
          label="Password"
          placeholder="••••••••"
          type="password"
          autoComplete="on"
        />

        <p className="text-xs text-slate-300">
          {"Forgot password? "}
          <a
            href={ROUTES.resetPassword.path}
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Reset now
          </a>
        </p>

        <Button
          type="submit"
          disabled={!isValid || isGitHubLogin || isSubmitting}
        >
          {isSubmitting ? "Logging In..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
