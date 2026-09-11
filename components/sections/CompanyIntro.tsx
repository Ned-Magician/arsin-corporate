import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CompanyIntro() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading>About Arsin</SectionHeading>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold">What We Do</h3>

            <p className="text-gray-600">
              Arsin provides MDF lamination services for furniture workshops and
              manufacturers.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Who We Work With</h3>

            <p className="text-gray-600">
              We work with furniture manufacturers, cabinet workshops, interior
              decoration companies, and contractors.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
