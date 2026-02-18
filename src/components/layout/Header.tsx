// /components/layout/Header.tsx

"use client";
import { useState, useEffect, useRef } from "react";

const links = [
  { short: "H", full: "Home", href: "/" },
  { short: "A", full: "About", href: "/#about" },
  { short: "P", full: "Projects", href: "/#projects" },
  { short: "C", full: "Contact", href: "/#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 flex-col gap-2 z-50 hidden md:flex">
        {links.map((item) => (
          <a
            key={item.short}
            href={item.href}
            className="group relative flex overflow-visible"
          >
            <div className="bg-gray-800/70 text-white px-3 py-2 font-mono text-sm rounded-r-full group-hover:opacity-0 transition-opacity duration-300 shadow-md">
              {item.short}
            </div>

            <div className="absolute left-0 pl-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-sm font-medium text-white bg-gray-800/70 py-2 px-3 rounded-r-full pointer-events-none group-hover:pointer-events-auto shadow-md">
              {item.full}
            </div>
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="fixed bottom-4 left-4 w-[40px] h-[40px] z-50 bg-black/70 text-white rounded-full md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="fixed bottom-16 left-4 bg-black/70 text-white px-6 py-4 rounded-lg shadow-lg flex flex-col gap-2 z-40 md:hidden"
        >
          {["Home", "Projects", "About", "Contact"].map((label) => (
            <a
              key={label}
              href="#"
              className="text-sm hover:underline"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
