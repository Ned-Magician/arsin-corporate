"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Container>
        <nav className="py-5">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/brand/arsin-logo-horizontal.svg"
                alt="Arsin Industrial Group"
                width={160}
                height={50}
                className="h-10 w-auto"
              />
            </Link>

            <div className="hidden gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              type="button"
              className="md:hidden"
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
              className="flex flex-col gap-4 border-t border-gray-200 pt-4 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4"
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
