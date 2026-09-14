import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";

export function Hero() {
  return (
    <section className="border-b border-gray-100 bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Professional Decorative MDF Lamination
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            We laminate your MDF panels using your decorative paper or available
            designs, delivering consistent quality for furniture manufacturers
            across Iran.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <LinkButton href="/contact" variant="primary">
              Contact Us
            </LinkButton>

            <LinkButton href="/gallery" variant="secondary">
              View Gallery
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
