"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <Container>
        <nav className="py-4" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
              aria-label="Arsin homepage"
            >
              <Image
                src="/brand/arsin-logo-horizontal.svg"
                alt="Arsin Industrial Group"
                width={160}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 transition hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              type="button"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-4 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>

          {menuOpen && (
            <div
              id="mobile-menu"
              className="mt-4 flex flex-col gap-1 border-t border-gray-200 pt-4 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}
