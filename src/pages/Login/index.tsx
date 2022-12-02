import { ContentCard } from "../../components/ContentCard";
import { LoginForm } from "./components/LoginForm";

export function Login() {
  return (
    <ContentCard>
      <div className="lg:w-[50%] bg-hero flex flex-col justify-end">
        <div className="ml-5 mb-16">
          <h2 className="text-bold text-3xl text-white">
            Divirta-se e aprenda de onde estiver
          </h2>
          <p className="text-xl text-white my-3">
            Quizzes temáticos e didáticos
          </p>
          <p className="text-xl text-white">
            Aproveite e faça parte deste jogo
          </p>
        </div>
      </div>
      <div className="lg:w-[50%] h-full flex flex-col items-center justify-center">
        <h2 className="text-5xl text-bold text-white">QUIZZING</h2>
        <p className="text-base text-white my-8">
          Faça parte da maior comunidade de quizz do Brasil
        </p>
        <LoginForm />
      </div>
    </ContentCard>
  );
}
