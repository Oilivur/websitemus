import MaintenancePage from "./MaintenancePage";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Root } from "./components/Root";
import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";

export default function App() {
    const hash = window.location.hash;

    if (!hash || hash === "#/" || hash === "#") {
        return <MaintenancePage />;
    }

    if (hash.startsWith("#/sample")) {
        return (
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Root />}>
                        <Route path="sample" element={<Homepage />} />
                        <Route path="sample/about" element={<About />} />
                        <Route path="sample/gallery" element={<Gallery />} />
                    </Route>
                </Routes>
            </HashRouter>
        );
    }

    return <MaintenancePage />;
}