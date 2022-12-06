import { InputHTMLAttributes } from "react";

interface Error {
  message: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: any;
  registerName: string;
  register: any;
  width?: string;
}
