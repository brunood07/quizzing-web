import { useMediaContext } from "../../hooks/useMediaContext";
import { ContentCardProps } from "./ContentCard.types";

export const ContentCard = (props: ContentCardProps) => {
  const { children } = props;

  const isMobile = useMediaContext();
  console.log("🚀 ~ file: index.tsx:8 ~ ContentCard ~ isMobile", isMobile);

  return (
    <main
      className={`flex w-full max-w-[1140px] h-screen lg:max-h-[700px] m-auto shadow-[px 1px 2px rgba(0, 0, 0, 0.25)] rounded-lg bg-purple-500 lg:mt-20 ${
        isMobile ? "flex-col" : "flex-row"
      }`}
    >
      {children}
    </main>
  );
};
