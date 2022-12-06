import { ContentCard } from "../../components/ContentCard";

export function Home() {
  return (
    <ContentCard>
      <div className="bg-purple-500 h-full w-full rounded-xl px-10 py-5">
        <div className="w-full h-[70px] bg-purple-300 shadow-default rounded-xl"></div>
        <div className="w-full h-5/6 mt-6 bg-purple-300 shadow-default rounded-xl"></div>
      </div>
    </ContentCard>
  );
}
