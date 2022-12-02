import { InputHTMLAttributes } from "react";

export interface SecureInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: string;
  margin?: string;
}
