import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="bg-blue-500 w-full h-full overflow-y-auto shadow-[0px 1px 2px rgba(0, 0, 0, 0.25)] ">
      <Header />
      <Outlet />
    </div>
  );
}
