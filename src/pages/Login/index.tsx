import { ContentCard } from "../../components/ContentCard";
import { useMediaContext } from "../../hooks/useMediaContext";

export function Login() {
  const isMobile = useMediaContext();

  return (
    <ContentCard>
      <div className="lg:w-[50%]">IMG</div>
      <div className="lg:w-[50%]">LOGIN FORM</div>
    </ContentCard>
  );
}
