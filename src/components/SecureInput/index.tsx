import { LockSimple, LockSimpleOpen } from "phosphor-react";
import { useState } from "react";

import { SecureInputProps } from "./SecureInput.types";

export const SecureInput = (props: SecureInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const { errors, label, addStyle, registerName, register } = props;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex flex-col h-full max-h-[80px] ${addStyle}`}>
      <label className="ml-1 text-sm text-purple-900">{label}</label>
      <div className="flex flex-row relative w-[300px] items-center justify-center">
        <input
          type={showPassword ? "text" : "password"}
          className={`w-full h-[40px] rounded-[4px] px-4 shadow-default bg-gray-300 placeholder:py-3 mt-[6px] focus:outline-none focus:ring-2 focus:ring-offset-[#088F8F] ${
            errors && "border-2 border-red-500"
          }`}
          {...register(registerName)}
          {...props}
        />
        <button
          className="absolute right-2 bottom-2"
          onClick={handleShowPassword}
        >
          {showPassword ? (
            <LockSimpleOpen size={24} color="#8A8E91" />
          ) : (
            <LockSimple size={24} color="#8A8E91" />
          )}
        </button>
      </div>
      {errors && (
        <span className="text-sm text-red-500 text-bold">{errors}</span>
      )}
    </div>
  );
};
