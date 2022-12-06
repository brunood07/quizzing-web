import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: string;
  registerName: string;
  register: any;
  width?: string;
}
