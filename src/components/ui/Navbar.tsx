import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-xl border-b border-purple-600/20">
      <div className="w-full page-padding-x">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              CrainnoAI
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActivePath("/")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/download"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActivePath("/download")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Download
            </Link>
            {/* <Link
              to="/try-on"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActivePath("/try-on")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Try On
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
