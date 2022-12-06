import { api } from "../services/api";

type AuthResponse = {
  token: string;
  user: {
    fullName: string;
    email: string;
  };
  refreshToken: string;
};

export function useAuth() {
  const login = async (email: string, password: string) =>
    await api.post("/users/login", { email, password });

  return { login };
}
