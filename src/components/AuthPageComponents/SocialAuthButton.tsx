import React from "react";

const SocialAuthButton = ({
  onclick,
  disabled,
  logo,
  buttonName,
}: {
  onclick: () => void;
  disabled: boolean;
  logo: React.ReactNode;
  buttonName: string;
  isLogin?: boolean;
}) => {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className="hover:bg-text-primary flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-black p-3 font-medium text-black transition-colors hover:text-white"
    >
      {logo}
      <span>{`Sign up with ${buttonName}`}</span>
    </button>
  );
};

export default SocialAuthButton;
