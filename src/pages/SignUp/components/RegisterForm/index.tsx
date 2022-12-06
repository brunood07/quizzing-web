import { useForm } from "react-hook-form";

import { useProfile } from "../../../../hooks/useProfile";

import { RegisterFormProps } from "./RegisterForm.types";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { SecureInput } from "../../../../components/SecureInput";
import { Spinner } from "../../../../components/Spinner";

export const RegisterForm = () => {
  const { createProfile } = useProfile();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<RegisterFormProps>();

  const handleRegisterSubmit = async (data: RegisterFormProps) => {
    return await createProfile({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      document: data.document,
      dateOfBirth: data.dateOfBirth,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleRegisterSubmit)}>
      <Input
        label="Email"
        placeholder="Digite o seu melhor email"
        registerName="email"
        register={register}
      />
      <Input
        label="Nome"
        placeholder="Digite o seu nome"
        registerName="firstName"
        register={register}
      />
      <Input
        label="Sobrenome"
        placeholder="Digite o seu sobrenome"
        registerName="lastName"
        register={register}
      />

      <div className="flex flex-row max-w-[300px] h-[80px] w-full justify-between">
        <Input
          label="Data de nascimento"
          placeholder="01/12/1980"
          width="140px"
          registerName="dateOfBirth"
          register={register}
        />
        <Input
          label="Documento (CPF)"
          placeholder="111.111.111-11"
          width="140px"
          registerName="document"
          register={register}
        />
      </div>

      <SecureInput
        label="Senha"
        placeholder="Digite sua senha"
        registerName="password"
        register={register}
      />
      <SecureInput
        label="Confirmação de senha"
        placeholder="Digite novamente a sua senha"
        registerName="passwordConfirmation"
        register={register}
      />

      {isSubmitting ? (
        <Spinner />
      ) : (
        <Button type="submit" disabled={isSubmitting}>
          Cadastrar
        </Button>
      )}
      <p className="text-white text-xs text-center mt-2">
        Ao se cadastrar você concorda com os termos de uso
      </p>
    </form>
  );
};
