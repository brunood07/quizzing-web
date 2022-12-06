import { useMediaContext } from "../../hooks/useMediaContext";
import { ContentCardProps } from "./ContentCard.types";

export const ContentCard = (props: ContentCardProps) => {
  const { children } = props;

  const isMobile = useMediaContext();

  return (
    <main
      className={`flex w-full max-w-[1140px] lg:h-screen lg:max-h-[700px] m-auto shadow-default lg:my-10 ${
        isMobile ? "flex-col overflow-y-scroll" : "flex-row rounded-xl"
      }`}
    >
      {children}
    </main>
  );
};
