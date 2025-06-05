import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@components/FormComponents/Input";
import Button from "@components/FormComponents/Button";
import { supabase } from "@lib/supabase";
import ROUTES from "@/NavRoutes";
import {
  PasswordUpdateFormSchema,
  type PasswordUpdateFormFields,
} from "@/utils/schema";

const NewPasswordForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isPasswordUpdateInProgress, setIsPasswordUpdateInProgress] =
    useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<PasswordUpdateFormFields>({
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(PasswordUpdateFormSchema),
  });

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        setIsPasswordUpdateInProgress(true);
      }
    });
  }, []);

  const handleNewPassword: SubmitHandler<PasswordUpdateFormFields> = async (
    data,
  ) => {
    if (!isPasswordUpdateInProgress) {
      setError("root", { message: "Not a valid user to update password." });
      return;
    }
    try {
      const { password } = data;
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;
      setSubmitted(true);
    } catch (error) {
      console.log("error", error);
      setSubmitted(false);
      setError("root", { message: "Something went wrong. Please try again." });
    } finally {
      reset();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitted(false);
      // Navigate to home page after successful password update
      window.location.href = ROUTES.home.path;
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleNewPassword)}
        className="relative flex flex-col gap-y-2"
      >
        {errors.root && (
          <span className="absolute -top-5 z-50 self-center rounded-xl border-2 border-red-200 bg-red-50 p-2 text-sm text-red-500 shadow-2xl dark:border dark:border-red-900 dark:bg-red-950 dark:text-red-100">
            {errors.root.message}
          </span>
        )}
        {(isSubmitting || submitted) && (
          <span className="absolute -top-5 animate-bounce self-center rounded-xl border-2 border-green-200 bg-green-50 p-2 text-green-500 shadow-2xl dark:border dark:border-green-900 dark:bg-green-950 dark:text-green-100">
            {submitted ? "Password Updated" : "Updating Password..."}
          </span>
        )}

        <Input
          control={control}
          name="password"
          label="New Password"
          placeholder="••••••••"
          type="password"
          autoComplete="new-password"
        />

        <Input
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="••••••••"
          type="password"
          autoComplete="new-password"
        />

        <Button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? "Updating Password..." : "Update Password"}
        </Button>
      </form>
    </>
  );
};

export default NewPasswordForm;
