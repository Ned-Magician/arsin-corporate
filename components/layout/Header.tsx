"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/Container";

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
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/about">About</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <button
              type="button"
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              Menu
            </button>
          </div>

          {menuOpen && (
            <div
              id="mobile-menu"
              className="flex flex-col gap-4 pt-4 md:hidden"
            >
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>

              <Link href="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>

              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>

              <Link href="/faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </Link>

              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}
