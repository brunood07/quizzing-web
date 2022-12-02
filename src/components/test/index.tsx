import { TestProps } from "./test.types";

export function Test({ text }: TestProps) {
  return <h2 className="text-lg text-[#FF0000]">{text}</h2>;
}
