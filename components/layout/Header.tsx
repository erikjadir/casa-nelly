"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "./navLinks";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#5E5145]/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col group transition-opacity duration-200 hover:opacity-90">
          <span className="text-[#70703A] font-bold tracking-[0.15em] text-lg leading-tight">
            CASA NELLY
          </span>
          <p className="text-xs text-[#5E5145] tracking-wide font-light">
            Escuela de Artes Dulces
          </p>
        </Link>

        <nav className="hidden md:flex gap-10 text-[#5E5145] font-medium items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-[#70703A] transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#70703A] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-[#5E5145] hover:text-[#70703A] focus:outline-none rounded-lg hover:bg-[#5E5145]/5 transition-colors"
          aria-label="Abrir menú de navegación"
        >
          <svg
            className="w-6 h-6 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#FAF7F2] border-b border-[#5E5145]/10 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 text-[#5E5145] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-1 hover:text-[#70703A] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
