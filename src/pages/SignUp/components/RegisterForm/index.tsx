import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useProfile } from "../../../../hooks/useProfile";

import { RegisterFormProps } from "./RegisterForm.types";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { SecureInput } from "../../../../components/SecureInput";
import { Spinner } from "../../../../components/Spinner";

const profileRegisterSchema = zod.object({
  firstName: zod.string().min(1, { message: "Nome é obrigatório" }),
  lastName: zod.string().min(1, { message: "Sobrenome é obrigatório" }),
  email: zod.string().email().min(1, { message: "Email é obrigatório" }),
  document: zod
    .string()
    .min(14, { message: "CPF Inválido" })
    .max(14, { message: "CPF Inválido" }),
  dateOfBirth: zod
    .string()
    .min(8, { message: "Data inválida" })
    .max(8, { message: "Data inválida" }),
  password: zod.string().min(1, { message: "Senha é obrigatória" }),
  passwordConfirmation: zod
    .string()
    .min(1, { message: "Confirmação de senha é obrigatória" }),
});

type profileRegisterInputs = zod.infer<typeof profileRegisterSchema>;

export const RegisterForm = () => {
  const { createProfile } = useProfile();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<profileRegisterInputs>({
    resolver: zodResolver(profileRegisterSchema),
  });
  console.log("🚀 ~ file: index.tsx:34 ~ RegisterForm ~ errors", errors);

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
        type="email"
        errors={errors.email}
      />
      <Input
        label="Nome"
        placeholder="Digite o seu nome"
        registerName="firstName"
        register={register}
        errors={errors.firstName}
      />
      <Input
        label="Sobrenome"
        placeholder="Digite o seu sobrenome"
        registerName="lastName"
        register={register}
        errors={errors.lastName}
      />

      <div className="flex flex-row max-w-[300px] h-[80px] w-full justify-between">
        <Input
          label="Data de nascimento"
          placeholder="01/12/1980"
          width="140px"
          registerName="dateOfBirth"
          register={register}
          errors={errors.dateOfBirth}
        />
        <Input
          label="Documento (CPF)"
          placeholder="111.111.111-11"
          width="140px"
          registerName="document"
          register={register}
          errors={errors.document}
        />
      </div>

      <SecureInput
        label="Senha"
        placeholder="Digite sua senha"
        registerName="password"
        register={register}
        errors={errors.password}
      />
      <SecureInput
        label="Confirmação de senha"
        placeholder="Digite novamente a sua senha"
        registerName="passwordConfirmation"
        register={register}
        errors={errors.passwordConfirmation}
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
