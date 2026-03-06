import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";

export const router = createBrowserRouter([
  {
    path: "/sample",
    element: <Root />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "about", element: <About /> },
      { path: "gallery", element: <Gallery /> },
    ],
  },
]);