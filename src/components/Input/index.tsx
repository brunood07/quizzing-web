import { InputProps } from "./Input.types";

export const Input = (props: InputProps) => {
  const { errors, label } = props;

  return (
    <div className="flex flex-col">
      <label className="ml-1 text-sm text-purple-900">{label}</label>
      <input
        type="text"
        className={`w-[300px] h-[40px] rounded-[4px] px-4 bg-gray-300 placeholder:py-3 mt-[6px] focus:outline-none focus:ring-2 focus:ring-offset-[#088F8F] ${
          errors && "border-2 border-red-500"
        }`}
        {...props}
      />
      {errors && (
        <span className="text-sm text-red-500 text-bold">{errors}</span>
      )}
    </div>
  );
};
