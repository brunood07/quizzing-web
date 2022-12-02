import { Button } from "../../components/Button";
import { ContentCard } from "../../components/ContentCard";
import { useMediaContext } from "../../hooks/useMediaContext";
import { LoginForm } from "./components/LoginForm";

export function Login() {
  const isMobile = useMediaContext();

  const handleConnect = () => {
    scroll({ top: 1000, behavior: "smooth" });
  };

  return (
    <ContentCard>
      <div
        className={`lg:w-[50%] bg-hero bg-cover flex flex-col ${
          isMobile ? "justify-start" : "justify-end"
        } ${isMobile && "h-[94vh]"}`}
      >
        <div className={`${isMobile ? "ml-5 mt-4" : "ml-5 mb-16"}`}>
          <h2 className="text-bold text-3xl text-white">
            Divirta-se e aprenda de onde estiver
          </h2>
          <p className="text-xl text-white my-3">
            Quizzes temáticos e didáticos
          </p>
          <p className="text-xl text-white">
            Aproveite e faça parte deste jogo
          </p>
          {isMobile && (
            <Button
              buttonLabel="Conecte-se agora mesmo"
              margin="mt-4"
              onClick={handleConnect}
            />
          )}
        </div>
      </div>
      <div
        className={`lg:w-[50%] flex flex-col items-center justify-center bg-purple-500 ${
          isMobile ? "rounded-r-none" : "rounded-r-xl"
        } ${isMobile && "h-screen"}`}
      >
        <h2 className="text-5xl text-bold text-white">QUIZZING</h2>
        <p className="text-base text-white my-8 text-center">
          Faça parte da maior comunidade de quizz do Brasil
        </p>
        <LoginForm />
      </div>
    </ContentCard>
  );
}
