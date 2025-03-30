import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@components/FormComponents/Input";
import Button from "@components/FormComponents/Button";
import { supabase } from "@lib/supabase";

const waitlistFormSchema = z.object({
  email: z.string().email("Invalid Email"),
});

export type waitlistFormFields = z.infer<typeof waitlistFormSchema>;

const Form = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<waitlistFormFields>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(waitlistFormSchema),
  });

  const handleEmailSignup: SubmitHandler<waitlistFormFields> = async (data) => {
    try {
      console.log("Email Signup");
      console.log(data);
      const { email } = data;
      const response = await supabase.auth.resetPasswordForEmail(email);

      if (response.error) throw new Error(response.error.message);

      //* Show success message
      setSubmitted(true);
    } catch (error) {
      setSubmitted(false);
      setError("root", { message: "Something went wrong. Please try again." });
    } finally {
      reset();
      window.location.href = "https://github.com/";
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitted(false);
    }
  };

  return (
    <>
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
