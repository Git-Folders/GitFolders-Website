import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@components/FormComponents/Input";
import Button from "@components/FormComponents/Button";
import ROUTES from "@/NavRoutes";

const waitlistFormSchema = z.object({
  name: z.string().min(1, "Name Required"),
  email: z.string().email("Invalid Email"),
  receive_regular_updates: z.boolean().optional(),
});

export type waitlistFormFields = z.infer<typeof waitlistFormSchema>;

const Form = () => {
  const waitlistWebhook =
    "https://hook.eu2.make.com/7jb7oc7j0ywnysadfjmoneufwbptid6p";
  const waitlistURL = new URL(waitlistWebhook);

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
      name: "",
      email: "",
      receive_regular_updates: true,
    },
    resolver: zodResolver(waitlistFormSchema),
  });

  const onSubmit: SubmitHandler<waitlistFormFields> = async (data) => {
    try {
      console.log(data);
      const { name, email, receive_regular_updates } = data;

      //* Format the name and email
      const firstName = name.trim().split(" ")[0];
      const formattedEmail = email.trim().toLowerCase();

      //* Create the waitlist params
      const waitlistParams = new URLSearchParams({
        name: firstName,
        email: formattedEmail,
        receive_regular_updates: receive_regular_updates ? "true" : "false",
      });

      //* Add the params to the waitlist URL
      waitlistURL.search = waitlistParams.toString();

      //* Send the request to Make.com to add the user to the waitlist
      const response = await fetch(waitlistURL, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }

      //* Show success message
      setSubmitted(true);
    } catch (error) {
      //* Show error message
      setSubmitted(false);
      setError("root", { message: "Something went wrong. Please try again." });
    } finally {
      //* Reset the form
      await new Promise((resolve) => setTimeout(resolve, 2000));
      reset();
      setSubmitted(false);
      //* Redirect to the home page
      window.location.href = ROUTES.home.path;
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col gap-y-3"
      >
        {errors.root && (
          <span className="absolute -top-5 self-center rounded-xl border-2 border-red-200 bg-red-50 p-2 text-sm text-red-500 shadow-2xl">
            {errors.root.message}
          </span>
        )}
        {(isSubmitting || submitted) && (
          <span className="absolute -top-5 animate-bounce self-center rounded-xl border-2 border-green-200 bg-green-50 p-2 text-green-500 shadow-2xl">
            {submitted
              ? "Successfully joined the waitlist"
              : "Joining the waitlist..."}
          </span>
        )}
        <Input
          control={control}
          name="name"
          label="Name"
          placeholder="John Doe"
          type="text"
          autoComplete="off"
        />

        <Input
          control={control}
          name="email"
          label="Email address"
          placeholder="you@example.com"
          type="email"
          autoComplete="off"
        />

        <Input
          control={control}
          name="receive_regular_updates"
          label="Send regular updates"
          type="checkbox"
          layout="flex-row-reverse"
        />

        <Button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? "Joining..." : "Join the Waitlist"}
        </Button>
      </form>
    </>
  );
};

export default Form;
