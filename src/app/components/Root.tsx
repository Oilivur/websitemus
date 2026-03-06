import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export function Root() {
    return (
        <div className="min-h-screen bg-[#F5F1E8]">
            <Navigation />
            <Outlet />
        </div>
    );
}