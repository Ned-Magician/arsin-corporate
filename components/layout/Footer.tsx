import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-10 text-gray-200">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-white">Arsin Industrial Group</p>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-3"
            aria-label="Footer navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6">
          <p className="text-sm text-gray-400">© Arsin Industrial Group</p>
        </div>
      </Container>
    </footer>
  );
}
