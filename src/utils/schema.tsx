import { z } from "zod";

const name = z.string().min(1, "Name Required");
const emailSchema = z.string().email("Invalid Email");
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/\d/, "Password must contain at least one digit")
  .regex(/[^a-zA-Z\d]/, "Password must contain at least one special character");

export const SignupFormSchema = z.object({
  name: name,
  email: emailSchema,
  password: passwordSchema,
});
export const LoginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
export const PasswordResetFormSchema = z.object({
  email: emailSchema,
});
export const PasswordUpdateFormSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignupFormFields = z.infer<typeof SignupFormSchema>;
export type LoginFormFields = z.infer<typeof LoginFormSchema>;
export type PasswordResetFormFields = z.infer<typeof PasswordResetFormSchema>;
export type PasswordUpdateFormFields = z.infer<typeof PasswordUpdateFormSchema>;
