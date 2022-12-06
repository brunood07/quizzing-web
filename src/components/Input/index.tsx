import { InputProps } from "./Input.types";

export const Input = (props: InputProps) => {
  const { errors, label, register, registerName, width } = props;

  return (
    <div className={`flex flex-col h-full max-h-[80px]`}>
      <label className="ml-1 text-sm text-purple-900">{label}</label>
      <input
        type="text"
        className={`
        ${
          width ? "w-[140px]" : "w-[300px]"
        } h-[40px] rounded-[4px] px-4 bg-gray-300 placeholder:py-3 mt-[6px] shadow-default focus:outline-none focus:ring-2 focus:ring-offset-[#088F8F] ${
          errors && "border-2 border-red-500"
        }`}
        {...register(registerName)}
        {...props}
      />
      {errors && (
        <span className="text-sm text-red-500 text-bold">{errors}</span>
      )}
    </div>
  );
};
