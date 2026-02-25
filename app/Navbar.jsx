"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Genre", path: "/genre" },
    { name: "Top Rated", path: "/top-rated" },
    
    { name: "Now Playing", path: "/now-playing" },
    { name: "FeedBack", path: "/feedback" }
  ];

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-red-500">
            MovieZone
          </h1>

          {/* Links */}
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition duration-300 hover:text-red-500 ${
                  pathname === link.path
                    ? "text-red-500 font-semibold"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}