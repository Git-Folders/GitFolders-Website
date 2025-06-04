import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@components/FormComponents/Input";
import Button from "@components/FormComponents/Button";
import { Github } from "lucide-react";
import { supabase } from "@lib/supabase";
import { REDIRECT_PATH, REDIRECT_LINK } from "@/NavRoutes";

const signupFormSchema = z.object({
  name: z.string().min(1, "Name Required"),
  email: z.string().email("Invalid Email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one digit")
    .regex(
      /[^a-zA-Z\d]/,
      "Password must contain at least one special character",
    ),
});

export type signupFormFields = z.infer<typeof signupFormSchema>;

const Form = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isGitHubSignup, setIsGitHubSignup] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<signupFormFields>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signupFormSchema),
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

  const handleEmailSignup: SubmitHandler<signupFormFields> = async (data) => {
    try {
      console.log("Form Data:", data);
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
      console.log("Signup Response:", response);
      if (response.error) throw response.error;
      //* Show success message
      setSubmitted(true);
    } catch (error) {
      setSubmitted(false);
      setError("root", { message: "Something went wrong. Please try again." });
    } finally {
      reset();
      setSubmitted(false);
      // window.location.href = `/${REDIRECT_PATH}`;
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
        className="hover:bg-text-primary flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-black bg-gray-100 p-3 font-medium text-black transition-colors hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-950"
      >
        <Github className="size-6" />
        <span>Sign up with Github</span>
      </button>

      <div className="mt-2 flex items-center justify-center text-sm">
        <div className="border-form-border flex-1 border-t"></div>
        <span className="px-2 text-gray-500">Or continue with email</span>
        <div className="border-form-border flex-1 border-t"></div>
      </div>

      <form
        onSubmit={handleSubmit(handleEmailSignup)}
        className="relative flex flex-col gap-y-2"
      >
        {errors.root && (
          <span className="absolute -top-5 self-center rounded-xl border-2 border-red-200 bg-red-50 p-2 text-sm text-red-500 shadow-2xl dark:border dark:border-red-900 dark:bg-red-950 dark:text-red-100">
            {errors.root.message}
          </span>
        )}

        {(isSubmitting || submitted) && (
          <span className="absolute -top-5 animate-bounce self-center rounded-xl border-2 border-green-200 bg-green-50 p-2 text-green-500 shadow-2xl dark:border dark:border-green-900 dark:bg-green-950 dark:text-green-100">
            {submitted ? "Successfully Signed Up" : "Signing Up..."}
          </span>
        )}

        <Input
          control={control}
          name="name"
          label="Name"
          placeholder="John Doe"
          type="text"
          autoComplete="on"
        />

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
