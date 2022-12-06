import { InputHTMLAttributes } from "react";

export interface SecureInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: any;
  addStyle?: string;
  registerName: string;
  register: any;
}
