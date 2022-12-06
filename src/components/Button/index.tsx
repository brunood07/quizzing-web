import { ButtonProps } from "./Button.types";

export const Button = (props: ButtonProps) => {
  const { children, margin } = props;

  return (
    <button
      className={`w-[300px] h-10 rounded-[4px] bg-blue-50 text-base text-purple-900 drop-shadow-[0px 1px 2px rgba(0, 0, 0, 0.25)] ${margin}`}
      {...props}
    >
      {children}
    </button>
  );
};
