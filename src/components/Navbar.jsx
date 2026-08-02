import { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar({darkmode,toggleTheme}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/techstacks", label: "Stack" },
    { path: "/certifications", label: "Certifications" },
  ];



  return (
    <nav className="bg-white w-full border-b-2
       border-gray-100 dark:border-gray-500 sticky top-0 py-4 px-6 dark:bg-black dark:text-white">
  <div className="grid grid-cols-2 md:grid-cols-3 items-center max-w-7xl mx-auto w-full">
    <h5 className="text-lg">JM</h5>

    {/* Center */}
    <ul className="hidden md:flex md:items-center md:justify-center gap-8 text-md cursor-pointer">
      {links.map((link) => (
        <Link to={link.path} key={link.path}>{link.label}</Link>
      ))}
    </ul>

    {/* Right: toggle + hamburger grouped together, always right-aligned */}
    <div className="flex items-center justify-end gap-3">
      {darkmode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          onClick={toggleTheme}
          stroke="currentColor"
          className="h-4 w-4 cursor-pointer hover:bg-gray-700 hover:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          onClick={toggleTheme}
          stroke="currentColor"
          className="h-4 w-4 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      )}

      {/* Hamburger — mobile only */}
      <button
        className="md:hidden p-1.5 text-gray-600 hover:text-gray-900 transition-colors duration-150"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        {mobileOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* Mobile dropdown panel */}
  <div
    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
      mobileOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
    }`}
  >
    <ul className="flex flex-col items-center gap-4 py-4 border-t border-gray-100">
      {links.map((link) => (
        <Link to={link.path} key={link.path}>
          {link.label}
        </Link>
      ))}
    </ul>
  </div>
</nav>
  );
}