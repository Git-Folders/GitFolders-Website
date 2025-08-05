import Input from "../FormComponents/Input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordSchema } from "@utils/schema";
import { z } from "zod";
import Button from "../FormComponents/Button";
import { useEffect, useState } from "react";
import { supabase } from "@lib/supabase";

const AccountSettingsFormSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  username: z.string().optional(),
  password: z.union([z.literal(""), passwordSchema]).optional(),
});
type AccountSettingsFormFields = z.infer<typeof AccountSettingsFormSchema>;

const passwordPlaceholder = "••••••••";

const AccountSettings = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: passwordPlaceholder,
  });

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<AccountSettingsFormFields>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(AccountSettingsFormSchema),
  });

  const [usernameField, setUsernameField] = useState<string>(""); // Track which field username came from
  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;

        const userMetadata = data.user?.user_metadata;
        let username = "";
        let foundUsernameField = "";

        // Check possible username fields in order of priority
        const usernameFields = [
          "display_name",
          "displayName",
          "full_name",
          "fullName",
          "user_name",
          "userName",
          "username",
        ];

        for (const field of usernameFields) {
          if (userMetadata?.[field]) {
            username = userMetadata[field];
            foundUsernameField = field;
            break;
          }
        }

        const usernameParts = username.split(" ");
        const firstName = userMetadata.firstName ?? (usernameParts[0] || "");
        const lastName =
          userMetadata.lastName ??
          (usernameParts[usernameParts.length - 1] || "");

        setUserData({
          firstName,
          lastName,
          username,
          password: passwordPlaceholder,
        });
        setUsernameField(foundUsernameField);
      } catch (error) {
        console.error(error);
        setError("root", {
          message: "Something went wrong. Please try again.",
        });
      }
    };
    getUserData();
  }, [setError]);

  const handleEmailSignup: SubmitHandler<AccountSettingsFormFields> = async (
    data,
  ) => {
    try {
      const { firstName, lastName, username, password } = data;

      // Prepare user_metadata update object
      const userMetadataUpdate: { [key: string]: string } = {};

      // Only update non-empty fields
      if (firstName) userMetadataUpdate.firstName = firstName;
      if (lastName) userMetadataUpdate.lastName = lastName;
      if (username && usernameField)
        userMetadataUpdate[usernameField] = username;

      // Update user metadata if there are changes
      if (Object.keys(userMetadataUpdate).length > 0) {
        const { error } = await supabase.auth.updateUser({
          data: userMetadataUpdate,
        });
        if (error) throw error;
        setSubmitted(true);
      }

      // Update password separately if provided and not the placeholder
      if (password && password !== passwordPlaceholder) {
        const { error } = await supabase.auth.updateUser({
          password,
        });
        if (error) throw error;
        setSubmitted(true);
      }
    } catch (error) {
      setSubmitted(false);
      console.error(error);
      setError("root", { message: "Something went wrong. Please try again." });
    } finally {
      reset();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitted(false);
    }
  };

  return (
    <div className="space-y-6 text-slate-50">
      <h2 className="text-2xl font-bold text-slate-50 md:text-4xl">
        Account Settings
      </h2>
      <form
        onSubmit={handleSubmit(handleEmailSignup)}
        className="relative flex w-full flex-col gap-4"
      >
        {errors.root && (
          <span className="absolute -top-5 z-50 self-center rounded-xl border-2 border-red-200 bg-red-50 p-2 text-xs text-red-500 shadow-2xl md:text-sm dark:border dark:border-red-900 dark:bg-red-950 dark:text-red-100">
            {errors.root.message}
          </span>
        )}

        {(isSubmitting || submitted) && (
          <div className="absolute -top-7 animate-bounce self-center rounded-xl border-2 border-green-200 bg-green-50 p-2 text-xs text-green-500 shadow-2xl md:text-sm dark:border dark:border-green-900 dark:bg-green-950 dark:text-green-100">
            {submitted
              ? "Your details have been updated successfully"
              : "Updating Details..."}
          </div>
        )}

        <div className="flex w-full flex-col justify-center gap-4 md:flex-row md:items-center">
          <Input
            control={control}
            name="firstName"
            label="First Name"
            placeholder={userData.firstName}
            type="text"
            autoComplete="off"
          />
          <Input
            control={control}
            name="lastName"
            label="Last Name"
            placeholder={userData.lastName}
            type="text"
            autoComplete="off"
          />
        </div>
        <Input
          control={control}
          name="username"
          label="Username"
          placeholder={userData.username}
          type="text"
          autoComplete="off"
        />

        <Input
          control={control}
          name="password"
          label="New Password"
          placeholder={userData.password}
          type="password"
          autoComplete="off"
        />

        <Button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? "Updating..." : "Update Details"}
        </Button>
      </form>
    </div>
  );
};

export default AccountSettings;
