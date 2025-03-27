import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Default Tippy styles
import "tippy.js/dist/border.css";
import { ArrowRight } from "lucide-react";
import validator from "email-validator";

// Helper function to validate the password
const validatePassword = (password: string): boolean => {
  const minLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!#@%$]/.test(password);
  return (
    minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
  );
};

const EmailAuthForm = ({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
  buttonText,
}: {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  buttonText: string;
}) => {
  // Email validation using email-validator package.
  const isValidEmail = email.trim() && validator.validate(email.trim());
  // Password validation using the helper function.
  const isValidPassword = password && validatePassword(password);

  // Email tooltip message handling all cases:
  const emailTooltip =
    email.trim() === ""
      ? "Enter your email address"
      : !isValidEmail
        ? "Please enter a valid email address"
        : "Email address looks good";

  // Password tooltip message (formatted as a React element)
  const passwordTooltip =
    password === "" ? (
      "Enter your password"
    ) : !isValidPassword ? (
      <div>
        <p className="font-bold">Password requirements:</p>
        <ul className="list-disc pl-4">
          <li>At least 8 characters long</li>
          <li>Include uppercase and lowercase letters</li>
          <li>Include numbers</li>
          <li>Include one of these special characters: !, #, @, %, $</li>
        </ul>
      </div>
    ) : (
      "Password looks good"
    );

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <InputField
        label="Email address"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        tooltip={emailTooltip}
        error={email !== "" && !isValidEmail}
      />
      <InputField
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
        tooltip={passwordTooltip}
        error={password !== "" && !isValidPassword}
      />
      <button
        type="submit"
        className="bg-accent group hover:bg-accent-hover flex w-full items-center justify-center space-x-2 rounded-lg p-3 text-white transition-all"
      >
        <span>{buttonText}</span>
        <ArrowRight className="h-5 w-5 duration-200 ease-out group-hover:translate-x-4" />
      </button>
    </form>
  );
};

export default EmailAuthForm;

const InputField = ({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
  tooltip,
  error,
}: {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  tooltip: React.ReactNode;
  error: boolean;
}) => {
  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="text-text-primary block text-sm font-medium"
      >
        {label}
      </label>
      <Tippy content={tooltip} theme="custom">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`placeholder:text-text-placeholder transition-color w-full rounded-xl border border-gray-300 bg-gray-100 p-3 duration-200 outline-none focus:ring-1 ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "focus:border-accent focus:ring-accent"
          }`}
          required
        />
      </Tippy>
    </div>
  );
};
