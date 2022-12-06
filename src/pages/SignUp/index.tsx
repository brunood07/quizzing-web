import { ContentCard } from "../../components/ContentCard";
import { useMediaContext } from "../../hooks/useMediaContext";
import { RegisterForm } from "./components/RegisterForm";

export function SignUp() {
  const isMobile = useMediaContext();

  return (
    <ContentCard>
      <div
        className={`lg:w-[50%] flex flex-col items-center justify-start pt-6 bg-purple-500 ${
          isMobile ? "rounded-l-none" : "rounded-l-xl"
        } ${isMobile && "h-screen"}`}
      >
        <h2 className="text-5xl text-bold text-white">Cadastro</h2>
        <p className="text-base text-white my-4 text-center">
          Preencha com os seus dados para se cadastrar
        </p>

        <RegisterForm />
      </div>

      <div
        className={`lg:w-[50%] bg-signUp bg-cover flex flex-col justify-end items-end px-4 ${
          isMobile && "h-[94vh]"
        } ${isMobile ? "hidden" : "rounded-r-xl"}`}
      >
        <div className={`${isMobile ? "ml-5 mt-4" : "ml-5 mb-16"}`}>
          <h2 className="text-bold text-3xl text-white">
            Cadastra-se agora e aproveite
          </h2>
          <p className="text-2xl text-white mt-1">
            Quizzes temáticos e didáticos
          </p>
          <p className="text-2xl text-white">Aprenda enquanto se diverte</p>
        </div>
      </div>
    </ContentCard>
  );
}
