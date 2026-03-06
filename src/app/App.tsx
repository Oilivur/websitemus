import MaintenancePage from "./MaintenancePage";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  const path = window.location.pathname;

  if (path === "/") {
    return <MaintenancePage />;
  }

  if (path.startsWith("/sample")) {
    return <RouterProvider router={router} />;
  }

  return <MaintenancePage />;
}