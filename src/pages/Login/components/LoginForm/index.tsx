import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { SecureInput } from "../../../../components/SecureInput";

export const LoginForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input label="Email" placeholder="Digite o seu email" />
      <SecureInput label="Senha" placeholder="Digite a sua senha" />
      <Button buttonLabel="Conectar" type="submit" />
      <div className="flex flex-col items-center my-8">
        <p className="text-sm text-white">Ainda não possui uma conta?</p>
        <a className="text-sm text-white underline" href="/sign-up">
          Cadastre-se aqui
        </a>
      </div>
    </form>
  );
};
