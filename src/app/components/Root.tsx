import { Outlet } from "react-router";
import { Navigation } from "./Navigation";

export function Root() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navigation />
      <Outlet />
    </div>
  );
}
