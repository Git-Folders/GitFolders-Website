import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@components/FormComponents/Input";
import Button from "@components/FormComponents/Button";
import { Github } from "lucide-react";

const waitlistFormSchema = z.object({
  name: z.string().min(1, "Name Required"),
  email: z.string().email("Invalid Email"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type waitlistFormFields = z.infer<typeof waitlistFormSchema>;

const Form = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isGitHubSignup, setIsGitHubSignup] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<waitlistFormFields>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(waitlistFormSchema),
  });

  const handleGitHubSignup = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    try {
      setIsGitHubSignup(true);
      console.log("GitHub Signup");
      //TODO: Handle GitHub Signup
    } catch (error) {
      throw new Error("Something went wrong. Please try again.");
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsGitHubSignup(false);
    }
  };

  const handleEmailSignup: SubmitHandler<waitlistFormFields> = async (data) => {
    try {
      console.log("Email Signup");
      console.log(data);
      //TODO: Handle Email Signup
      //const { name, email, password } = data;
      //* Show success message
      setSubmitted(true);
    } catch (error) {
      setError("root", { message: "Something went wrong. Please try again." });
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      reset();
      setSubmitted(false);
      // TODO:Handle redirect to home page
      //   window.location.href = "/";
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
        className="hover:bg-text-primary flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-black p-3 font-medium text-black transition-colors hover:text-white"
      >
        <Github className="size-6" />
        <span>Sign up with Githuh</span>
      </button>
      <form
        onSubmit={handleSubmit(handleEmailSignup)}
        className="relative flex flex-col gap-y-2"
      >
        {errors.root && (
          <span className="absolute -top-5 self-center rounded-xl border-2 border-red-200 bg-red-50 p-2 text-sm text-red-500 shadow-2xl">
            {errors.root.message}
          </span>
        )}
        {(isSubmitting || submitted) && (
          <span className="absolute -top-5 animate-bounce self-center rounded-xl border-2 border-green-200 bg-green-50 p-2 text-green-500 shadow-2xl">
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
          {isSubmitting ? "Joining..." : "Join the Waitlist"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
