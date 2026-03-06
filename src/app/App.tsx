import MaintenancePage from "./MaintenancePage";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Root } from "./components/Root";
import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";

export default function App() {
    const path = window.location.pathname;

    if (path === "/") {
        return <MaintenancePage />;
    }

    if (path.startsWith("/sample")) {
        return (
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Root />}>
                        <Route index element={<Homepage />} />
                        <Route path="about" element={<About />} />
                        <Route path="gallery" element={<Gallery />} />
                    </Route>
                </Routes>
            </HashRouter>
        );
    }

    return <MaintenancePage />;
}