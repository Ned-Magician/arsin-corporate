import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p>Arsin Industrial Group</p>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
