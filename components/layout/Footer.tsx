import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p>Arsin Industrial Group</p>

          <nav className="flex gap-6">
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
