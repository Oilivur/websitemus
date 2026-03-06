import { Link, useLocation } from "react-router";
import { Music2 } from "lucide-react";

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-[#E8DCC4] border-b border-[#D4C5A0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <Music2 className="w-8 h-8 text-[#8B7355]" />
            <span className="text-xl text-[#5C4E3A]">Rasmus Kalep</span>
          </Link>
          
          <div className="flex gap-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/") && location.pathname === "/"
                  ? "bg-[#D4C5A0] text-[#3D3326]"
                  : "text-[#5C4E3A] hover:bg-[#D4C5A0]/50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/about")
                  ? "bg-[#D4C5A0] text-[#3D3326]"
                  : "text-[#5C4E3A] hover:bg-[#D4C5A0]/50"
              }`}
            >
              About & Contact
            </Link>
            <Link
              to="/gallery"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/gallery")
                  ? "bg-[#D4C5A0] text-[#3D3326]"
                  : "text-[#5C4E3A] hover:bg-[#D4C5A0]/50"
              }`}
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
