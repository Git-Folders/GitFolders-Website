import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@components/FormComponents/Input";
import Button from "@components/FormComponents/Button";
import { supabase } from "@lib/supabase";
import ROUTES, { UPDATE_PASSWORD_LINK } from "@/NavRoutes";
import {
  PasswordResetFormSchema,
  type PasswordResetFormFields,
} from "@/utils/schema";

const Form = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<PasswordResetFormFields>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(PasswordResetFormSchema),
  });

  const handleEmailPasswordReset: SubmitHandler<
    PasswordResetFormFields
  > = async (data) => {
    try {
      const { email } = data;
      const response = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: UPDATE_PASSWORD_LINK,
      });
      if (response.error) throw new Error(response.error.message);
      //* Show success message
      setSubmitted(true);
    } catch (error) {
      setSubmitted(false);
      setError("root", { message: "Something went wrong. Please try again." });
    } finally {
      reset();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitted(false);
      // Navigate to home page after successful reset
      window.location.href = ROUTES.home.path;
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleEmailPasswordReset)}
        className="relative flex flex-col gap-y-2"
      >
        {errors.root && (
          <span className="absolute -top-5 z-50 self-center rounded-xl border-2 border-red-200 bg-red-50 p-2 text-xs text-red-500 shadow-2xl md:text-sm dark:border dark:border-red-900 dark:bg-red-950 dark:text-red-100">
            {errors.root.message}
          </span>
        )}
        {(isSubmitting || submitted) && (
          <span className="absolute -top-5 z-50 animate-bounce self-center rounded-xl border-2 border-green-200 bg-green-50 p-2 text-xs text-green-500 shadow-2xl md:text-sm dark:border dark:border-green-900 dark:bg-green-950 dark:text-green-100">
            {submitted ? "Email Sent" : "Sending Email..."}
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

        <Button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? "Sending Email..." : "Reset Password"}
        </Button>
      </form>
    </>
  );
};

export default Form;
