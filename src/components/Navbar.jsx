import { useState } from "react";

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/techstacks", label: "Stack" },
    { path: "/certifications", label: "Certifications" },
  ];

  return (
    <nav className="bg-white w-full border-b-2 border-gray-100 sticky top-0 py-4 px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center max-w-7xl mx-auto w-full">       
        <h5 className="text-lg">JM</h5>

        {/* Center */}
        <ul className="hidden md:flex md:items-center md:justify-center gap-8 text-md cursor-pointer">
          {links.map((link) => (
            <li key={link.path}>
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden ml-auto p-1.5 text-gray-600 hover:text-gray-900 transition-colors duration-150"
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

        {/* Right (empty spacer to balance the left column) */}
        <div className="hidden md:block" />
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 border-t border-gray-100">
          {links.map((link) => (
            <li key={link.href}>
              
              <a href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}