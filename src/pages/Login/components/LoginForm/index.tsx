import { useForm } from "react-hook-form";

import { LoginFormProps } from "./LoginForm.types";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { SecureInput } from "../../../../components/SecureInput";
import { useAuth } from "../../../../hooks/useAuth";

export const LoginForm = () => {
  const { login } = useAuth();

  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm();

  const handleLogin = async (data: any) => {
    const { email, password } = data;
    return await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Input
        label="Email"
        placeholder="Digite o seu email"
        register={register}
        registerName="email"
      />
      <SecureInput
        label="Senha"
        placeholder="Digite a sua senha"
        register={register}
        registerName="password"
      />
      <Button type="submit" disabled={isSubmitting}>
        Conectar
      </Button>
      <div className="flex flex-col items-center my-8">
        <p className="text-sm text-white">Ainda não possui uma conta?</p>
        <a className="text-sm text-white underline" href="/sign-up">
          Cadastre-se aqui
        </a>
      </div>
    </form>
  );
};
